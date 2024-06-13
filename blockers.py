#TODO: Save screenshots of failure requests
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument('--headless')
chrome_options.add_argument("--log-level=3")

chrome_service = Service(ChromeDriverManager().install())           

def check_auth_wall(url):
    """
    Checks if a given URL is behind an authentication wall.

    Args:
        url (str): The URL to check.

    Returns:
        None
    """
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
        driver = webdriver.Chrome(service=chrome_service, options=chrome_options)
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
        else:
            print(f"No Auth wall detected on {url}")

    except Exception as e:
        print(f"Error checking URL: {e}")
        return True
    
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
    captcha_keywords = ['captcha', 'recaptcha', 'hcaptcha', 'securimage', 
                        'distil-captcha', 'turnstile', 'geetest', 'keycaptcha',
                        'lemin', 'textcaptcha', 'text-captcha', 'funcaptcha',
                        'rotatecaptcha', 'clickcaptcha', 'asirra', 'ghostcaptcha',
                        'mtcaptcha','solvemedia', 'bot-check', 'human-verification', 
                        'anti-spam', 'anti-bot', 'image-captcha', 'audio-captcha']
    
    tags_to_check = ['script', 'iframe', 'input', 'embed', 'form']

    flag = False

    try:
        driver = webdriver.Chrome(service=chrome_service, options=chrome_options)
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
        else:
            print(f"No Captcha service detected on {url}")

    except Exception as e:
        print(f"Error checking {url}: {e}")
        return True
    
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
    tags_to_check = ['title', 'h1', 'h2', 'h3', 'iframe', 'embed']
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
    options.add_argument("--log-level=3")
    chrome_options.add_experimental_option("prefs", {
        "profile.default_content_setting_values.geolocation": 1,
    })

    driver = webdriver.Chrome(service=chrome_service, options=options)

    for country, coords in locations.items():
        try:
            print(f"Checking access from {country}...")        
            
            flag = False
            
            driver.execute_cdp_cmd("Emulation.setGeolocationOverride", coords)
            driver.get(url)
            driver.implicitly_wait(10)
            
            soup = BeautifulSoup(driver.page_source, 'html.parser')
                        
            if not soup.text:
                print("No text found")
                flag = True
            for tag in tags_to_check:
                elements = soup.find_all(tag)
                for element in elements:
                    if any(keyword in element.text.lower() for keyword in blocker_keywords):
                        flag = True
                        print(f"Blocking keyword found in {tag} text")
                        break
                    if any(keyword in str(attr).lower() for attr in element.attrs.values() for keyword in blocker_keywords):
                        flag = True
                        print(f"Blocking keyword found in {tag} attributes")
                        break
                if flag:
                    break

            driver.quit()
            
            if not flag:
                locations[country]['blocked'] = False
                print(f"URL {url} did not block requests from {country}")
            else:
                locations[country]['blocked'] = True
            time.sleep(2)
            
        except Exception as e:
            print(f"Error checking {url} for blocking: {e}")
        finally:
            try:
                driver.quit()
            except:
                pass
            if flag:
                print(f"URL {url} blocked requests from {country}")
            else:
                print(f"URL {url} did not block requests from {country}")
    
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
    success_count = 0
    flag = False
    blocker_keywords = [
        'blocked', 'unavailable', 'restricted', 'denied', 'forbidden',
        '403', '404', '500', '502', '503', '429',
        '504', 'error', 'not found', 'unauthorized', 'unavailable',
    ]
    tags_to_check = ['title', 'h1', 'h2', 'h3', 'iframe', 'embed']
    driver = webdriver.Chrome(service=chrome_service, options=chrome_options)
    driver.implicitly_wait(10)

    try:
        for curr_attempt in range(1, max_attempts + 1):
            driver.execute_script(f"window.open('about:blank', 'tab{curr_attempt}');")
            driver.switch_to.window(f'tab{curr_attempt}')
            driver.get(url)
            driver.implicitly_wait(10)
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            driver.close()
            driver.switch_to.window(driver.window_handles[0])
            if not soup.text:
                print("No text found")
                continue
            for tag in tags_to_check:
                elements = soup.find_all(tag)
                for element in elements:
                    if any(keyword in element.text.lower() for keyword in blocker_keywords):
                        flag = True
                        print(f"Blocking keyword found in {tag} text")
                        break
                    if any(keyword in str(attr).lower() for attr in element.attrs.values() for keyword in blocker_keywords):
                        flag = True
                        print(f"Blocking keyword found in {tag} attributes")
                        break
                if flag:
                    break
            if not flag:
                success_count += 1
                print(f"URL {url} did not block requests on attempt {curr_attempt}, Total successes: {success_count}.")
            else:
                break
            time.sleep(2)
    except Exception as e:
        print(f"Error checking {url} for blocking: {e}")
    finally:
        try:
            driver.quit()
        except:
            pass
        if flag:
            print(f"URL {url} blocked requests after {curr_attempt} attempts, Total successes: {success_count}.")
        else:
            print(f"URL {url} did not block requests till max attempts {max_attempts}, Total successes: {success_count}.")
            
def check_headless_detection(url):
    """
    Checks if a given URL blocks headless browsers, normal browsers, or both.
    
    Args:
        url (str): The URL to check.
    
    Returns:
        None
    """
    flag_normal = False
    flag_headless = False
    
    options = webdriver.ChromeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--log-level=3")
    
    driver = webdriver.Chrome(service=chrome_service, options=options)
    driver.get(url)
    time.sleep(2)

    try:
        element = driver.find_element(By.TAG_NAME, "body")
        if element:
            print(f"Normal browser, Page title: {driver.title}")
            flag_normal = True
    except Exception as e:
        print(f"Normal browser, Error: {e}")
    finally:
        driver.quit()
    
    driver = webdriver.Chrome(service=chrome_service, options=chrome_options)
    driver.get(url)
    time.sleep(2)

    try:
        element = driver.find_element(By.TAG_NAME, "body")
        if element:
            print(f"Normal browser, Page title: {driver.title}")
            flag_headless = True
    except Exception as e:
        print(f"Normal browser, Error: {e}")
    finally:
        try:
            driver.quit()
        except:
            pass

    if flag_normal and not flag_headless:
        print("The URL blocks headless browsers.")
    elif not flag_normal and flag_headless:
        print("The URL blocks normal browsers.")
    elif not flag_normal and not flag_headless:
        print("The URL blocks both normal and headless browsers.")
    else:
        print("The URL is accessible by both normal and headless browsers.")

if __name__ == '__main__':
    url = 'https://www.google.com'
    urls_to_check = [
        # 'https://linkedin.com', 
        # 'https://google.com',
        # 'https://www.youtube.com',
        # 'https://www.amazon.com',
        'https://www.crackle.com/'
        ]
    for url in urls_to_check:
        print(f"Checking URL: {url}")
        
        check_auth_wall(url)
        
        check_captcha_service(url)
        
        check_headless_detection(url)
        
        check_request_blocking(url)
        
        check_location_based_access(url)