# WebDredger
This is Python Scrapy Application to collect all data in an URL. This app can use Request or Playwright to get data from URL. Also includes Rotating Proxy integration

> ### **Note**:
>- This project is still under development and may have some bugs
>- The Playwright mode does not work on windows as of now, instead use the Request mode or WSL to run the application    

## Setup
### Basic Setup
To setup the project, follow the steps mentioned below:

1. Clone the repository
2. Before installing Scrapy follow the steps mentioned for your respective OS [here](https://docs.scrapy.org/en/latest/intro/install.html#windows)
3. Install the required packages using the following command:
```bash
pip install -r requirements.txt
```

### Playwright Setup
After completing the basic setup, follow the steps mentioned below to setup Playwright:

1. (Optional) Install playwright using the following command:
```bash
playwright install
```
2. (Optional) Install browser specific dependencies using the following command:
```bash
playwright install chromium
```

### Rotating Proxy Setup
**WIP**

## Outputs
The project generates the following outputs:

- `results.txt`: Contains all the URLs from which the data was collected and the data collected
- `downloads`: Contains the downloaded files from the URLs, organized by the domain name

## Options

The Application supports the following options:
> `urls` and `out` Options are Mandatory

- `urls`: File with URLs or a single URL to start crawling and scraping from.  
Usage: `-u urls.txt` or `--urls = https://example.com/home`.

- `whitelist`: File with whitelisted domains to limit the crawling scope. Specify `off` to disable domain whitelisting. Default: domains extracted from initial URLs.  
Usage: `-w whitelist.txt` or `--whitelist = off`.

- `links`: Include all links and sources (including 3rd party) in the output file.  
Usage: `-l` or `--links`.

- `playwright`: Use Playwright's headless browser.  
Usage: `-p` or `--playwright`.

- `concurrent-requests`: Number of concurrent requests. (Default: 30)  
Usage: `-cr 10` or `--concurrent-requests = 10`.

- `concurrent-requests-domain`: Number of concurrent requests per domain. (Default: 10)  
Usage: `-crd 5` or `--concurrent-requests-domain = 5`.

- `sleep`: Sleep time between two consecutive requests to the same domain. Specify `random` to sleep a random amount of time between 0.5 and 1.5 seconds. (Default: 1.5)  
Usage: `-s 1` or `--sleep = random`.

- `auto-throttle`: Auto throttle concurrent requests based on the load and latency.  
Usage: `-at 0.5` or `--auto-throttle = 10`.

- `recursion`: Recursion depth limit. Specify `0` for no limit (Default: 1)  
Usage: `-r 2` or `--recursion = 2`.

- `user-agent`: User agent to use. Specify `random` to use a random user agent.  
Usage: `-a curl/3.30.1` or `--user-agent = random`.

- `proxy`: Web proxy to use.
Usage: `-x http://http://127.0.0.1:8080` or `--proxy = http://127.0.0.1:8080`

- `directory`: Output directory. All extracted files will be saved in this directory.  
Usage: `-dir downloads` or `--directory = downloads`.

- `out`: Output file containing crawled links.  
Usage: `-o results.txt` or `--out = results.txt`.

## Usage
### Basic Usage
To run the project, follow the steps mentioned below:

1. Create a file named `urls.txt` and add the URLs from which the data needs to be collected or mention the URL directly in the command for ```-u``` or ```--urls``` option
2. Run the following command to start the project:
```bash
python scraper.py -u urls.txt -o results.txt
```

### Using Playwright
To use Playwright to get data from the URLs, use the `-p` or `--playwright` option with the command:
```bash
python scraper.py -u urls.txt -o results.txt --playwright
```

### Using Proxy
To use proxy server, use the `-x` or `--proxy` option with the command after starting the rotating proxy container:
```bash
python scraper.py -u urls.txt -o results.txt -x  http://127.0.0.1:3128
```

### Recommended Usage
```bash
python scraper.py -u urls.txt -o results.txt -l -s random -a random -dir downloads -r 1 -cr 5 -crd 10 -at 0.5 -x http://127.0.0.1:3128 -p
```

## TODO

### Phase 1 - Fesaibility Framework

- [ ] implement IP blocking detection
- [ ] implement user-agent or header-based detection
- [ ] implement honeypot detection
- [ ] implement AJAX or XHR-based detection
- [ ] implement rate limiting detection
- [ ] implelemnt screenshot to save results

### Phase 2 - Scraper Framework

- [ ] Add feature to extract specific data 
- [ ] Add features to hide the browser and TLS fingerprinting
- [ ] Improve the measures to avoid detection
- [ ] Improve the function to avoid honeypots
- [ ] Integrate the application with a database