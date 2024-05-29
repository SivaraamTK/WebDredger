import os
import time
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

# Define a function to measure time, memory, CPU usage, network requests and data size
def benchmark(func):
	def wrapper(*args, **kwargs):
		try:
			start_time = time.time()
			start_memory = psutil.Process(os.getpid()).memory_info().rss
			start_cpu = psutil.cpu_percent(interval=1)
			start_requests = len(psutil.net_connections())

			end_time = time.time()
			end_memory = psutil.Process(os.getpid()).memory_info().rss
			end_cpu = psutil.cpu_percent(interval=1)
			end_requests = len(psutil.net_connections())

			time_taken = end_time - start_time
			memory_used = end_memory - start_memory
			cpu_used = end_cpu - start_cpu
			requests_made = end_requests - start_requests

			result = func(*args, **kwargs)
			result_content = result['content']
			keyword_output = {}
			for keyword in KEYWORDS:
				keyword_output[keyword] = True if keyword in result_content.lower() else False
			status = result['status_code']
			if status >= 200 or status < 300:
				result_status = "Success"
			else:
				result_status = "Falied"
			if all(keyword_output.values()):
				keyword_check = "Complete"
			elif not any(keyword_output.values()):
				keyword_check = "Missing"
			else:
				keyword_check = "Incomplete"

			print(f"Benchmarked {func.__name__}")
			# Save the result and metrics to a file
			with open(f'test-results/{func.__name__}.txt', 'w', encoding='utf-8') as f:
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
	async def wrapper(*args, **kwargs):
		try:
			start_time = time.time()
			start_memory = psutil.Process(os.getpid()).memory_info().rss
			start_cpu = psutil.cpu_percent(interval=1)
			start_requests = len(psutil.net_connections())

			result = await func(*args, **kwargs)
			result_content = result['content']
			keyword_output = {}
			for keyword in KEYWORDS:
				keyword_output[keyword] = True if keyword in result_content.lower() else False
			status = result['status_code']
			if status >= 200 or status < 300:
				result_status = "Success"
			else:
				result_status = "Fail"
			if all(keyword_output.values()):
				keyword_check = "Complete"
			elif not any(keyword_output.values()):
				keyword_check = "Missing"
			else:
				keyword_check = "Incomplete"

			end_time = time.time()
			end_memory = psutil.Process(os.getpid()).memory_info().rss
			end_cpu = psutil.cpu_percent(interval=1)
			end_requests = len(psutil.net_connections())

			time_taken = end_time - start_time
			memory_used = end_memory - start_memory
			cpu_used = end_cpu - start_cpu
			requests_made = end_requests - start_requests

			print(f"Benchmarked {func.__name__}")
			# Save the result and metrics to a file
			with open(f'test-results/{func.__name__}.txt', 'w', encoding='utf-8') as f:
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
	try:
		options = webdriver.ChromeOptions()
		options.add_argument('--headless')
		options.add_argument('--no-sandbox')
		options.add_argument('--disable-gpu')
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
	try:
		async with async_playwright() as p:
			browser = await p.chromium.launch(
				headless=True,
				args=['--no-sandbox', '--disable-gpu']
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
	try:
		browser = await launch(
			headless=True,
			args=['--no-sandbox', '--disable-gpu']
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
	# Separate successful and failed methods
	successful_methods = {k: v for k, v in results.items() if v['status'] == 'Success'}
	failed_methods = {k: v for k, v in results.items() if v['status'] == 'Fail'}

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
		sheet_name = url.replace("https://", "").replace("www.", "").replace("/", "_").replace(".", "_")[:31]

		# Write the DataFrame to a sheet in the Excel file
		temp_df.to_excel(writer, sheet_name=sheet_name, index=False)  # sheet_name is limited to 31 characters

	# Save the Excel file
	writer._save()

# Define the keywords to check for in the scraped content
KEYWORDS = ["linkedin", "jman", "jman group", "software", "data"]

if __name__ == "__main__":
	url = ["https://www.linkedin.com/company/jman-group/", "https://www.linkedin.com/in/bipin-m-a3834219b/"] # change this to the URL you want to scrape
	key_metric = 'time_taken'  # change this to the metric you want to sort by
	sort_order = 'asc'  # change this to 'asc' or 'desc' to sort in ascending or descending order
	print(f"Comparing scraping tools for {url} using {key_metric} as the key metric in {sort_order} order...")
	main(url, key_metric, sort_order)