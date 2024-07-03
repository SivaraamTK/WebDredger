#!/usr/bin/env python3
'''
This python script is a web scraper that uses scrapy with requests
or playwright to crawl and scrape websites.

This imports the following libraries:
	- `os` for interacting with the operating system
	- `argparse` for parsing command-line arguments
	- `datetime` for measuring the time taken by the script
	- `jsbeautifier` for beautifying JavaScript code or JSON data
	- `random` for generating random integers
	- `sys` to collect command-line arguments
	- `tldextract` for extracting domain names from URLs
	- `urllib` for parsing URLs
	- `lxml` for parsing HTML and XML data
	- `scrapy` for crawling and scraping websites

author: @SivaraamTK
created-on: 2024-05-13
reference: 
	- https://github.com/ivan-sincek/scrapy-scraper
	- https://github.com/scrapy-plugins/scrapy-playwright
'''

# Import the required modules
import os
import re
from argparse import ArgumentParser
from datetime import datetime
from jsbeautifier import beautify
from random import choice
from sys import argv
from tldextract import extract
from urllib.parse import urlparse, urlsplit, quote
from lxml import html
from jinja2 import Environment, FileSystemLoader
from scrapy import Spider
from scrapy.http import Response, Request
from scrapy.crawler import CrawlerProcess
from scrapy.linkextractors import LinkExtractor
from scrapy.utils.project import get_project_settings

# ----------------------------------------
# Define the Utility functions
def parse_float(value: float) -> float | None:
	'''
	This function is used to parse a float value.

	:param value: The value to be parsed.
	:return: The parsed value or None.
	'''
	try:
		return float(value)
	except ValueError:
		return None

def validate_domains(values: list[str] | str):
	'''
	This function is used to validate domain names.

	:param values: The values to be validated.
	:return: The validated values.
	'''
	if not isinstance(values, list):
		values = [values]
	tmp = []
	const = "."
	for value in values:
		obj = extract(value)
		if obj.domain and obj.suffix:
			domain = obj.domain + const + obj.suffix
			if obj.subdomain:
				domain = obj.subdomain + const + domain
			tmp.append(domain.lower())
	return unique(tmp)

def unique(sequence: list):
	'''
	This function is used to remove duplicates from a list.

	:param sequence: The list from which duplicates are to be removed.
	:return: The list without duplicates.
	'''
	return list(dict.fromkeys(sequence))

def read_file(file: str):
	'''
	This function is used to read a file line by line and return the data as a list.

	:param file: The name of the file to be read.
	:return: The data from the file as a list.
	'''
	with open(file, "r", encoding=DEFAULT_ENCODING) as stream:
		return unique(line.strip() for line in stream if line.strip())

def get_all_user_agents(file:str="user_agents.txt"):
	'''
	This function is used to get all user agents from a file.

	:param file: The name of the file containing user agents.
				by default, it is set to "user_agents.txt".
	:return: The user agents as a list.
	'''
	try:
		with open(file, "r", encoding=DEFAULT_ENCODING) as stream:
			return [line.strip() for line in stream if line.strip()] or [DEFAULT_USER_AGENT]
	except FileNotFoundError:
		return [DEFAULT_USER_AGENT]

def get_random_user_agent():
	'''
	This function is used to get a random user agent.

	:return: A random user agent.
	'''
	with open(USER_AGENT_FILE, "r", encoding=DEFAULT_ENCODING) as stream:
		return choice(stream.read().splitlines())

# ----------------------------------------
# Define the constants
DEFAULT_ENCODING = "ISO-8859-1"
DEFAULT_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "+\
					"AppleWebKit/537.36 (KHTML, like Gecko)"+\
					"Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0"
USER_AGENT_FILE = "user_agents.txt"

