import scrapy

class PsnPriceSpider(scrapy.Spider):
    name = "psn_price_spider"
    start_urls = ['https://store.playstation.com/en-ca/grid/STORE-MSF77008-ALLGAMES/1?releaseDate=last_30_days']

    def parse(self, response):
        GRID_SELECTOR = '.__desktop-presentation__grid-cell__base__0ba9f'
        for grid in response.css(GRID_SELECTOR):
            URL_SELECTOR = 'a ::attr(href)'
            yield {
                # 'title': grid.css(TITLE_SELECTOR).extract_first(),
                # 'price': grid.css(PRICE_SELECTOR).extract_first(),
                # 'img_url': grid.css(IMG_THUMB_SELECTOR).extract_first(),
                'title_url': 'https://store.playstation.com' + grid.css(URL_SELECTOR).extract_first(),
                'api_url': 'https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/' + grid.css(URL_SELECTOR).extract_first()[15:],
            }

        NEXT_PAGE_SELECTOR = '.paginator-control__next ::attr(href)'
        next_page = response.css(NEXT_PAGE_SELECTOR).extract_first()
        if next_page is not None:
            yield response.follow(next_page)

