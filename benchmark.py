import os
import re
import time
from urllib.parse import urlparse
import psutil
import requests
import httpx
import json
import mechanicalsoup
import asyncio
import pandas as pd
from bs4 import BeautifulSoup
from urllib3 import PoolManager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from playwright.async_api import async_playwright
from pyppeteer import launch
from crawlee.http_crawler.http_crawler import HttpCrawler
from crawlee.http_crawler.types import HttpCrawlingContext
from crawlee.storages.dataset import Dataset
from crawlee.storages.request_queue import RequestQueue
from lxml import html
from pyquery import PyQuery as pq

def sanitize_filename(filename):
	"""Sanitize the filename by replacing invalid characters with `_` ."""
	filename = filename.replace('www.','').replace('https://','').replace('http://','').replace('.com','')
	filename = re.sub(r'[^a-zA-Z0-9_]', '_', filename)
	filename = re.sub(r'__+', '_', filename)
	return filename.rstrip('_')

# Define a function to measure time, memory, CPU usage, network requests and data size
def benchmark(func):
	"""
	Benchmark a given function by measuring its execution time, memory usage, CPU usage, and network requests.

	Parameters:
	- func: The function to be benchmarked. It should not take any arguments.

	Returns:
	- A dictionary containing the benchmark results
	"""
	def wrapper(*args, **kwargs):
		"""
		Benchmark a given function by measuring its execution time, memory usage, CPU usage, and network requests.

		Parameters:
		- *args: Positional arguments to be passed to the function.
		- **kwargs: Keyword arguments to be passed to the function.

		Returns:
		- A dictionary containing the benchmark results. The dictionary has the following keys:
			- 'status': The status of the function execution ('Successful' or 'Failed').
			- 'content': The content returned by the function.
			- 'keyword_check': The result of checking the presence of keywords in the content ('Complete', 'Incomplete', or 'Missing').
			- 'keywords': A dictionary containing the presence or absence of keywords in the content.
			- 'time_taken': The time taken by the function to execute.
			- 'memory_used': The memory used by the function.
			- 'cpu_used': The CPU usage by the function.
			- 'requests_made': The number of network requests made by the function.
		"""
		try:
			# Measure the starting metrics
			start_time = time.time()
			start_memory = psutil.Process(os.getpid()).memory_info().rss
			start_cpu = psutil.cpu_percent(interval=None)
			start_requests = len(psutil.net_connections())

			# Execute the function
			result = func(*args, **kwargs)

			# Measure the ending metrics
			end_time = time.time()
			end_memory = psutil.Process(os.getpid()).memory_info().rss
			end_cpu = psutil.cpu_percent(interval=None)
			end_requests = len(psutil.net_connections())

			# Calculate the metrics
			time_taken = end_time - start_time
			memory_used = end_memory - start_memory
			cpu_used = end_cpu - start_cpu
			requests_made = end_requests - start_requests

   			# Check the quality of the result
			result_content = result['content']
			keyword_output = {}
			status = result['status_code']
			if status >= 200 and status < 300:
				result_status = "Successful"
				for keyword in KEYWORDS:
					keyword_output[keyword] = True if keyword in result_content.lower() else False
				if all(keyword_output.values()):
					keyword_check = "Complete"
				elif not any(keyword_output.values()):
					keyword_check = "Missing"
				else:
					keyword_check = "Incomplete"
			else:
				result_status = "Failed"
				for keyword in KEYWORDS:
					keyword_output[keyword] = False
				keyword_check = "Missing"
    
			url = args[0] if args else kwargs.get('url', 'unknown')
			sanitized_url = sanitize_filename(url)

			print(f"Benchmarked {func.__name__}")
			# Save the result and metrics to a file
			with open(f'test-results/{func.__name__}-{sanitized_url}.html', 'w', encoding='utf-8') as f:
				f.write(f"{result_content}\n")
				f.write(f"Status:\n{result_status}\n")
				f.write(f"Keyword Check:\n{keyword_check}\n")
				f.write(f"Keywords Checked:\n")
				f.write(json.dumps(keyword_output, indent=4))
				f.write("Metrics:\n")
				f.write(json.dumps({
					'time_taken': time_taken,
					'memory_used': memory_used,
					'cpu_used': cpu_used,
					'requests_made': requests_made,
				}, indent=4))

			return {
				'status': result_status,
				'content': result_content,
				'keyword_check': keyword_check,
				'keywords': keyword_output,
				'time_taken': time_taken,
				'memory_used': memory_used,
				'cpu_used': cpu_used,
				'requests_made': requests_made,
			}
		except Exception as e:
			print(f"Error benchmarking {func.__name__}: {e}")
			return {
				'status': 'Failed',
				'content': None,
				'keyword_check': 'Missing',
				'keywords': None,
				'time_taken': float('inf'),
				'memory_used': float('inf'),
				'cpu_used': float('inf'),
				'requests_made': float('inf'),
			}
	return wrapper

