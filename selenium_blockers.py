"""
Note:
    This wil close all chrome instances, so do not use it when running the program
"""

import re
import time
import json
from urllib.parse import urlparse
import psutil
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support import expected_conditions as EC

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument('--headless')
chrome_options.add_argument("--incognito")
chrome_options.add_argument("--log-level=3") # used to reduce the console output
chrome_options.add_experimental_option("prefs", {"profile.default_content_settings.cookies": 2}) # used to block cookies

chrome_service = Service(ChromeDriverManager().install())           

def sanitize_filename(filename):
	"""Sanitize the filename by replacing invalid characters with `_` ."""
	filename = filename.replace('www.','').replace('https://','').replace('http://','').replace('.com','')
	filename = re.sub(r'[^a-zA-Z0-9_]', '_', filename)
	filename = re.sub(r'__+', '_', filename)
	return filename.rstrip('_')

# Hotfix to avoid CPU overload
def terminate_zombie_processes():
    """
    Terminate zombie Chrome processes.
    """
    for proc in psutil.process_iter(['name', 'exe']):
        try:
            if 'chrome' in proc.info['name'].lower() or 'chrome' in proc.info['exe'].lower():
                proc.terminate()
                print(f"Terminated process: {proc.info['name']}")
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass
        except Exception:
            pass

def check_auth_wall(url):
    """
    Checks if a given URL is behind an authentication wall.

    Args:
        url (str): The URL to check.

    Returns:
        flag (bool): True if the URL is behind an authentication wall, False otherwise.
    """
    auth_keywords = {keyword.lower() for keyword in ['login', 'signin', 'auth', 'register', 'signup', 
                                                    'sign in', 'sign up', 'log in', 'join us', 
                                                    'log-in', 'sign-in', 'sign-up', 'join-us']}
    form_keywords = {keyword.lower() for keyword in ['username', 'email', 'phone', 'password', 'userid']}
    tags_to_check = ['script', 'iframe', 'input', 'embed', 'form']
    flag = False

    try:
        with webdriver.Chrome(service=chrome_service, options=chrome_options) as driver:
            driver.get(url)
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
            time.sleep(2)

            soup = BeautifulSoup(driver.page_source, 'html.parser')

            current_url = driver.current_url.lower()
            if any(keyword in current_url for keyword in auth_keywords):
                print(f"Auth keyword found on URL link: {url}")
                flag = True

            for keyword in auth_keywords:
                if flag:
                    break
                if any(tag in soup.find_all(attrs={'*': keyword}) for tag in tags_to_check):
                    print(f"Auth keyword{keyword} found on URL: {url}")
                    flag = True

            inputs = soup.find_all('input')
            for input in inputs:
                if flag:
                    break
                for keyword in form_keywords:
                    if any(keyword in str(attr).lower() for attr in input.attrs.values()):
                        print(f"Form keyword{keyword} found on URL: {url}")
                        flag = True

        driver.quit()
        if not flag:
            print(f"{url} probably doesn't have an auth wall")
        
    except Exception as e:
        print(f"Error checking URL: {e}")
        flag = True
       
    finally:
        try:
            driver.quit()
        except:
            pass
        return flag

def check_captcha_service(url):
    """
    Checks if a given URL is using a captcha service by searching for captcha keywords in the HTML tags and attributes.

    Args:
        url (str): The URL to check for captcha service.

    Returns:
        flag (bool): True if the URL is using a captcha service, False otherwise.
    """
    captcha_keywords = set([
        'captcha', 'recaptcha', 'hcaptcha', 'securimage', 'distil-captcha', 'turnstile', 'geetest', 'keycaptcha',
        'lemin', 'textcaptcha', 'text-captcha', 'funcaptcha', 'rotatecaptcha', 'clickcaptcha', 'asirra', 'ghostcaptcha',
        'mtcaptcha', 'solvemedia', 'bot-check', 'human-verification', 'anti-spam', 'anti-bot', 'image-captcha', 'audio-captcha'
    ])
    captcha_phrases = set([
        'enter the characters', 'type the characters you see in this image:', 'type characters', 'prove you are human',
        'verification', 'security check'
    ])
    tags_to_check = ['script', 'iframe', 'input', 'embed', 'form', 'div']
    
    flag = False

    try:
        with webdriver.Chrome(service=chrome_service, options=chrome_options) as driver:
            driver.get(url)
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
            time.sleep(3)

            soup = BeautifulSoup(driver.page_source, 'html.parser')

            for tag in tags_to_check:
                if flag:
                    break
                elements = soup.find_all(tag)
                for element in elements:
                    if flag:
                        break
                    if any(keyword in str(attr_value).lower() for attr_value in element.attrs.values() for keyword in captcha_keywords):
                        print(f"Captcha keyword found at {element} on URL: {url}")
                        flag = True
                        break
                    if tag == 'div' and any(keyword in ' '.join(element.get('class', [])).lower() for keyword in captcha_keywords):
                        print(f"Captcha keyword found at {element} on URL: {url}")
                        flag = True
                        break

            driver.quit()
            if not flag:
                print(f"{url} probably doesn't have a captcha service")

    except Exception as e:
        print(f"Error checking {url}: {e}")
        flag = True
        
    finally:
        try:
            driver.quit()
        except:
            pass
        return flag