# ----------------------------------------
# Define the Spider Class
class ScrapyScraperSpider(Spider):
	'''
	This class defines the Scrapy Spider which 
	will be used to crawl and scrape websites.

	Attributes:
		name: The name of the spider.
		start_urls: The URLs to start crawling from.
		allowed_domains: The domains to be crawled.
		__links: Include all links and sources in the output file.
		__playwright: Use Playwright's headless browser.
		__user_agent: The user agent to use.
		__proxy: The web proxy to use.
		__directory: The output directory.
		__out: The output file.
		__timeout: The timeout for the requests.
		__start: The start time of the spider.
		__end: The end time of the spider.(assigned in closed method)
		__javascript_enabled: Enable JavaScript in the headless browser.
		__accept_downloads: Accept downloads in the headless browser.
		__bypass_csp: Bypass Content Security Policy in the headless browser.
		__ignore_https_errors: Ignore HTTPS errors in the headless browser.
		__dont_filter: Not Skip offsite requests.
		__context: The context of the headless browser.
		__crawled: The URLs that have been crawled.
		__collected: The URLs that have been collected.

	Methods:
		__init__: The constructor method for the class.
		start_requests: Start the crawling and scraping process.
		closed: Handle the spider closing.
		__print_start_urls: Print the normalized start URLs.
		__print_allowed_domains: Print the allowed domains.
		__get_headers: Get the headers to be used by the spider.
		__get_meta: Get the meta data to be used by the spider.
		__get_playwright_meta: Get the meta data if playwright is enabled.
		__exception: Handle exceptions during the crawling and scraping process.
		__download_file: Download the assets from the crawled URLs.
		__get_file_path: Get the file path for the downloaded assets.
		__get_extension: Get the file extension for the downloaded assets.
		__get_meta: Get the meta data to be used by the spider.
		__get_playwright_meta: Get the meta data if playwright is enabled.
		__parse: Parse the response from the URLs.
		__extract_links: Extract the links from the response.
		is_potential_honeypot: Check if the link is a potential honeypot.
		is_hidden_link: Check if the link is hidden.
	'''

	def __init__(self, urls: list[str], whitelist:list[str], links: bool, timeout: int,
				playwright: bool,user_agent: str, proxy: str, directory: str, out:str, start: datetime):
		'''
		This is the constructor method for the class
		and initializes the attributes of the spider

		:param urls: The URLs to start crawling from.
		:param whitelist: The domains allowed to be crawled.
		:param links:Whether to include all links and sources in the output file.
		:param playwright: Use Playwright's headless browser.
		:param user_agent: The user agent to use.
		:param proxy: The web proxy to use.
		:param directory: The output directory.
		:param out: The output file.
		:param timeout: The timeout for the spider.
		:param start: The start time of the spider.
		'''
		# scrapy configuration
		self.name = "ScrapyScraperSpider"
		self.start_urls = urls
		self.allowed_domains = whitelist
		self.__links = links
		self.__playwright = playwright
		self.__user_agent = user_agent
		self.__proxy = proxy
		self.__directory = directory
		self.__out = out
		self.__timeout = timeout
		self.__start = start
		self.__end = None

		# playwright's headless browser configuration
		self.__javascript_enabled = True
		self.__accept_downloads = True
		self.__bypass_csp = False
		self.__ignore_https_errors = True
		self.__dont_filter = False
		self.__context = 0

		# initialize the lists
		self.__crawled = []
		self.__collected = []
		self.__downloaded = {}

		# print the spider's attributes
		print("###############################################")
		print(
			"Scrapy Scraper Spider Initiated with the following attributes:")
		print("Name: " + self.name)
		print("Start URLs: " + str(self.start_urls))
		print("Allowed Domains: " +
						 str(self.allowed_domains))
		print("Links: " + str(self.__links))
		print("User Agent: " + self.__user_agent)
		print("Proxy: " + self.__proxy)
		print("Directory: " + self.__directory)
		print("Output: " + self.__out)
		print("Timeout: " + str(self.__timeout))
		print("Playwright: " + str(self.__playwright))
		print("JavaScript Enabled: " +
						 str(self.__javascript_enabled))
		print("Accept Downloads: " +
						 str(self.__accept_downloads))
		print("Bypass CSP: " + str(self.__bypass_csp))
		print("Ignore HTTPS Errors: " +
						 str(self.__ignore_https_errors))
		print("Dont Filter: " + str(self.__dont_filter))
		print("Context: " + str(self.__context))
		print("###############################################")

	def start_requests(self):
		'''
		This method is used to start the crawling and scraping
		data from the URLs 
		'''
		# print the start URLs and allowed domains
		self.__print_start_urls()
		self.__print_allowed_domains()
		print("Crawling and scraping...")
		print(
			"Press CTRL + C to exit early - results will be saved but please be patient")
		
		# crawl through all the urls
		for url in self.start_urls:
			try:
				print("Starting request for url: " + url)
				# set the headers
				headers = self.__get_headers()
				headers['Referer'] = urlparse(
					url).scheme + "://" + urlparse(url).netloc
				headers['Origin'] = urlparse(
					url).scheme + "://" + urlparse(url).netloc
				
				# start the request
				yield Request(
					url=url,
					headers=headers,
					meta=self.__get_meta(),
					errback=self.__exception,
					callback=self.__parse,
					dont_filter=self.__dont_filter
				)
			except Exception as e:
				print("Error starting request: "+str(e))

	def closed(self, reason):
		'''
		This method is used to handle the spider closing
		and generate the output file.
		'''
		self.__end = datetime.now()
		time_taken = self.__end - self.__start
		print("Time taken for scraper: " + str(time_taken))
		self.__crawled = unique(self.__crawled)
		print(("Total unique URLs crawled: {0}").format(len(self.__crawled)))
		self.__collected = unique(self.__collected)
		print(("Total unique URLs collected: {0}").format(len(self.__collected)))
		if self.__downloaded:
			print("Total assets downloaded: " + str(len(self.__downloaded)))
		if len(self.__crawled) > 0:
			avg_time_per_url = time_taken.total_seconds() / len(self.__crawled)
		else:
			avg_time_per_url = "N/A"

		# Retrieve Scrapy stats
		stats = self.crawler.stats.get_stats()

		# Create a dictionary to store the results
		results = {
			"start_time": self.__start.strftime("%Y-%m-%d %H:%M:%S"),
			"end_time": self.__end.strftime("%Y-%m-%d %H:%M:%S"),
			"playwright_used": self.__playwright,
			"time_taken": str(time_taken),
			"total_urls_crawled": len(self.__crawled),
			"total_urls_collected": len(self.__collected),
			"total_assets_downloaded": len(self.__downloaded),
			"avg_time_per_url": str(avg_time_per_url),
			"scraper_stats": stats,
			"downloaded_files": [{'url': url, 'file_path': info['file_path']} for url, info in self.__downloaded.items()]
		}
   
		# Render the HTML template
		env = Environment(loader=FileSystemLoader(os.path.dirname(__file__)))
		template = env.get_template("template.html")
		html = template.render(results=results)

		# Save the HTML file
		with open(self.__out+'.html', "w", encoding="utf-8") as f:
			f.write(html)
		print(f"Report generated: {self.__out}.html")

	def __print_start_urls(self):
		'''
		This method is used to print the normalized start URLs.
		'''
		print("Normalized start URLs:\n" + "\n".join(self.start_urls))

	def __print_allowed_domains(self):
		'''
		This method is used to print the allowed domains.
		'''
		if self.allowed_domains:
			print("Allowed domains/subdomains:\n*.".join(self.allowed_domains))
		else:
			print("Domain whitelisting is off!")

	def __get_headers(self):
		'''
		This method is used to get the headers
		to be used by spider.

		:return: The headers to be used by the spider in JSON format.
		'''
		return {
			"Authority": 'www.google.com',
			"Accept": "'text/html,application/xhtml+xml,application/xml;q=0.9,"+\
					"image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',",
			"Accept-Encoding": "gzip, deflate, br, zstd",
			"Accept-Language": "en-US,en;q=0.9,en-CA;q=0.8,en-IN;q=0.7",
			"Priority": "u=0, i",
			"Sec-Ch-Ua": "\"Microsoft Edge\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
			"Sec-Ch-Ua-Mobile": "?0",
			"Sec-Ch-Ua-Platform": "\"Windows\"",
			"Sec-Fetch-Dest": "document",
			"Sec-Fetch-Mode": "navigate",
			"Sec-Fetch-Site": "same-origin",
			"Sec-Fetch-User": "?1",
			"Cache-Control": "max-age=0",
			"Connection": "keep-alive",
			"Upgrade-Insecure-Requests": "1",
			"User-Agent": self.__user_agent
		}

	def __get_meta(self):
		'''
		This method is used to get the meta data
		to be used by the spider.

		:return: The meta data to be used by the spider in JSON format.
		'''
		tmp = {"proxy": self.__proxy, "cookiejar": '1', "dont_merge_cookies": 'True'}
		if self.__playwright:
			tmp.update(self.__get_playwright_meta())
		return tmp

	def __get_playwright_meta(self):
		'''
		This method is used to get meta data
		to be used if playwright is enabled.

		:return: The meta data to for playwright in JSON format.
		'''
		self.__context += 1
		context_kwargs = {
			"java_script_enabled": self.__javascript_enabled,
			"accept_downloads": self.__accept_downloads,
			"bypass_csp": self.__bypass_csp,
			"ignore_https_errors": self.__ignore_https_errors,
			"user_agent": self.__user_agent,
			"viewport": {"width": 1920, "height": 1080},
		}
		return {
			"playwright": True,
			"playwright_context": str(self.__context),
			"playwright_context_kwargs": context_kwargs,
			"playwright_include_page": True,
			"playwright_page_goto_kwargs": {
				"wait_until": "load",
				"timeout": self.__timeout * 1000
			}
		}

	async def __exception(self, failure):
		'''
		This method is used to handle exceptions
		during the crawling and scraping process.

		:param failure: The exception that occurred.
		'''
		try:
			print("Error:", str(failure.value))
			if self.__playwright and "playwright_page" in failure.request.meta:
				page = failure.request.meta["playwright_page"]
				if page:
					try:
						await page.context.close()
					except:
						pass
		except:
			pass

	def __download_file(self, url:str, referer:str=""):
		'''
		This method is used to download the assets 
		from the crawled URLs.

		:param url: The URL to download the assets from.
		:param referer: The referer URL.
		'''
		try:
			print("Downloading: " + url)
			# set the headers
			headers = self.__get_headers()
			if referer != "":
				headers['Referer'] = referer
				headers['Origin'] = urlparse(referer).scheme + "://" + urlparse(referer).netloc
			else:
				headers['Referer'] = url
				headers['Origin'] = urlparse(url).scheme + "://" + urlparse(url).netloc

			# start the requests
			yield Request(
				url=url,
				headers=headers,
				meta=self.__get_meta(),
				callback=self.__handle_download,
				errback=self.__exception,
				dont_filter=True
			)

		except Exception as e:
			print(f"Error downloading {url}: Error {e}")

	def __handle_download(self, response: Response):
		'''
		This method is used to handle downloading
		of the assets from the crawled URLs.

		:param response: The response from the URL.
		'''
		try:
			# to handle the successful responses
			if response.status >= 200 and response.status < 300:
				print("Downloaded successfully: " + response.url)
				# get the file path where the asset will be saved
				file_path = self.__get_file_path(response.url, response.headers.get('Content-Type', b'').decode())
				# check if the file path exists
				if not os.path.exists(file_path):
					# create the directories if they do not exist
					os.makedirs(os.path.dirname(file_path), exist_ok=True)
				
				# check the content type
				content_type = response.headers.get('Content-Type', b'').decode().lower()
				# handle the JavaScript and JSON assets
				if 'javascript' in content_type \
					or response.url.lower().endswith('.js') \
					or response.url.lower().endswith('.json') \
					or file_path.lower().endswith('.js') \
					or file_path.lower().endswith('.json'):
					with open(file_path, 'w') as f:
						f.write(beautify(response.text))
				# handle the other assets
				else:
					with open(file_path, "wb") as f:
						if isinstance(response.body, str):
							f.write(response.body.encode())
						else:
							f.write(response.body)
				self.__downloaded[response.url] = {'url': response.url, 'file_path': file_path}
				print("Saved: " + file_path)
			else:
				print(f"Error downloading {response.url}: HTTP {response.status}")

		except Exception as e:
			print(f"Error Saving {response.url}: Error {e}")

	def __get_file_path(self, url:str, content_type:str):
		'''
		This method is used to get the file path
		where the downloaded assets will be saved.

		:param url: The URL of the asset.
		:param content_type: The content type of the asset.
		:return: The file path where the asset will be saved.
		'''
		parsed_url = urlparse(url)

		# Extract the domain without the TLD
		extracted = extract(parsed_url.netloc)
		domain_without_tld = quote(extracted.domain)

		# Include the path and query in the file name
		path = parsed_url.path
		if path.endswith('/'):
			path = path[:-1]
		if path.startswith('/'):
			path = path[1:]

		# If the path is empty, use the domain name as the filename
		if not path:
			path = domain_without_tld

		# If the path has a file extension, remove it
		path, _ = os.path.splitext(path)

		# Create directories for each part of the path
		path_parts = path.split('/')
  
		# Replace unsupported characters with underscore
		path = re.sub(r'[^a-zA-Z0-9_/]', '_', path)
		path = re.sub(r'__+', '_', path)

		# Create the full path
		full_path = os.path.join(self.__directory, domain_without_tld, *path_parts)
		os.makedirs(os.path.dirname(full_path), exist_ok=True)

		# Append the file extension to the full path
		full_path += self.__get_extension(content_type)

		return full_path
	def __get_extension(self, content_type:str):
		'''
		This method is used to get the file extension
		for the downloaded assets. Returns '.html' for unknown.
		
		:param content_type: The content type of the asset.
		:return: The file extension for the asset.
		'''
		if 'javascript' in content_type:
			return '.js'
		elif 'html' in content_type:
			return '.html'
		elif 'css' in content_type:
			return '.css'
		elif 'json' in content_type:
			return '.json'
		elif 'xml' in content_type:
			return '.xml'
		elif 'csv' in content_type:
			return '.csv'
		elif 'yaml' in content_type:
			return '.yaml'
		elif 'yml' in content_type:
			return '.yml'
		elif 'jpeg' in content_type:
			return '.jpeg'
		elif 'png' in content_type:
			return '.png'
		elif 'ico' in content_type:
			return '.ico'
		elif 'apng' in content_type:
			return '.apng'
		elif 'avif' in content_type:
			return '.avif'
		elif 'tif' in content_type or 'tiff' in content_type:
			return '.tif'
		elif 'gif' in content_type:
			return '.gif'
		elif 'svg' in content_type:
			return '.svg'
		elif 'webp' in content_type:
			return '.webp'
		elif 'mp4' in content_type:
			return '.mp4'
		elif 'mpeg' in content_type:
			return '.mpeg'
		elif 'webm' in content_type:
			return '.webm'
		elif 'ogg' in content_type:
			return '.ogg'
		elif 'pdf' in content_type:
			return '.pdf'
		elif 'mp3' in content_type:
			return '.mp3'
		elif 'wav' in content_type:
			return '.wav'
		else:
			return '.html'

	async def __parse(self, response: Response):
		'''
		This method is used to parse the response
		from the URLs that spider crawled.

		:param response: The response from the URL.
		'''
		# close the playwright page
		if self.__playwright:
			page = response.meta["playwright_page"]
			await page.close()
			await page.context.close()

		print("Crawled: " + response.url)
		self.__crawled.append(response.url)

		# download the crawled URL
		for request in self.__download_file(response.url):
			yield request

		print("Collected: " + response.url)
		self.__collected.append(response.url)

		# extract the links from the response
		links = self.__extract_links(response)
		if self.__links:
			self.__collected.extend(links)
			for link in links:
				# start the request for the extracted links
				headers = self.__get_headers()
				headers['Referer'] = urlparse(
					response.url).scheme + "://" + urlparse(response.url).netloc
				headers['Origin'] = urlparse(
					response.url).scheme + "://" + urlparse(response.url).netloc
				yield response.follow(
					url=link,
					headers=headers,
					meta=self.__get_meta(),
					errback=self.__exception,
					callback=self.__parse,
					dont_filter=self.__dont_filter
				)
				for request in self.__download_file(link, referer=response.url):
					yield request

	def __extract_links(self, response: Response):
		'''
		This method is used to extract the links
		from the crawled URLs.

		:param response: The response from the URL.
		:return: The extracted links.
		'''
		print("Extracting links from: " + response.url)
		tmp = []
		# extract the links from the response
		for link in unique(LinkExtractor(
			tags=["a", "link", "script"],
			attrs=["href", "src"]
		).extract_links(response)):
			link = response.urljoin(link.url)
			# validate the link
			if urlparse(link).scheme.lower() in ["http", "https"]:
				# check if the link is a potential honeypot
				if not self.is_potential_honeypot(link) and \
					not self.is_hidden_link(link, response):
					tmp.append(link)
				else:
					print(
						f"Skipping {link} as it is a potential honeypot")
		return unique(tmp)

	# TODO: WIP to avoid honeypot links
	def is_potential_honeypot(self, link: str):
		'''
		This method is used to check if the link is a potential honeypot.

		:param link: The link to be checked.
		:param response: The response from the URL.
		:return: True if the link is a potential honeypot, False otherwise.
		'''
		parsed_link = urlparse(link)

		suspicious_keywords = ["honeypot", "trap","detect", "bot", "spam", "fake"]

		# Check for suspicious keywords in the URL
		# has_suspicious_keyword = any(keyword in parsed_link.path.lower() for keyword in suspicious_keywords)

		# Check for URLs with uncommon protocols
		has_uncommon_protocol = parsed_link.scheme not in ('http', 'https')

		# Check for URLs with suspicious fragment
		has_suspicious_fragment = any(
			keyword in parsed_link.fragment.lower() for keyword in suspicious_keywords)

		# Return True if any of the checks is True
		if any(
				[
					# has_suspicious_keyword, #not accurate check
					has_uncommon_protocol,
					has_suspicious_fragment
				]):
			return True

		# # Check computed styles
					# if self.__playwright:
					# 	try:
					# 		page = response.meta["playwright_page"]
					# 		visibility = await page.evaluate(
					# 			"window.getComputedStyle(document.querySelector(arguments[0])).getPropertyValue('display')", element)
					# 		if visibility == 'none':
					# 			return True
					# 	except Exception as e:
					# 		print(f"Error checking visibility: {e}")
		return False

	def is_hidden_link(self, link: str, response: Response):
		'''
		This method is used to check if the link is hidden
		or not visible like trap links.
		
		:param link: The link to be checked.
		:param response: The response from the URL.
		:return: True if the link is hidden, False otherwise.
		'''
		try:
			tree = html.fromstring(response.text)
			adj_link = quote(link, safe='/:')
			link_elements = tree.xpath(f"//*[@href='{adj_link}']") + tree.xpath(f"//*[@src='{adj_link}']")
			for element in link_elements:
				style = element.attrib.get('style', '').lower()
				if 'display:none' in style or 'visibility:hidden' in style:
					return True
				parent = element.getparent()
				while parent is not None:
					parent_style = parent.attrib.get('style', '').lower()
					if 'display:none' in parent_style or 'visibility:hidden' in parent_style:
						return True
					parent = parent.getparent()
			return False
		except Exception as e:
			print(f"Error checking hidden link: {e}")
			return False