def async_benchmark(func):
	"""
	Benchmark a given asynchronous function .

	Parameters:
	- func: The function to be benchmarked.
	
	Returns:
	- A dictionary containing the benchmark results

	"""
	async def wrapper(*args, **kwargs):
		"""
		An asynchronous function that measures the time, memory, CPU usage, network requests, and data size of the benchmarked function.
		
		Parameters:
		- *args: Positional arguments to be passed to the benchmarked function.
		- **kwargs: Keyword arguments to be passed to the benchmarked function.
		
		Returns:
		- A dictionary containing the following keys:
			- status: The status of the benchmarked function execution.
			- content: The content of the result.
			- keyword_check: The check status of the keywords in the result content.
			- keywords: A dictionary indicating whether each keyword is present in the result content.
			- time_taken: The time taken by the benchmarked function.
			- memory_used: The memory used by the benchmarked function.
			- cpu_used: The CPU usage by the benchmarked function.
			- requests_made: The number of network requests made by the benchmarked function.
		"""
		try:
			# Measure the starting metrics
			start_time = time.time()
			start_memory = psutil.Process(os.getpid()).memory_info().rss
			start_cpu = psutil.cpu_percent(interval=None)
			start_requests = len(psutil.net_connections())

			# Execute the function
			result = await func(*args, **kwargs)

			# Measure the ending metrics
			end_time = time.time()
			end_memory = psutil.Process(os.getpid()).memory_info().rss
			end_cpu = psutil.cpu_percent(interval=None)
			end_requests = len(psutil.net_connections())

			# Calculate the metrics
			time_taken = end_time - start_time
			memory_used = end_memory - start_memory
			cpu_used = end_cpu - start_cpu
			requests_made = end_requests - start_requests

   			# Check the quality of the result
			result_content = result['content']
			status = result['status_code']
			keyword_output = {}
			if status >= 200 and status < 300:
				result_status = "Successful"
				for keyword in KEYWORDS:
					keyword_output[keyword] = True if keyword in result_content.lower() else False
				if all(keyword_output.values()):
					keyword_check = "Complete"
				elif not any(keyword_output.values()):
					keyword_check = "Missing"
				else:
					keyword_check = "Incomplete"
			else:
				result_status = "Failed"
				for keyword in KEYWORDS:
					keyword_output[keyword] = False
				keyword_check = "Missing"
    
			url = args[0] if args else kwargs.get('url', 'unknown')
			sanitized_url = sanitize_filename(url)

			print(f"Benchmarked {func.__name__}")
			# Save the result and metrics to a file
			with open(f'test-results/{func.__name__}-{sanitized_url}.html', 'w', encoding='utf-8') as f:
				f.write(f"{result_content}\n")
				f.write(f"Status:\n{result_status}\n")
				f.write(f"Keyword Check:\n{keyword_check}\n")
				f.write(f"Keywords Checked:\n")
				f.write(json.dumps(keyword_output, indent=4))
				f.write("Metrics:\n")
				f.write(json.dumps({
					'time_taken': time_taken,
					'memory_used': memory_used,
					'cpu_used': cpu_used,
					'requests_made': requests_made,
				}, indent=4))


			return {
				'status': result_status,
				'content': result_content,
				'keyword_check': keyword_check,
				'keywords': keyword_output,
				'time_taken': time_taken,
				'memory_used': memory_used,
				'cpu_used': cpu_used,
				'requests_made': requests_made,
			}
		except Exception as e:
			print(f"Error benchmarking {func.__name__}: {e}")
			return {
				'status': 'Failed',
				'content': None,
				'keyword_check': 'Missing',
				'keywords': None,
				'time_taken': float('inf'),
				'memory_used': float('inf'),
				'cpu_used': float('inf'),
				'requests_made': float('inf'),
			}
	return wrapper

# HTTP request methods
@benchmark
def fetch_with_requests(url):
	"""
	Fetches content from a URL using the requests library.

	Parameters:
	- url: The URL to fetch content from.

	Returns:
	- A dictionary containing the fetched content and its status code.
	"""
	try:
		response = requests.get(url)
		return {
			"content" : response.text,
			"status_code" : response.status_code
		}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

