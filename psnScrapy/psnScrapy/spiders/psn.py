import scrapy


class PsnPriceSpider(scrapy.Spider):
    name = "psn_price_spider"
    start_urls = [
        'https://store.playstation.com/en-ca/grid/STORE-MSF77008-TOPGAMES/1']

    def parse(self, response):
        GRID_SELECTOR = '.__desktop-presentation__grid-cell__base__0ba9f'
        for grid in response.css(GRID_SELECTOR):
            URL_SELECTOR = 'a ::attr(href)'
            THUBM_IMG_SELECTOR = '.product-image__img.product-image__img--main ::attr(srcset)'
            TITLE_NAME_SELECTOR = '.grid-cell__title ::text'
            CATEGORY_NAME_SELECTOR = '.grid-header__title ::text'
            yield {
                # 'title': grid.css(TITLE_SELECTOR).extract_first(),
                # 'price': grid.css(PRICE_SELECTOR).extract_first(),
                # 'img_url': grid.css(IMG_THUMB_SELECTOR).extract_first(),
                'title': grid.css(TITLE_NAME_SELECTOR).extract_first(),
                'title_url': 'https://store.playstation.com' + grid.css(URL_SELECTOR).extract_first(),
                'thumb_img_url': grid.css(THUBM_IMG_SELECTOR).extract_first(),
                # 'api_url': 'https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/' + grid.css(URL_SELECTOR).extract_first()[15:],
            }

        # NEXT_PAGE_SELECTOR = '.paginator-control__next ::attr(href)'
        # next_page = response.css(NEXT_PAGE_SELECTOR).extract_first()
        # if next_page is not None:
        #     yield response.follow(next_page)