# ----------------------------------------
# Define the ScrapyScraper class
class ScrapyScraper:
	'''
	This class is used to manage the spiders
	used to crawl and scrape websites.

	Attributes:
		__urls: The URLs to start crawling from.
		__whitelist: The domains to be crawled.
		__links: Include all links and sources in the output file.
		__playwright: Use Playwright's headless browser.
		__concurrent_requests: The number of concurrent requests.
		__concurrent_requests_domain: The number of concurrent requests per domain.
		__sleep: The sleep time between requests.
		__auto_throttle: The auto throttle target concurrency.
		__recursion: The recursion depth.
		__user_agent: The user agent to use.
		__proxy: The web proxy to use.
		__directory: The output directory.
		__out: The output file.
		__timeout: The timeout for the spider.
		__start: The start time of the scraper.
		__allow_retries: Allow retries for the spider.
		__max__retries: The maximum number of retries.
		__allow_redirects: Allow redirects for the spider.
		__max_redirects: The maximum number of redirects.
		__robots_obey: Obey robots.txt rules.
		__headless_browser: Use a headless browser.
		__browser_type: The type of the headless browser.

	Methods:
		__init__: The constructor method for the class.
		run: Run the spider to crawl and scrape websites.
		__page_block: Block the page from loading.
	'''
	def __init__(self, urls: list[str] | str, whitelist: list[str] | str, links: bool, \
				playwright: bool, concurrent_requests: int, concurrent_requests_domain :int, \
				sleep: float, auto_throttle: float, recursion: int, user_agent:str, \
				proxy:str, directory:str, out:str, start: datetime):
		'''
		This is the constructor method for the class
		and initializes the attributes of the Scraper.

		:param urls: The URLs to start crawling from.
		:param whitelist: The domains to be crawled.
		:param links: Include all links and sources in the output file.
		:param playwright: Use Playwright's headless browser.
		:param concurrent_requests: The number of concurrent requests.
		:param concurrent_requests_domain: The number of concurrent requests per domain.
		:param sleep: The sleep time between requests.
		:param auto_throttle: The auto throttle target concurrency.
		:param recursion: The recursion depth.
		:param user_agent: The user agent to use.
		:param proxy: The web proxy to use.
		:param directory: The output directory.
		:param out: The output file.
		'''
		# Scraper configuration
		self.__urls = urls
		self.__whitelist = whitelist
		self.__links = links
		self.__playwright = playwright
		self.__concurrent_requests = concurrent_requests
		self.__concurrent_requests_domain = concurrent_requests_domain
		self.__sleep = sleep
		self.__auto_throttle = auto_throttle
		self.__recursion = recursion
		self.__user_agent = user_agent
		self.__proxy = proxy
		self.__directory = directory
		self.__out = out
		self.__start = start
		# scrapy spider configuration
		self.__timeout = 30  # all timeouts
		self.__allow_retries = True
		self.__max__retries = 2
		self.__allow_redirects = True
		self.__max_redirects = 10
		self.__robots_obey = False
		self.__headless_browser = True
		self.__browser_type = "webkit"  # supports chromium, firefox, webkit

	def run(self):
		'''
		This method is used to run the spiders
		to crawl and scrape websites.
		'''
		# set the settings for the spider
		settings = get_project_settings()

		settings["COOKIES_ENABLED"] = True
		settings["DOWNLOAD_TIMEOUT"] = self.__timeout * 1000

		if self.__sleep >= 0:
			settings["DOWNLOAD_DELAY"] = self.__sleep
		else:
			settings["RANDOMIZE_DOWNLOAD_DELAY"] = True

		if self.__proxy:
			settings["HTTPPROXY_ENABLED"] = True

		if self.__auto_throttle > 0:
			settings["EXTENSIONS"]["scrapy.extensions.throttle.AutoThrottle"] = 110
			settings["AUTOTHROTTLE_ENABLED"] = True
			settings["AUTOTHROTTLE_DEBUG"] = True
			settings["AUTOTHROTTLE_START_DELAY"] = self.__sleep if self.__sleep >= 0 else 1.5
			settings["AUTOTHROTTLE_MAX_DELAY"] = settings["AUTOTHROTTLE_START_DELAY"] + 30
			settings["AUTOTHROTTLE_TARGET_CONCURRENCY"] = self.__auto_throttle
	
		settings["CONCURRENT_REQUESTS"] = self.__concurrent_requests
		settings["CONCURRENT_REQUESTS_PER_DOMAIN"] = self.__concurrent_requests_domain
		settings["RETRY_ENABLED"] = self.__allow_retries
		settings["RETRY_TIMES"] = self.__max__retries
		settings["REDIRECT_ENABLED"] = self.__allow_redirects
		settings["REDIRECT_MAX_TIMES"] = self.__max_redirects
		settings["DEPTH_LIMIT"] = self.__recursion

		settings["ROBOTSTXT_OBEY"] = self.__robots_obey
		settings["REQUEST_FINGERPRINTER_IMPLEMENTATION"] = '2.7'

		#telnet can be used to control the spider
		settings["TELNETCONSOLE_ENABLED"] = False
		settings["TELNETCONSOLE_PORT"] = None

		# deltafetch middleware used to avoid duplicate requests
		settings["SPIDER_MIDDLEWARES"]["scrapy_deltafetch.DeltaFetch"] = 100
		settings["DELTAFETCH_ENABLED"] = True
		settings["DELTAFETCH_RESET"] = 1
		
		# Enable FilesPipeline and ImagesPipeline
		settings["ITEM_PIPELINES"] = {
			"scrapy.pipelines.files.FilesPipeline": 1,
			"scrapy.pipelines.images.ImagesPipeline": 2,
		}
		settings["FILES_STORE"] = self.__directory + "/files"
		settings["IMAGES_STORE"] = self.__directory + "/images"
		settings["MEDIA_ALLOW_REDIRECTS"] = True

		# uncomment if too many requests filtered
		settings["DOWNLOADER_MIDDLEWARES"]["scrapy.downloadermiddlewares.offsite.OffsiteMiddleware"] = None

		# logging options
		settings["LOG_ENABLED"] = True
		settings["LOG_LEVEL"] = "DEBUG"
		settings["LOG_FILE"] = f"{datetime.now().strftime('%Y%m%d-%H%M%S')}-webdredger.log"
		settings["LOG_FORMAT"] = "%(asctime)s | [%(name)s] | %(levelname)s: %(message)s"
		settings["LOG_DATEFORMAT"] = "%Y-%m-%d | %H:%M:%S"
		settings["LOG_STDOUT"] = True
		settings["DOWNLOADER_CLIENT_TLS_VERBOSE_LOGGING"] = True
		settings["EXTENSIONS"]["scrapy.extensions.memdebug.MemoryDebugger"] = 100
		settings["MEMDEBUG_ENABLED"] = True
		settings["PERIODIC_LOG_STATS"] = True
		settings["PERIODIC_LOG_DELTA"] = True
		settings["PERIODIC_LOG_TIMING_ENABLED"] = True
		settings["SCHEDULER_DEBUG"] = True

		# set the playwright settings
		if self.__playwright:
			settings["TWISTED_REACTOR"] = "twisted.internet.asyncioreactor.AsyncioSelectorReactor"
			settings["DOWNLOAD_HANDLERS"]["https"] = "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler"
			settings["DOWNLOAD_HANDLERS"]["http"] = "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler"
			settings["PLAYWRIGHT_LAUNCH_OPTIONS"] = {
				"headless": self.__headless_browser,
				"timeout": self.__timeout * 1000,
			}
			settings["PLAYWRIGHT_BROWSER_TYPE"] = self.__browser_type
			settings["PLAYWRIGHT_ABORT_REQUEST"] = self.__page_block
			settings["PLAYWRIGHT_DEFAULT_NAVIGATION_TIMEOUT"] = self.__timeout * 1000
			settings["EXTENSIONS"]["scrapy.extensions.memusage.MemoryUsage"] = None
			settings["EXTENSIONS"]["scrapy_playwright.memusage.ScrapyPlaywrightMemoryUsageExtension"] = 0

		# start the spider
		scrapy_scraper_spider = CrawlerProcess(settings)
		scrapy_scraper_spider.crawl(ScrapyScraperSpider, self.__urls, self.__whitelist, self.__links, 
									self.__timeout, self.__playwright, self.__user_agent, self.__proxy, 
									self.__directory, self.__out, self.__start)
		print("Scrapy Scraper Spider is starting...")
		scrapy_scraper_spider.start()

	def __page_block(self, request):
		'''
		This method is used to block the page from loading.

		:param request: The request to be blocked.
		:return: True if the page is blocked, False otherwise.
		'''
		return request.resource_type in ["fetch", "stylesheet", "image", "ping", "font", "media", "imageset", "beacon", "csp_report", "object", "texttrack", "manifest"]