@benchmark
def fetch_with_httpx(url):
	"""
	Fetches content from a URL using the httpx library.

	Parameters:
	- url (str): The URL to fetch content from.

	Returns:
	- dict: A dictionary containing the fetched content and its status code.
	"""
	try:
		response = httpx.get(url)
		return {
			"content" : response.text,
			"status_code" : response.status_code
		}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

@benchmark
def fetch_with_urllib3(url):
	"""
	Fetches content from a URL using the urllib3 library.

	Parameters:
	- url (str): The URL to fetch content from.

	Returns:
	- dict: A dictionary containing the fetched content and its status code.
	"""
	try:
		http = PoolManager()
		response = http.request('GET', url)
		return {
			"content" : response.data.decode('utf-8'),
			"status_code" : response.status
		}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

# HTML parsing methods
@benchmark
def fetch_with_beautifulsoup(url):
	"""
	Fetches content from a URL using BeautifulSoup library.

	Parameters:
	- url (str): The URL to fetch content from.

	Returns:
	- dict: A dictionary containing the fetched content and its status code.
	"""
	try:
		response = requests.get(url)
		soup = BeautifulSoup(response.content, 'html.parser')
		return{
			"content" : soup.text,
			"status_code" : response.status_code
		}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

@benchmark
def fetch_with_lxml(url):
	"""
	Fetches content from a URL using lxml library.

	Parameters:
	- url (str): The URL to fetch content from.

	Returns:
	- dict: A dictionary containing the fetched content and its status code.
	"""
	try:
		response = requests.get(url)
		tree = html.fromstring(response.content)
		return {
			"content" : tree.text_content(),
			"status_code" : response.status_code
		}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

@benchmark
def fetch_with_pyquery(url):
	"""
	Fetches content from a URL using pyquery library.

	Parameters:
	- url (str): The URL to fetch content from.

	Returns:
	- dict: A dictionary containing the fetched content and its status code.
	"""
	try:
		response = requests.get(url)
		doc = pq(response.text)
		return {
			"content" : doc.text(),
			"status_code" : response.status_code
		}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

# Browser automation methods
@benchmark
def fetch_with_selenium(url):
	"""
	Benchmark a function that fetches content from a URL using Selenium.

	Parameters:
	- url (str): The URL to fetch content from.

	Returns:
	- dict: A dictionary containing the fetched content and its status code.
	"""
	try:
		options = webdriver.ChromeOptions()
		options.add_argument("--no-sandbox")
		options.add_argument("--disable-dev-shm-usage")
		options.add_argument("--disable-gpu")
		options.add_argument('--headless')
		options.add_argument("--incognito")
		options.add_argument("--log-level=3")
		options.add_experimental_option("prefs", {"profile.default_content_settings.cookies": 2})
		service = Service(ChromeDriverManager().install())
		driver = webdriver.Chrome(service=service, options=options)
		driver.get(url)
		content = driver.page_source
		driver.quit()
		return {
			"content" : content,
			"status_code" : 200
		}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

@benchmark
def fetch_with_mechanicalsoup(url):
	"""
	Fetches content from a given URL using MechanicalSoup's StatefulBrowser.

	Parameters:
	- url (str): The URL to fetch content from.

	Returns:
	- dict: A dictionary containing the fetched content and its status code.
	"""
	try:
		browser = mechanicalsoup.StatefulBrowser()
		response = browser.open(url)
		return {
			"content" : response.text,
			"status_code" : response.status_code
		}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

@async_benchmark
async def fetch_with_playwright(url):
	"""
	Benchmark a function that fetches content from a URL using Playwright.

	Parameters:
	- url (str): The URL to fetch content from.

	Returns:
	- dict: A dictionary containing the fetched content and its status code.
	"""
	try:
		async with async_playwright() as p:
			browser = await p.chromium.launch(
				headless=True,
				args=['--no-sandbox', '--disable-gpu', '--incognito']
			)
			page = await browser.new_page()
			await page.goto(url)
			content = await page.content()
			await browser.close()
			return {
				"content" : content,
				"status_code" : 200
			}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

@async_benchmark
async def fetch_with_pyppeteer(url):
	"""
	An asynchronous function that fetches content from a given URL using pyppeteer.
	
	Parameters:
	- url (str): The URL to fetch content from.
	
	Returns:
	- dict: A dictionary containing the fetched content and its status code.
	"""
	try:
		browser = await launch(
			headless=True,
			args=['--no-sandbox', '--disable-gpu', '--incognito']
		)
		page = await browser.newPage()
		await page.goto(url)
		content = await page.content()
		await browser.close()
		return {
			"content" : content,
			"status_code" : 200
		}
	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

