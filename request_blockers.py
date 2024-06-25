import time
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

blocker_keywords = set([
    'blocked', 'unavailable', 'restricted', 'denied', 'forbidden',
    '403', '404', '500', '502', '503', '429', 'unsupported',
    '504', 'error', 'not found', 'unauthorized', 'unavailable'
])
tags_to_check = {'title', 'h1', 'h2', 'h3', 'iframe', 'embed'}
required_tags = ['html', 'head', 'body']

chrome_service = Service(ChromeDriverManager().install())    

def can_access_url(url):
    """
    Checks if a given URL can be accessed successfully using a GET request with the requests library.
    
    Args:
        url (str): The URL to check.
    
    Returns:
        bool: True if the URL can be accessed successfully, False otherwise.
    """
    
    try:
        response = requests.get(url)
        response.raise_for_status()

        # Check if the response is successful
        if response.status_code >= 200 and response.status_code < 300:            
            # Check if the response has content
            if response.content:
                soup = BeautifulSoup(response.content, 'html.parser')
                # Check if the response has text
                if not soup.text:
                    print(f"Missing text in {url}")
                    return False
                # Check if the response has required tags
                for tag in required_tags:
                    if not soup.find(tag):
                        print(f"Missing required tag: {tag} in {url}")
                        return False
                # Check if the response has blocker keywords
                for tag in soup.find_all(tags_to_check):
                    if any(keyword in str(tag).lower() for keyword in blocker_keywords):
                        print(f'Blocker keyword found at {tag} in {url}')
                        return False

                print(f'Able to access {url} with requests')
                return True
        else:
            print(f'Unable to access {url} with requests.')
            return False
    except Exception as e:
        print(f'Unable to access {url} with requests. Exception: {e}')
        return False

def whether_requires_headers(url):
    """
    Checks if a given URL can be accessed successfully using a GET request 
    after adding necessary headers, cookies, tokens, and other trackers.

    Args:
        url (str): The URL to check.

    Returns:
        bool: True if the URL requires headers, False otherwise.
    """
    # Start the Chrome webdriver
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument('--headless')
    
    try:
        with webdriver.Chrome(service=chrome_service, options=chrome_options) as driver:
            # Load the URL
            driver.delete_all_cookies()
            driver.get(url)
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
            time.sleep(2)

            # Get the headers, cookies, tokens, and other trackers
            session = requests.Session()
            
            # Get headers from the browser session
            session.headers['User-Agent'] = driver.execute_script('return navigator.userAgent')
            headers = driver.execute_script('return window.performance.getEntries()[0].requestHeaders')
            if headers is not None:
                for header in headers:
                    session.headers[header['name']] = header['value']
                    
            for cookie in driver.get_cookies():
                session.cookies.set(cookie['name'], cookie['value'])

            # Send a GET request with the copied headers, cookies, tokens, and other trackers
            response = session.get(url)
            response.raise_for_status()

            # Check if the response is successful
            if response.status_code >= 200 and response.status_code < 300:            
                # Check if the response has content
                if response.content:
                    soup = BeautifulSoup(response.content, 'html.parser')
                    # Check if the response has text
                    if not soup.text:
                        print(f"Missing text in {url} after adding headers")
                        return False
                    # Check if the response has required tags
                    for tag in required_tags:
                        if not soup.find(tag):
                            print(f"Missing required tag: {tag} in {url} after adding headers")
                            return False
                    # Check if the response has blocker keywords
                    for tag in soup.find_all(tags_to_check):
                        if any(keyword in str(tag).lower() for keyword in blocker_keywords):
                            print(f'Blocker keyword found at {tag} in {url} after adding headers')
                            return False

                    print(f'Able to access {url} with requests after adding headers')
                    return True
            else:
                print(f'Unable to access {url} with requests after adding headers.')
                return False
    except Exception as e:
        print(f'Unable to access {url} with requests after adding headers. Exception: {e}')
        try:
            driver.quit()
        except:
            pass
        return False
 
if __name__ == '__main__':
    urls = [
        "https://www.linkedin.com",
    ]
    for url in urls:
        if can_access_url(url):
            pass
        else:
            whether_requires_headers(url)