"""
Note:
    This wil close all chrome instances, so do not use it when running the program
"""

import time
import psutil
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
chrome_options.add_argument("start-maximized")
chrome_options.add_argument("--incognito")
chrome_options.add_argument("--log-level=3")
chrome_options.add_experimental_option("prefs", {"profile.default_content_settings.cookies": 2})

chrome_service = Service(ChromeDriverManager().install())           

# Hotfix to avoid CPU overload
def terminate_zombie_processes():
    """
    Terminate zombie Chrome processes.
    """
    for proc in psutil.process_iter(['name', 'exe']):
        try:
            if 'chrome' in proc.info['name'].lower() or 'chrome' in proc.info['exe'].lower():
                proc.terminate()
                print(f"Terminated zombie Chrome process: {proc.info['name']}")
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
        None
    """
    auth_keywords = {keyword.lower() for keyword in ['login', 'signin', 'auth', 'register', 'signup', 
                                                    'sign in', 'sign up', 'log in', 'join us', 
                                                    'log-in', 'sign-in', 'sign-up', 'join-us']}
    form_keywords = {keyword.lower() for keyword in ['username', 'email', 'phone', 'password', 'userid']}
    tags_to_check = ['script', 'iframe', 'input', 'embed', 'form']

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
                return

            for keyword in auth_keywords:
                if any(tag in soup.find_all(attrs={'*': keyword}) for tag in tags_to_check):
                    print(f"Auth keyword{keyword} found on URL: {url}")
                    return

            inputs = soup.find_all('input')
            for input in inputs:
                for keyword in form_keywords:
                    if any(keyword in str(attr).lower() for attr in input.attrs.values()):
                        print(f"Form keyword{keyword} found on URL: {url}")
                        return

        print(f"{url} probably doesn't have an auth wall")

    except Exception as e:
        print(f"Error checking URL: {e}")
       
    finally:
        try:
            driver.quit()
        except:
            pass

def check_captcha_service(url):
    """
    Checks if a given URL is using a captcha service by searching for captcha keywords in the HTML tags and attributes.

    Args:
        url (str): The URL to check for captcha service.

    Returns:
        None
    """
    captcha_keywords = set(keyword.lower() for keyword in [
        'captcha', 'recaptcha', 'hcaptcha', 'securimage', 
        'distil-captcha', 'turnstile', 'geetest', 'keycaptcha',
        'lemin', 'textcaptcha', 'text-captcha', 'funcaptcha',
        'rotatecaptcha', 'clickcaptcha', 'asirra', 'ghostcaptcha',
        'mtcaptcha','solvemedia', 'bot-check', 'human-verification', 
        'anti-spam', 'anti-bot', 'image-captcha', 'audio-captcha'
    ])
    
    tags_to_check = ['script', 'iframe', 'input', 'embed', 'form', 'div']

    try:
        with webdriver.Chrome(service=chrome_service, options=chrome_options) as driver:
            driver.get(url)
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
            time.sleep(2)

            soup = BeautifulSoup(driver.page_source, 'html.parser')

            for tag in tags_to_check:
                elements = soup.find_all(tag)
                for element in elements:
                    if any(keyword in str(attr_value).lower() for attr_value in element.attrs.values() for keyword in captcha_keywords):
                        print(f"Captcha keyword found at {element} on URL: {url}")
                        return
                    if tag == 'div' and any(keyword in ' '.join(element.get('class', [])).lower() for keyword in captcha_keywords):
                        print(f"Captcha keyword found at {element} on URL: {url}")
                        return

            print(f"{url} probably doesn't have a captcha service")

    except Exception as e:
        print(f"Error checking {url}: {e}")
        
    finally:
        try:
            driver.quit()
        except:
            pass

#NOTE: Better to use proxy/vpn to spoof location as sites use IP address to determine location
def check_location_based_access(url):
    """
    Checks the accessibility of a given URL from different countries,
    and prints the results.
    
    Args:
        url (str): The URL to check for accessibility.
    
    Returns:
        None
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
                print(f"Error checking {url} for blocking: {e}")
    
    print('Results:', locations)
          
def check_request_blocking(url, max_attempts=10):
    """
    Checks if a given URL blocks requests by searching for specific keywords in the HTML tags and attributes.
    
    Args:
        url (str): The URL to check for blocking.
        max_attempts (int, optional): The maximum number of attempts to check the URL. Defaults to 10.
    
    Returns:
        None
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
                if any(keyword in str(tag).lower() for keyword in blocker_keywords):
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
                
def check_headless_detection(url):
    """
    Checks if a given URL blocks headless browsers, normal browsers, or both.
    
    Args:
        url (str): The URL to check.
    
    Returns:
        None
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
    
    try:
        with webdriver.Chrome(service=chrome_service, options=options) as driver:
            driver.get(url)
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
            time.sleep(2)

            soup = BeautifulSoup(driver.page_source, 'html.parser')
                            
            if not soup.text:
                return "No text found"
            for tag in soup.find_all(tags_to_check):
                if any(keyword in str(tag).lower() for keyword in blocker_keywords):
                    return f"Blocking keyword found in {tag} for normal browser"
                if any(keyword in str(attr).lower() for attr in tag.attrs.values() for keyword in blocker_keywords):
                    return f"Blocking keyword found in {tag} attributes for normal browser"
    
    except Exception as e:
        return f"Normal browser, Error: {e}"
    
    try:
        with webdriver.Chrome(service=chrome_service, options=options) as driver:
            driver.get(url)
            driver.implicitly_wait(10)
            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
            time.sleep(2)

            soup = BeautifulSoup(driver.page_source, 'html.parser')
                            
            if not soup.text:
                return "No text found"
            for tag in soup.find_all(tags_to_check):
                if any(keyword in str(tag).lower() for keyword in blocker_keywords):
                    return f"Blocking keyword found in {tag} for headless browser"
                if any(keyword in str(attr).lower() for attr in tag.attrs.values() for keyword in blocker_keywords):
                    return f"Blocking keyword found in {tag} attributes for headless browser"
    
    except Exception as e:
        return f"Normal browser, Error: {e}"
    
    return "The URL is accessible by both normal and headless browsers."

if __name__ == '__main__':
    urls_to_check = [
        # 'https://linkedin.com', 
        # 'https://google.com',
        'https://www.youtube.com',
        # 'https://www.amazon.com',
        ]
    for url in urls_to_check:
        print(f"Checking URL: {url}")
        
        check_auth_wall(url)

        check_captcha_service(url)

        check_headless_detection(url)
        terminate_zombie_processes()
        
        check_request_blocking(url)
        terminate_zombie_processes()
       
        check_location_based_access(url)
        terminate_zombie_processes()
        