#NOTE: Better to use proxy/vpn to spoof location as sites use IP address to determine location
def check_location_based_access(url):
    """
    Checks the accessibility of a given URL from different countries,
    and prints the results.
    
    Args:
        url (str): The URL to check for accessibility.
    
    Returns:
        locations (dict): A dictionary of country codes, their corresponding latitude and longitude and if they were blocked
    """
    blocker_keywords = [
        'blocked', 'unavailable', 'restricted', 'denied', 'forbidden',
        '403', '404', '500', '502', '503', '429', 'unsupported',
        '504', 'error', 'not found', 'unauthorized', 'unavailable',
    ]
    tags_to_check = {'title', 'h1', 'h2', 'h3', 'iframe', 'embed'}
    locations = {
      # Generally Unrestricted
        'US': {'latitude': 36.778259, 'longitude': -119.417931},
        'UK': {'latitude': 51.50722, 'longitude': -0.1275},
        'India': {'latitude': 19.07283, 'longitude': 72.88261},
       # 'Canada': {'latitude': 43.651070, 'longitude': -79.347015},
       # 'Japan': {'latitude': 36.00000000, 'longitude': 138.00000000},
       # 'Australia': {'latitude': -37.840935, 'longitude': 144.946457},
       # 'Brazil': {'latitude': -23.533773, 'longitude': -46.625290},
       # 'Nambia': {'latitude': -18.383333, 'longitude': 36.533333},
       # 'Switzerland': {'latitude': 46.818188, 'longitude': 8.227511},
       # 'Germany': {'latitude': 51.165691, 'longitude': 10.451526},
       # 'Spain': {'latitude': 40.416775, 'longitude': -3.703790},
       
       # Mostly Restricted
       'Russia': {'latitude': 55.75582600, 'longitude': 37.61729990},
       'China': {'latitude': 39.90419900, 'longitude': 116.40739600},
       # 'Iran': {'latitude': 32.42790800, 'longitude': 53.68804600},
       # 'Syria': {'latitude': 34.80207400, 'longitude': 38.99681500},
       # 'Sudan': {'latitude': 12.86280000, 'longitude': 30.21760000},
       # 'Cuba': {'latitude': 4.60971000, 'longitude': -78.08161000},
    }
    
    flag = False

    options = webdriver.ChromeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument('--headless')
    options.add_argument("--incognito")
    options.add_argument("--log-level=3")
    options.add_experimental_option("prefs", {
        "profile.default_content_setting_values.geolocation": 1,
    })

    with webdriver.Chrome(service=chrome_service, options=options) as driver:
        for country, coords in locations.items():
            try:
                print(f"Checking access from {country}...")        
                
                driver.execute_cdp_cmd("Emulation.setGeolocationOverride", coords)
                driver.get(url)
                driver.implicitly_wait(10)
                WebDriverWait(driver, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
                time.sleep(2)
                
                soup = BeautifulSoup(driver.page_source, 'html.parser')
                
                flag = any(
                    keyword in element.text.lower() or any(keyword in str(attr).lower() for attr in element.attrs.values())
                    for element in soup.find_all(lambda tag: tag.name in tags_to_check)
                    for keyword in blocker_keywords
                )
                
                locations[country]['blocked'] = flag
                if not flag:
                    print(f"URL {url} did not block requests from {country}")
                else:
                    print(f"URL {url} blocked requests from {country}")
                time.sleep(2)
                
            except Exception as e:
                print(f"Error checking {url} for blocking from {country}: {e}")
                locations[country]['blocked'] = flag
    
    return locations
          
def check_request_blocking(url, max_attempts=10):
    """
    Checks if a given URL blocks requests by searching for specific keywords in the HTML tags and attributes.
    
    Args:
        url (str): The URL to check for blocking.
        max_attempts (int, optional): The maximum number of attempts to check the URL. Defaults to 10.
    
    Returns:
        dict: A dictionary containing the max attempts and success count.
    """
    blocker_keywords = set([
        'blocked', 'unavailable', 'restricted', 'denied', 'forbidden',
        '403', '404', '500', '502', '503', '429', 'unsupported',
        '504', 'error', 'not found', 'unauthorized', 'unavailable'
    ])
    tags_to_check = {'title', 'h1', 'h2', 'h3', 'iframe', 'embed'}
    success_count = 0
    flag = False
    
    with webdriver.Chrome(service=chrome_service, options=chrome_options) as driver:   
        for _ in range(max_attempts):
            driver.get(url)
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
            time.sleep(2)
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            if not soup.text:
                continue
            for tag in soup.find_all(tags_to_check):
                if not flag and any(keyword in str(attr).lower() for attr in tag.attrs.values() for keyword in blocker_keywords):
                    flag = True
                    break
            if flag:
                break
            else:
                success_count += 1
                print(f"URL {url} did not block requests on attempt {_ + 1}, Total successes: {success_count}.")
            time.sleep(2)
        else:
            print(f"URL {url} did not block requests till max attempts {max_attempts}, Total successes: {success_count}.")
        if flag:
            print(f"URL {url} blocked requests after {_ + 1} attempts, Total successes: {success_count}.")
    try:
        driver.quit()
    except:
        pass
    return {
        'max_attempts' : max_attempts,
        'success_count': success_count,
    }
                
def check_headless_detection(url):
    """
    Checks if a given URL blocks headless browsers, normal browsers, or both.
    
    Args:
        url (str): The URL to check.
    
    Returns:
        dict : A dictionary containing the normal and headless browser results.
    """
    blocker_keywords = set([
        'blocked', 'unavailable', 'restricted', 'denied', 'forbidden',
        '403', '404', '500', '502', '503', '429','unsupported'
        '504', 'error', 'not found', 'unauthorized', 'unavailable',
    ])
    tags_to_check = {'title', 'h1', 'h2', 'h3', 'iframe', 'embed'}
    
    options = webdriver.ChromeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--incognito")
    options.add_argument("--log-level=3")
    
    head_flag = False
    
    try:
        with webdriver.Chrome(service=chrome_service, options=options) as driver:
            driver.get(url)
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
            time.sleep(2)

            soup = BeautifulSoup(driver.page_source, 'html.parser')
                            
            if not soup.text:
                print("No text found for normal browser")
                head_flag = True
            for tag in soup.find_all(tags_to_check):
                if any(keyword in str(tag).lower() for keyword in blocker_keywords):
                    print(f"Blocking keyword found in {tag} for normal browser")
                    head_flag = True
                if any(keyword in str(attr).lower() for attr in tag.attrs.values() for keyword in blocker_keywords):
                    print(f"Blocking keyword found in {tag} attributes for normal browser")
                    head_flag = True
    
    except Exception as e:
        print (f"Normal browser, Error: {e}")
        head_flag = True
    
    headless_flag = False
    
    try:
        with webdriver.Chrome(service=chrome_service, options=options) as driver:
            driver.get(url)
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
            time.sleep(2)

            soup = BeautifulSoup(driver.page_source, 'html.parser')
                            
            if not soup.text:
                print("No text found for headless browser")
                headless_flag = True
            for tag in soup.find_all(tags_to_check):
                if any(keyword in str(tag).lower() for keyword in blocker_keywords):
                    print(f"Blocking keyword found in {tag} for normal browser")
                    headless_flag = True
                if any(keyword in str(attr).lower() for attr in tag.attrs.values() for keyword in blocker_keywords):
                    print(f"Blocking keyword found in {tag} attributes for normal browser")
                    headless_flag = True
    
    except Exception as e:
        print (f"Normal browser, Error: {e}")
        headless_flag = True
    
    return {
        'head_flag': head_flag,
        'headless_flag': headless_flag,
    }

#TODO: WIP
def is_dynamic(url):
    """
    Use Selenium to capture additional network requests made by the page.
    
    Args:
        url (str): The URL of the page to analyze.
    
    Returns:
        None
    """
    options = webdriver.ChromeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument('--headless')
    options.set_capability("goog:loggingPrefs", {"performance": "ALL"})

    try:
        with webdriver.Chrome(service=chrome_service, options=options) as driver:
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
                            body = e
                        finally:
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
                with pd.ExcelWriter(f"{(url)}_Network_Activity.xlsx", engine='openpyxl') as writer:
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
    urls_to_check = [
        'https://linkedin.com', 
        'https://google.com',
    ]
    
    all_results = []  # Initialize an empty list to collect results
    
    for url in urls_to_check:
        print(f"Checking URL: {url}")
        
        results = {'url': url}
        terminate_zombie_processes()
        
        results['auth_wall'] = check_auth_wall(url)
        terminate_zombie_processes()

        results['captcha_service'] = check_captcha_service(url)
        terminate_zombie_processes()

        results['headless_detection'] = check_headless_detection(url)
        terminate_zombie_processes()
        
        results['request_blocking'] = check_request_blocking(url)
        terminate_zombie_processes()
       
        results['location_based_access'] = check_location_based_access(url)
        terminate_zombie_processes()
        
        all_results.append(results) 
    
    # Convert all_results to a DataFrame
    df = pd.DataFrame(all_results)
    
    # Save to Excel
    with pd.ExcelWriter('blocker_check.xlsx', engine='xlsxwriter') as writer:
        df.to_excel(writer, sheet_name='selenium_blocker_checks', index=False)
        writer._save()
        print("Saved results to Excel")