@async_benchmark
async def fetch_with_crawlee(url):
	"""
	Asynchronously fetches the content of a given URL using the Crawlee library.

	:param url: A string representing the URL to fetch.
	:return: A dictionary containing the fetched content and its status code.
	"""
	try:
		# Open a default request queue and add requests to it
		rq = await RequestQueue.open()
		await rq.add_request(url)

		# Open a default dataset for storing results
		dataset = await Dataset.open()

		# Create a HttpCrawler instance and provide a request provider
		crawler = HttpCrawler(request_provider=rq)

		# Define a handler for processing requests
		@crawler.router.default_handler
		async def request_handler(context: HttpCrawlingContext) -> None:
			# Crawler will provide a HttpCrawlingContext instance, from which you can access
			# the request and response data
			record = {
				'url': context.request.url,
				'status_code': context.http_response.status_code,
				'headers': dict(context.http_response.headers),
				'response': context.http_response.read().decode(),
			}
			# Extract the record and push it to the dataset
			await dataset.push_data(record)
			# Pushed data can be found at storage folder in the project directory

		# Run the crawler
		await crawler.run()

		data = await dataset.get_data()

		return {
			"content" : data.items[0]['response'],
			"status_code" : data.items[0]['status_code']
		}

	except Exception as e:
		return {
			"content" : None,
			"status_code" : 500,
			"error" : str(e)
		}

async def benchmark_scraping_tools(url):
	"""
	An asynchronous function that benchmarks various scraping tools by testing HTTP request methods, 
 	HTML parsing methods, and browser automation methods.

	Parameters:
	- url: The URL to be used for benchmarking.

	Returns:
	- A dictionary containing the benchmark results for different scraping tools.
	"""
	results = {}
	print("\nTesting HTTP request methods...")
	results['requests'] = fetch_with_requests(url)
	results['httpx'] = fetch_with_httpx(url)
	results['urllib3'] = fetch_with_urllib3(url)
	print("\nTesting HTML parsing methods...")
	results['beautifulsoup'] = fetch_with_beautifulsoup(url)
	results['lxml'] = fetch_with_lxml(url)
	results['pyquery'] = fetch_with_pyquery(url)
	print("\nTesting browser automation methods...")
	results['selenium'] = fetch_with_selenium(url)
	results['mechanicalsoup'] = fetch_with_mechanicalsoup(url)
	results['playwright'] = await fetch_with_playwright(url)
	results['pyppeteer'] = await fetch_with_pyppeteer(url)
	results['crawlee'] = await fetch_with_crawlee(url)

	return results

