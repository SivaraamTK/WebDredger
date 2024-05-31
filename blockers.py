#TODO: convert selenium to playwright

import os
import time
import datetime
import concurrent.futures
from fp.fp import FreeProxy
from requests import Session
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

PROXY_URL = "http://127.0.0.1:3128"

# Create the selenium-logs folder if it doesn't exist
if not os.path.exists("selenium-logs"):
    os.makedirs("selenium-logs")

def check_auth_wall(url):
    # Keywords that indicate a login page
    auth_keywords = ['login', 'signin', 'auth', 'register', 'signup', 
                            'sign in', 'sign up', 'log in', 'join us', 
                            'log-in', 'sign-in', 'sign-up', 'join-us']

    # Keywords that indicate a login form
    form_keywords = ['username', 'email', 'phone', 'password', 'userid']

    # Keywords that indicate page loaded successfully
    # content_keywords = ['linkedin', 'jman', 'data']

    flag = False

    try:
        options = webdriver.ChromeOptions()
        # add options here
        
        # Enable detailed logging
        caps = DesiredCapabilities.CHROME
        caps['goog:loggingPrefs'] = {'browser': 'ALL'}
        
        # Specify the log file path
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        log_file_path = f"selenium-logs/{timestamp}.log"
        service = Service(ChromeDriverManager().install(), log_path=log_file_path)
        
        driver = webdriver.Chrome(service=service, options=options, desired_capabilities=caps)
        driver.get(url)
        driver.implicitly_wait(10)

        soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Check if all content keywords are present in the response text
        # if all(keyword in soup.text.lower() for keyword in content_keywords):
        #     return False

        # Check if redirected to a login page
        current_url = driver.current_url
        for keyword in auth_keywords:
            if keyword in current_url.lower():
                flag = True
                break

        # Check for login forms in the HTML
        forms = soup.find_all('form')
        for form in forms:
            for keyword in auth_keywords:
                for attr in form.attrs.values():
                    if keyword in str(attr).lower():
                        flag = True
                        break

        # Check for input fields indicating a login form
        inputs = soup.find_all('input')
        for input in inputs:
            for keyword in form_keywords:
                for attr in input.attrs.values():
                    if keyword in str(attr).lower():
                        flag = True
                        break

        # Check for iframes indicating a login form
        iframes = soup.find_all('iframe')
        for iframe in iframes:
            for keyword in auth_keywords:
                for attr in iframe.attrs.values():
                    if keyword in str(attr).lower():
                        flag = True
                        break

        # Check for embedded login forms
        embeds = soup.find_all('embed')
        for embed in embeds:
            for keyword in auth_keywords:
                for attr in embed.attrs.values():
                    if keyword in str(attr).lower():
                        flag = True
                        break

        driver.quit()
        if flag:
            print(f"Auth wall detected on {url}")
            return True
        print(f"No Auth wall detected on {url}")
        return False

    except Exception as e:
        print(f"Error checking URL: {e}")
        if driver:
            driver.quit()
        return None

def check_captcha_service(url):

    captcha_keywords = ['captcha', 'recaptcha', 'hcaptcha', 'securimage', 
                        'distil-captcha', 'turnstile', 'geetest', 'keycaptcha',
                        'lemin', 'textcaptcha', 'text-captcha', 'funcaptcha',
                        'rotatecaptcha', 'clickcaptcha', 'asirra', 'ghostcaptcha',
                        'mtcaptcha','solvemedia', 'bot-check', 'human-verification', 
                        'anti-spam', 'anti-bot', 'image-captcha', 'audio-captcha']
    
    tags_to_check = ['script', 'iframe', 'input', 'embed', 'form']

    flag = False

    try:
        options = webdriver.ChromeOptions()
        # add options here
        
        # Enable detailed logging
        caps = DesiredCapabilities.CHROME
        caps['goog:loggingPrefs'] = {'browser': 'ALL'}
        
        # Specify the log file path
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        log_file_path = f"selenium-logs/{timestamp}.log"
        service = Service(ChromeDriverManager().install(), log_path=log_file_path)
        
        driver = webdriver.Chrome(service=service, options=options, desired_capabilities=caps)
        driver.get(url)
        driver.implicitly_wait(10)

        soup = BeautifulSoup(driver.page_source, 'html.parser')

        for keyword in captcha_keywords:
            for tag in tags_to_check:
                elements = soup.find_all(tag)
                for element in elements:
                    for attr_value in element.attrs.values():
                        if keyword in str(attr_value).lower():
                            flag = True
                            break

        captcha_anchor = soup.find_all('div')
        for anchor in captcha_anchor:
            for keyword in captcha_keywords:
                if keyword in ' '.join(anchor.get('class', [])).lower():
                    flag = True
                    break
                elif keyword in anchor.get('name', '').lower():
                    flag = True
                    break
                elif keyword in anchor.get('id', '').lower():
                    flag = True
                    break
        
        driver.quit()
        if flag:
            print(f"Captcha service detected on {url}")
            return True
        print(f"No Captcha service detected on {url}")
        return False

    except Exception as e:
        print(f"Error checking {url}: {e}")
        if driver:
            driver.quit()
        return None

