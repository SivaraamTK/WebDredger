# WebDredger
Python Application to collect required data from a URL

## Installation
1. Clone the repository
2. Install Java v8 from [here](https://www.oracle.com/in/java/technologies/downloads/#java8)
3. Before installing Scrapy follow the steps mentioned for your respective OS [here](https://docs.scrapy.org/en/latest/intro/install.html#windows)
4. Install the required packages using the following command:
```bash
pip install -r requirements.txt
```
5. Install playwright using the following command:
```bash
playwright install
```
6. Install browser specific dependencies using the following command:
```bash
playwright install chromium
```

Note: Modify the geolocation in __get_playwright_meta() accordingly so that its accepted by the input URL


## TODO:
1. Install asyncio when using scrapy
2. Use [emunium](https://github.com/DedInc/emunium) for actions to mimic human behavior
3. Use [scrapy-impersonate](https://github.com/jxlil/scrapy-impersonate), [browserforge](https://github.com/daijro/browserforge) to impersonate different browser
4. Test [Botright](https://github.com/Vinyzu/Botright) for untrackable scraping


## Notes:
- Scrapy: powerful but too complicated
- Scrapy-Scraper: easy to use but only loads the links
- Botasaurus: wrapper around selenium
- Harambe: uses playwright for listing and detail scrape but requires selectors
- ScraperAi: Requires OpenAI API key
- Quokka-Web: No Documentation