def rank_tools(results, key_metric, sort_order='asc'):
	"""
	Ranks the scraping tools based on the specified key metric and prints the rankings.

	Parameters:
	- results (dict): A dictionary containing the benchmark results for different scraping tools.
	- key_metric (str): The metric to be used for ranking the tools.
	- sort_order (str, optional): The order in which the tools should be sorted. Defaults to 'asc'.

	Returns:
	- rankings (list): A list of tuples containing the rank, tool name, and metrics for each tool.
	"""
	successful_methods = {k: v for k, v in results.items() if v['status'] == 'Successful'}
	failed_methods = {k: v for k, v in results.items() if v['status'] == 'Failed'}

	# Further group successful methods
	complete_methods = {k: v for k, v in successful_methods.items() if v['keyword_check'] == 'Complete'}
	incomplete_methods = {k: v for k, v in successful_methods.items() if v['keyword_check'] == 'Incomplete'}
	missing_methods = {k: v for k, v in successful_methods.items() if v['keyword_check'] == 'Missing'}

	# Sort each group by the key metric and print the rankings
	complete_rankings = sorted(complete_methods.items(), key=lambda x: x[1][key_metric], reverse=sort_order == 'desc')
	print("Complete Successful Methods:")
	if complete_rankings:
		for rank, (tool, metrics) in enumerate(complete_rankings, 1):
			print(f"{rank}. {tool} - Status: {metrics['status']}, Keyword Check: {metrics['keyword_check']}, Time: {metrics['time_taken']:.2f}s, Memory: {metrics['memory_used']:.2f}MiB, CPU: {metrics['cpu_used']:.2f}%, Requests: {metrics['requests_made']}")
	else:
		print("None")

	incomplete_rankings = sorted(incomplete_methods.items(), key=lambda x: x[1][key_metric], reverse=sort_order == 'desc')
	print("Incomplete Successful Methods:")
	if incomplete_rankings:
		for rank, (tool, metrics) in enumerate(incomplete_rankings, 1):
			print(f"{rank}. {tool} - Status: {metrics['status']}, Keyword Check: {metrics['keyword_check']}, Time: {metrics['time_taken']:.2f}s, Memory: {metrics['memory_used']:.2f}MiB, CPU: {metrics['cpu_used']:.2f}%, Requests: {metrics['requests_made']}")
	else:
		print("None")

	missing_rankings = sorted(missing_methods.items(), key=lambda x: x[1][key_metric], reverse=sort_order == 'desc')
	print("Missing Successful Methods:")
	if missing_rankings:
		for rank, (tool, metrics) in enumerate(missing_rankings, 1):
			print(f"{rank}. {tool} - Status: {metrics['status']}, Keyword Check: {metrics['keyword_check']}, Time: {metrics['time_taken']:.2f}s, Memory: {metrics['memory_used']:.2f}MiB, CPU: {metrics['cpu_used']:.2f}%, Requests: {metrics['requests_made']}")
	else:
		print("None")

	failed_rankings = sorted(failed_methods.items(), key=lambda x: x[1][key_metric], reverse=sort_order == 'desc')
	print("Failed Methods:")
	if failed_rankings:
		for rank, (tool, metrics) in enumerate(failed_rankings, 1):
			print(f"{rank}. {tool} - Status: {metrics['status']}, Keyword Check: {metrics['keyword_check']}, Time: {metrics['time_taken']:.2f}s, Memory: {metrics['memory_used']:.2f}MiB, CPU: {metrics['cpu_used']:.2f}%, Requests: {metrics['requests_made']}")
	else:
		print("None")

	# Combine all rankings
	rankings = complete_rankings + incomplete_rankings + missing_rankings + failed_rankings
	return rankings

def main(urls, key_metric, sort_order='asc'):
	"""
	This function generates a scraping benchmark report by running the `benchmark_scraping_tools` function 
 	on a list of URLs and ranking the scraping tools based on a specified key metric.

	Parameters:	
	- `urls`: A list of URLs to scrape.
	- `key_metric`: The key metric to rank the scraping tools based on.
	- `sort_order`: The sort order of the rankings. Defaults to 'asc'.
	"""
	# Initialize an Excel writer
	writer = pd.ExcelWriter('scraping_benchmark.xlsx', engine='xlsxwriter')

	for url in urls:
		results = asyncio.run(benchmark_scraping_tools(url))
		rankings = rank_tools(results, key_metric, sort_order)

		# Convert rankings to a DataFrame
		temp_df = pd.DataFrame(rankings, columns=['Tool', 'Metrics'])

		# Flatten the Metrics column into separate columns
		temp_df = pd.concat([temp_df['Tool'], temp_df['Metrics'].apply(pd.Series)], axis=1)

		# Add the URL column
		temp_df.insert(0, 'URL', url)

		# Convert the 'keywords' column into separate columns
		keywords_df = temp_df['keywords'].apply(pd.Series)
		keywords_df.columns = [f'keyword_{col}' for col in keywords_df.columns]
		temp_df = pd.concat([temp_df.drop('keywords', axis=1), keywords_df], axis=1)

		# Create a valid sheet name by replacing invalid characters with underscores
		parsed_url = urlparse(url)
		domain_subdomain = parsed_url.hostname+parsed_url.path
		sheet_name = sanitize_filename(domain_subdomain)[:31]
  
		# Write the DataFrame to a sheet in the Excel file
		temp_df.to_excel(writer, sheet_name=sheet_name, index=False) 

	# Save the Excel file
	writer._save()

# Define the keywords to check for in the scraped content
KEYWORDS = ["linkedin", "jman", "jman group", "software", "data"]

if __name__ == "__main__":
    
	# Create the directory if it does not exist
	if not os.path.exists('test-results'):
		os.makedirs('test-results')
    
	url = ["https://www.linkedin.com/company/jman-group/", "https://www.linkedin.com/in/bipin-m-a3834219b/"] # change this to the URL you want to scrape
	key_metric = 'time_taken'  # change this to the metric you want to sort by
	sort_order = 'asc'  # change this to 'asc' or 'desc' to sort in ascending or descending order
	print(f"Comparing scraping tools for {url} using {key_metric} as the key metric in {sort_order} order...")
	main(url, key_metric, sort_order)