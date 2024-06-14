import json
import time
import requests
import pandas as pd
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

def is_content_dynamic(url):
    # Use Selenium to capture additional network requests made by the page
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument('--headless')
    chrome_options.set_capability("goog:loggingPrefs", {"performance": "ALL"})

    try:
        with webdriver.Chrome(service=chrome_service, options=chrome_options) as driver:
            driver.execute_cdp_cmd('Network.enable', {})
            
            driver.get(url)
            
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
            time.sleep(2)

            # Parse the HTML content
            soup = BeautifulSoup(driver.page_source, 'html.parser')

            # Check for common dynamic content 
            scripts = soup.find_all('script')
            iframes = soup.find_all('iframe')
            embedded = soup.find_all('embed')
            if any([scripts, iframes, embedded]):
                print("Detected dynamic tags, indicating potential dynamic content loading.")
                print("=" * 80)
                print()

                # Initialize lists to store request and response data
                requests_data = []
                responses_data = []
                # Get performance logs
                logs = driver.get_log("performance")
                # Process logs
                for log in logs:
                    message = json.loads(log["message"])["message"]
                    if message["method"] == "Network.requestWillBeSent":
                        request = message["params"]["request"]
                        requests_data.append({
                            "URL": request['url'],
                            "Method": request['method'],
                            "Headers": json.dumps(request["headers"]),
                            "Payload": request.get('postData', '')
                        })
                    elif message["method"] == "Network.responseReceived":
                        response = message["params"]["response"]
                        try:
                            response_body = driver.execute_cdp_cmd('Network.getResponseBody', {'requestId': message["params"]["requestId"]})
                            body = response_body.get('body', '')
                        except Exception as e:
                            print(f"Error fetching response body for {response['url']}: {e}")
                            body = "Error fetching response body"
                        responses_data.append({
                            "URL": response['url'],
                            "Status Code": response['status'],
                            "Headers": json.dumps(response["headers"]),
                            "Body": body
                        })
                
                driver.quit()
                
                # Convert lists to pandas DataFrames
                requests_df = pd.DataFrame(requests_data)
                responses_df = pd.DataFrame(responses_data)
                
                # Save to Excel
                with pd.ExcelWriter(f"{url}_Network_Activity.xlsx", engine='openpyxl') as writer:
                    requests_df.to_excel(writer, sheet_name='Requests', index=False)
                    responses_df.to_excel(writer, sheet_name='Responses', index=False)

                return True
            else:
                print("No script tags detected. Content is likely static.")
                return False
    except Exception as e:
        print(f"Unable to access {url} with Selenium. Exception: {e}")
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
            is_content_dynamic(url)
        else:
            whether_requires_headers(url)