# ----------------------------------------
# Define the cmd arguments parser class
class MyArgParser(ArgumentParser):
	'''
	This class is used to parse the command line
	arguments for the Scrapy Scraper.

	Methods:
		print_help: Print the cli help message.
		error: Print the cli error message.
	'''
	def print_help(self):
		'''
		Print the cli help message
		with the usage and description.
		'''
		print("Scrapy Scraper")
		print("")
		print(
			"Usage:   scrapy-scraper -u urls                     -o out         [-dir directory]")
		print(
			"Example: scrapy-scraper -u https://example.com/home -o results.txt [-dir downloads]")
		print("")
		print("DESCRIPTION")
		print("    Crawl and scrape websites")
		print("URLS")
		print(
			"    File with URLs or a single URL to start crawling and scraping from")
		print(
			"    -u, --urls = urls.txt | https://example.com/home | etc.")
		print("WHITELIST")
		print(
			"    File with whitelisted domains to limit the crawling scope")
		print("    Specify 'off' to disable domain whitelisting")
		print("    Default: domains extracted from initial URLs")
		print("    -w, --whitelist = whitelist.txt | off | etc.")
		print("LINKS")
		print(
			"    Include all links and sources (incl. 3rd party) in the output file")
		print("    -l, --links")
		print("PLAYWRIGHT")
		print("    Use Playwright's headless browser")
		print("    -p, --playwright")
		print("CONCURRENT REQUESTS")
		print("    Number of concurrent requests")
		print("    Default: 30")
		print("    -cr, --concurrent-requests = 15 | 45 | etc.")
		print("CONCURRENT REQUESTS PER DOMAIN")
		print("    Number of concurrent requests per domain")
		print("    Default: 10")
		print(
			"    -crd, --concurrent-requests-domain = 5 | 15 | etc.")
		print("SLEEP")
		print(
			"    Sleep time between two consecutive requests to the same domain")
		print(
			"    Specify 'random' to sleep a random amount of time between 0.5 and 1.5 seconds")
		print("    Default: 1.5")
		print("    -s, --sleep = 0 | 2 | 4 | random | etc.")
		print("AUTO THROTTLE")
		print(
			"    Auto throttle concurrent requests based on the load and latency")
		print(
			"    -at, --auto-throttle = 0.5 | 10 | 15 | 45 | etc.")
		print("RECURSION")
		print("    Recursion depth limit")
		print("    Specify '0' for no limit")
		print("    Default: 1")
		print("    -r, --recursion = 0 | 2 | 4 | etc.")
		print("USER AGENT")
		print("    User agent to use")
		print(("    Default: {0}").format(DEFAULT_USER_AGENT))
		print("    -a, --user-agent = curl/3.30.1 | random | etc.")
		print("PROXY")
		print("    Web proxy to use")
		print("    -x, --proxy = http://127.0.0.1:8080 | etc.")
		print("DIRECTORY")
		print("    Output directory")
		print(
			"    All extracted JavaScript files will be saved in this directory")
		print("    -dir, --directory = downloads | etc.")
		print("OUT")
		print("    Output file")
		print("    -o, --out = results.txt | etc.")

	def error(self):
		'''
		Print the cli error message
		with mandatory and optional options.
		'''
		if len(argv) > 1:
			print(
				"Missing a mandatory option (-u, -o) and/or optional (-w, -l, -p, -cr, -crd, -s, -at, -r, -a, -x, -dir)")
			print("Use -h or --help for more info")
		else:
			self.print_help()
		exit()