def check_location_based_access(url):
    # List of countries to check
    countries = [
                    'US', 'UK', 'DE', 'JP', 'IN', 'GB',
                    'BR', 'SG', 'AU', 'AO', 'VN', 
                    # 'RU', 'CA', 'IT', 'KZ', 'LT', 
                    # 'AE', 'VN', 'VE', 'IR', 'EG',
                    # 'CN', 'NL', 'ID', 'CO', 'AO',
                    # 'EC', 'AR', 'DO', 'MM', 'CL',
                    # 'KR', 'ME', 'ZA', 'LY', 'BD',
                    # 'EC', 'KH', 'TH', 'PH', 'MY',
                ]

    blocker_keywords = [
            'blocked', 'unavailable', 'restricted', 'denied', 'forbidden', 
            '403', '404', '500', '502', '503', 
            '504', 'error', 'not found', 'unauthorized', 'unavailable',
        ]
    
    accessiblity_status = {}

    flag = True

    try:
        options = webdriver.ChromeOptions()
        # add options here
        options.add_argument('--timeout=30')
        
        # Enable detailed logging
        caps = DesiredCapabilities.CHROME
        caps['goog:loggingPrefs'] = {'browser': 'ALL'}
        
        # Specify the log file path
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        log_file_path = f"selenium-logs/{timestamp}.log"
        service = Service(ChromeDriverManager().install(), log_path=log_file_path)
        
        driver = webdriver.Chrome(service=service, options=options, desired_capabilities=caps)
        driver.get(url)
        driver.set_page_load_timeout(30)
        driver.set_script_timeout(30)
        driver.implicitly_wait(30)

        soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Check if the page source is empty or contains a known error message
        if not soup.text:
            flag = False
        for keyword in blocker_keywords:
            if keyword in soup.text.lower():
                flag = False
                break
        driver.quit()
        if flag:
            print(f"URL {url} is accessible directly")
            accessiblity_status['Direct'] = True
        else:
            print(f"URL {url} is not accessible directly")
            accessiblity_status['Direct'] = False
    
    except Exception as e:
        print(f"Error checking {url} directly: {e}")
        accessiblity_status['Direct'] = False

    #TODO: Need better proxy
    for country in countries:
        try:
            flag = True

            # proxy = FreeProxy(
            #     country_id=country,
            #     https=True,
            #     # rand=True,
            #     # anonym=True,
            #     timeout=10
            #     ).get()
            # print(f"Using proxy: {proxy}")
            
            options = webdriver.ChromeOptions()
            # add options here
            options.add_argument('--proxy-server=%s' % PROXY_URL)
            options.add_argument('--timeout=30')
            
            # Enable detailed logging
            caps = DesiredCapabilities.CHROME
            caps['goog:loggingPrefs'] = {'browser': 'ALL'}
            
            # Specify the log file path
            timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
            log_file_path = f"selenium-logs/{timestamp}.log"
            service = Service(ChromeDriverManager().install(), log_path=log_file_path)
            
            driver = webdriver.Chrome(service=service, options=options, desired_capabilities=caps)
            driver.get(url)
            driver.set_page_load_timeout(30)
            driver.set_script_timeout(30)
            driver.implicitly_wait(30)

            soup = BeautifulSoup(driver.page_source, 'html.parser')

            # Check if the page source is empty or contains a known error message
            if not soup.text:
                flag = False
            for keyword in blocker_keywords:
                if keyword in soup.text.lower():
                    flag = False
                    break
            driver.quit()
            if flag:
                print(f"URL {url} is accessible from {country}")
                accessiblity_status[country] = True
            else:
                print(f"URL {url} is not accessible from {country}")
                accessiblity_status[country] = False

        except Exception as e:
            print(f"Error checking {url} from {country}: {e}")
            accessiblity_status[country] = False
            if driver:
                driver.quit()
            continue

    print(f"URL - {url} accessibility status: \n")
    for country, status in accessiblity_status.items():
        if status:
            print(f"{country} - Accessible")
        else:
            print(f"{country} - Not Accessible")