# ----------------------------------------
# Define the validate class
class Validate:
	'''
	This class is used to validate the command line
	arguments passed to the Scrapy Scraper.

	Attributes:
		__proceed: The flag to proceed with the validation.
		__parser: The argument parser.
		__args: The arguments passed to the scraper.

	Methods:
		__init__: The constructor method for the class.
		run: Run the validation process.
		get_arg: Get the argument value by key.
		__error: Print the error message.
		__validate_urls: Validate the URLs.
		__parse_urls: Parse the URLs.
		__parse_whitelist: Parse the whitelist.
		__parse_concurrent_requests: Parse the concurrent requests.
		__parse_concurrent_requests_domain: Parse the concurrent requests per domain.
		__parse_sleep: Parse the sleep time.
		__parse_auto_throttle: Parse the auto throttle.
		__parse_recursion: Parse the recursion depth.
		__parse_user_agent: Parse the user agent.
		__parse_proxy: Parse the proxy.
		__parse_directory: Parse the output directory.
	'''
	def __init__(self):
		'''
		This is the constructor method for the class
		and fetches the cmd line arguments from `MyArgParser`.
		'''
		self.__proceed = True
		self.__parser = MyArgParser()
		self.__parser.add_argument(
			"-u", "--urls", required=True, type=str, default="")
		self.__parser.add_argument(
			"-w", "--whitelist", required=False, type=str, default="")
		self.__parser.add_argument(
			"-l", "--links", required=False, action="store_true", default=False)
		self.__parser.add_argument(
			"-p", "--playwright", required=False, action="store_true", default=False)
		self.__parser.add_argument(
			"-cr", "--concurrent-requests", required=False, type=str, default="")
		self.__parser.add_argument(
			"-crd", "--concurrent-requests-domain", required=False, type=str, default="")
		self.__parser.add_argument(
			"-s", "--sleep", required=False, type=str, default="")
		self.__parser.add_argument(
			"-at", "--auto-throttle", required=False, type=str, default="")
		self.__parser.add_argument(
			"-r", "--recursion", required=False, type=str, default="")
		self.__parser.add_argument(
			"-a", "--user-agent", required=False, type=str, default="")
		self.__parser.add_argument(
			"-x", "--proxy", required=False, type=str, default="")
		self.__parser.add_argument(
			"-dir", "--directory", required=False, type=str, default="")
		self.__parser.add_argument(
			"-o", "--out", required=True, type=str, default="")

	def run(self):
		'''
		This method is used to run the validation of the arguments
		and set the default values if not provided.
		'''
		self.__args = self.__parser.parse_args()
		self.__args.urls = self.__parse_urls(self.__args.urls) # required
		self.__args.whitelist = self.__parse_whitelist(self.__args.whitelist) if self.__args.whitelist else (
			validate_domains(self.__args.urls) if self.__proceed else [])
		self.__args.concurrent_requests = self.__parse_concurrent_requests(
			self.__args.concurrent_requests) if self.__args.concurrent_requests else 30
		self.__args.concurrent_requests_domain = self.__parse_concurrent_requests_domain(
			self.__args.concurrent_requests_domain) if self.__args.concurrent_requests_domain else 10
		self.__args.sleep = self.__parse_sleep(
			self.__args.sleep) if self.__args.sleep else 1.5
		self.__args.auto_throttle = self.__parse_auto_throttle(
			self.__args.auto_throttle) if self.__args.auto_throttle else 0
		self.__args.recursion = self.__parse_recursion(
			self.__args.recursion) if self.__args.recursion else 1
		self.__args.user_agent = self.__parse_user_agent(
			self.__args.user_agent) if self.__args.user_agent else DEFAULT_USER_AGENT
		self.__args.proxy = self.__parse_proxy(
			self.__args.proxy) if self.__args.proxy else ""
		self.__args.directory = self.__parse_directory(
			self.__args.directory) if self.__args.directory else ""
		self.__args = vars(self.__args)
		return self.__proceed

	def get_arg(self, key):
		'''
		Get the argument value by key.
		'''
		return self.__args[key]

	def __error(self, msg):
		'''
		Print the error message when
		the validation fails.
		'''
		self.__proceed = False
		print(("ERROR: {0}").format(msg))

	def __validate_urls(self, values):
		'''
		This method is used to validate the URLs

		:param values: The URLs to validate.
		:return: The validated URLs without duplicates.
		'''
		# Convert to list if not
		if not isinstance(values, list):
			values = [values]
		tmp = []
		# Validate the URLs
		for value in values:
			data = {
				"schemes": ["http", "https"],
				"scheme_error": [
					("URL scheme is required: {0}").format(value),
					("Supported URL schemes are 'http' and 'https': {0}").format(
						value)
				],
				"domain_error": ("Invalid domain name: {0}").format(value),
				"port_error": ("Port number is out of range: {0}").format(value)
			}
			obj = urlsplit(value)
			if not obj.scheme:
				self.__error(data["scheme_error"][0])
			elif obj.scheme not in data["schemes"]:
				self.__error(data["scheme_error"][1])
			elif not obj.netloc:
				self.__error(data["domain_error"])
			elif obj.port and (obj.port < 1 or obj.port > 65535):
				self.__error(data["port_error"])
			else:
				tmp.append(obj.geturl())  # normalize
		return unique(tmp)

	def __parse_urls(self, value):
		'''
		This method is used to parse the URL input file
		or the single URL provided.

		:param value: The URL input file or the single URL.
		:return: The parsed URLs.
		'''
		tmp = []
		if os.path.isfile(value):
			if not os.access(value, os.R_OK):
				self.__error("File with URLs does not have a read permission")
			elif not os.stat(value).st_size > 0:
				self.__error("File with URLs is empty")
			else:
				tmp = read_file(value)
				if not tmp:
					self.__error("No URLs were found")
				else:
					tmp = self.__validate_urls(tmp)
		else:
			tmp = self.__validate_urls(value)
		return tmp

	def __parse_whitelist(self, value):
		'''
		This method is used to parse the whitelist input file
		or the single domain provided.

		:param value: The whitelist input file or the single domain.
		:return: The parsed whitelist.
		'''
		tmp = []
		if value.lower() == "off":
			pass
		elif not os.path.isfile(value):
			self.__error("File with whitelisted domains does not exists")
		elif not os.access(value, os.R_OK):
			self.__error(
				"File with whitelisted domains does not have a read permission")
		elif not os.stat(value).st_size > 0:
			self.__error("File with whitelisted domains is empty")
		else:
			tmp = validate_domains(read_file(value))
			if not tmp:
				self.__error("No valid whitelisted domains were found")
		return tmp

	def __parse_greater_than(self, value, minimum, maximum, error_numeric, error_scope):
		'''
		This method is used to parse the numeric values
		and check if they are greater than the minimum

		:param value: The value to parse.
		:param minimum: The minimum value to check.
		:param maximum: The maximum value to check.
		:param error_numeric: The error message for non-numeric values.
		:param error_scope: The error message for out of scope values.
		'''
		if not value.isdigit():
			self.__error(error_numeric)
		else:
			value = int(value)
			if (minimum and value < minimum) or (maximum and value > maximum):
				self.__error(error_scope)
		return value

	def __parse_concurrent_requests(self, value):
		'''
		This method is used to parse the concurrent requests
		and check if they are greater than zero.

		:param value: The value to parse.
		:return: The parsed concurrent requests.
		'''
		return self.__parse_greater_than(value, 1, None,
										 "Number of concurrent requests must be numeric",
										 "Number of concurrent requests must be greater than zero"
										 )

	def __parse_concurrent_requests_domain(self, value):
		'''
		This method is used to parse the concurrent requests per domain

		:param value: The value to parse.
		:return: The parsed concurrent requests per domain.
		'''
		return self.__parse_greater_than(value, 1, None,
										 "Number of concurrent requests per domain must be numeric",
										 "Number of concurrent requests per domain must be greater than zero"
										 )

	def __parse_sleep(self, value):
		'''
		This method is used to parse the sleep time
		between requests and check if it is greater than zero
		else set it to random.

		:param value: The value to parse.
		:return: The parsed sleep time.
		'''
		if value.lower() == "random":
			value = -1
		else:
			value = parse_float(value)
			if value is None:
				self.__error("Sleep must be numeric")
			elif value <= 0:
				self.__error("Sleep must be greater than or equal to zero")
		return value

	def __parse_auto_throttle(self, value):
		'''
		This method is used to parse the auto throttle
		and check if it is greater than zero or set it to off.

		:param value: The value to parse.
		:return: The parsed auto throttle.
		'''
		if value.lower() == "off":
			value = -1
		else:
			value = parse_float(value)
			if value is None:
				self.__error("Auto throttle must be numeric")
			elif value <= 0:
				self.__error("Auto throttle must be greater than zero")
		return value

	def __parse_recursion(self, value):
		'''
		This method is used to parse the recursion depth limit
		and check if it is greater than or equal to zero.

		:param value: The value to parse.
		'''
		return self.__parse_greater_than(value, 0, None,
										 "Recursion depth limit must be numeric",
										 "Recursion depth limit must be greater than or equal to zero"
										 )

	def __parse_user_agent(self, value):
		'''
		This method is used to parse the user agent
		and set it to random if required.

		:param value: The value to parse.
		:return: The parsed user agent.
		'''
		if value.lower() == "random":
			value = get_random_user_agent()
		return value

	def __parse_proxy(self, value):
		'''
		This method is used to validate and
		parse the proxy URL if provided.

		:param value: The value to parse.
		:return: The parsed proxy URL.
		'''
		tmp = urlsplit(value)
		if not tmp.scheme:
			self.__error("Proxy URL: Scheme is required")
		elif tmp.scheme not in ["http", "https", "socks4", "socks4h", "socks5", "socks5h"]:
			self.__error(
				"Proxy URL: Supported schemes are 'http[s]', 'socks4[h]', and 'socks5[h]'")
		elif not tmp.netloc:
			self.__error("Proxy URL: Invalid domain name")
		elif tmp.port and (tmp.port < 1 or tmp.port > 65535):
			self.__error("Proxy URL: Port number is out of range")
		return value

	def __parse_directory(self, value):
		'''
		This method is used to parse the output directory
		and create it if not exists.

		:param value: The value to parse.
		:return: The parsed output directory. 
		'''
		if value is None:
			print(
				"Warning: Directory for downloading files is not set.")
			return '.'
		if not os.path.isdir(value):
			os.makedirs(value)
		return value

# ----------------------------------------
# Define the main function
def main():
	'''
	The main function that runs the Scraper.
	'''
	# Get the command line arguments and validate them
	validate = Validate()
	# Run the scraper if the arguments are valid
	if validate.run():
		# Initialize the scraper
		scrapy_scraper = ScrapyScraper(
			validate.get_arg("urls"),
			validate.get_arg("whitelist"),
			validate.get_arg("links"),
			validate.get_arg("playwright"),
			validate.get_arg("concurrent_requests"),
			validate.get_arg("concurrent_requests_domain"),
			validate.get_arg("sleep"),
			validate.get_arg("auto_throttle"),
			validate.get_arg("recursion"),
			validate.get_arg("user_agent"),
			validate.get_arg("proxy"),
			validate.get_arg("directory"),
			validate.get_arg("out"),
			datetime.now()
		)
		# Run the scraper
		scrapy_scraper.run()
		print("################################################################################")

if __name__ == "__main__":
	main()