def check_request_blocking(url, max_attempts = 100):
    
    blocker_keywords = [
            'blocked', 'unavailable', 'restricted', 'denied', 'forbidden', 
            '403', '404', '500', '502', '503', 
            '504', 'error', 'not found', 'unauthorized', 'unavailable',
        ]
    
    def make_request(url, proxy, session = Session()):
        try:
            response = session.get(
                url=url,
                proxies={'https': proxy},
                timeout=30
                )
            soup = BeautifulSoup(response.text, 'html.parser')
            if not soup.text:
                return True
            for keyword in blocker_keywords:
                if keyword in soup.text.lower():
                    return True
            return False
        except Exception as e:
            print(f"Error testing request blocker for {url} : {e}")
            return None

    try:
        print(f"Checking {url} for request blocking...")
        sess = Session()
        proxy = FreeProxy(
            https=True,
            # country_id='US',
            # rand=True,
            # anonym=True,
            timeout=10
            ).get()
        print(f"Using proxy: {proxy}")
        attempt_counter = 0
        with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
            futures = {executor.submit(make_request, url, proxy, sess) for _ in range(max_attempts)}
            for future in concurrent.futures.as_completed(futures):
                attempt_counter += 1
                is_blocked = future.result()
                if is_blocked == True:
                    print(f"Request blocked after {attempt_counter} attempts for {url}")
                    return True
                time.sleep(1)
        return False
    except Exception as e:
        print(f"Error setting up concurrent requests for {url} : {e}")
        return None
    
def check_headless_detection(url):
    blocker_keywords = [
            'blocked', 'unavailable', 'restricted', 'denied', 'forbidden', 
            '403', '404', '500', '502', '503', 
            '504', 'error', 'not found', 'unauthorized', 'unavailable',
        ]
    flag = False

    try:
        options = webdriver.ChromeOptions()
        # add options here
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-gpu")
        options.add_argument('--timeout=30')
        
        # Enable detailed logging
        caps = DesiredCapabilities.CHROME
        caps['goog:loggingPrefs'] = {'browser': 'ALL'}
        
        # Specify the log file path
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        log_file_path = f"selenium-logs/{timestamp}.log"
        service = Service(ChromeDriverManager(latest_release_url="https://storage.googleapis.com/chrome-for-testing-public/125.0.6422.141/win64/chromedriver-win64.zip").install(), log_path=log_file_path)
        
        driver = webdriver.Chrome(service=service, options=options, desired_capabilities=caps)
        driver.get(url)
        driver.set_page_load_timeout(30)
        driver.set_script_timeout(30)
        driver.implicitly_wait(30)

        soup = BeautifulSoup(driver.page_source, 'html.parser')

        if not soup.text:
            flag = False
        for keyword in blocker_keywords:
            if keyword in soup.text.lower():
                flag = False
                break

        driver.quit()
        if flag:
            print(f"{url} not blocked normal browser")
        else:
            print(f"{url} blocked normal browser")
    
    except Exception as e:
        print(f"Error checking {url} directly: {e}")
        return None
    
    try:
        options = webdriver.ChromeOptions()
        # add options here
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-gpu")
        options.add_argument("--headless=new")
        options.add_argument('--timeout=30')
        
        # Enable detailed logging
        caps = DesiredCapabilities.CHROME
        caps['goog:loggingPrefs'] = {'browser': 'ALL'}
        
        # Specify the log file path
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        log_file_path = f"selenium-logs/{timestamp}.log"
        service = Service(ChromeDriverManager(driver_version="125.0.6422.142", url="https://storage.googleapis.com/chrome-for-testing-public/125.0.6422.141", latest_release_url="https://storage.googleapis.com/chrome-for-testing-public/125.0.6422.141").install(), log_path=log_file_path)
        
        driver = webdriver.Chrome(service=service, options=options, desired_capabilities=caps)
        driver.get(url)
        driver.set_page_load_timeout(30)
        driver.set_script_timeout(30)
        driver.implicitly_wait(30)

        soup = BeautifulSoup(driver.page_source, 'html.parser')

        if not soup.text:
            flag = False
        for keyword in blocker_keywords:
            if keyword in soup.text.lower():
                flag = False
                break
        
        driver.quit()
        if flag:
            print(f"{url} not blocked headless browser")
        else:
            print(f"{url} blocked headless browser")
        
    except Exception as e:
        print(f"Error checking {url} headless: {e}")
        if driver:
            driver.quit()
        return None
    
    if flag:
        return False
    else:
        return True


if __name__ == '__main__':
    url = 'https://www.google.com'
    check_headless_detection(url)
    # urls_to_check = ['https://facebook.com', 'https://linkedin.com', 'https://google.com']
    # for url in urls_to_check:
    #     print(f"Checking URL: {url}")
        # has_auth_wall = check_auth_wall(url)
        # if has_auth_wall:
        #     print(f"The URL {url} likely has an Auth Wall.")
        # else:
        #     print(f"The URL {url} does not appear to have an Auth Wall.")

        # has_captcha_service = check_captcha_service(url)
        # if has_captcha_service:
        #     print(f"The URL {url} likely has a Captcha service.")
        # else:
        #     print(f"The URL {url} does not appear to have a Captcha service.")

        # check_location_based_access(url)

        # request_attempts = check_request_blocking(url)

        # if request_attempts == -1:
        #     print(f"The URL {url} did not block requests till max attempts.")
        # elif not request_attempts:
        #     print(f"Error checking {url} for blocking.")
        # else:
        #     print(f"The URL {url} blocked requests after {request_attempts} attempts.")