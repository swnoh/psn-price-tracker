import scrapy


class PsnPriceSpider(scrapy.Spider):
    name = "psn_price_spider"
    start_urls = [
        'https://store.playstation.com/en-ca/grid/STORE-MSF77008-TOPGAMES/1',
        'https://store.playstation.com/en-ca/grid/STORE-MSF77008-NWTHSWEEKCA/1',
        'https://store.playstation.com/en-ca/grid/STORE-MSF77008-NWTHSMONTHCA/1',
        'https://store.playstation.com/en-ca/grid/STORE-MSF77008-TOPCLASSICS/1'
    ]

    def parse(self, response):

        HEADER_SELECTOR = '.grid-header'
        CATEGORY_NAME_SELECTOR = '.grid-header__title ::text'
        category_name = response.css(HEADER_SELECTOR).css(
            CATEGORY_NAME_SELECTOR).extract_first()

        GRID_SELECTOR = '.__desktop-presentation__grid-cell__base__0ba9f'
        for grid in response.css(GRID_SELECTOR):
            URL_SELECTOR = 'a ::attr(href)'
            THUBM_IMG_SELECTOR = '.product-image__img.product-image__img--main ::attr(srcset)'
            TITLE_NAME_SELECTOR = '.grid-cell__title ::text'
            yield {
                'category_name': category_name,
                'title_name': grid.css(TITLE_NAME_SELECTOR).extract_first(),
                'title_url': 'https://store.playstation.com' + grid.css(URL_SELECTOR).extract_first(),
                'thumb_img_url': grid.css(THUBM_IMG_SELECTOR).extract_first(),
                'api_url': 'https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/' + grid.css(URL_SELECTOR).extract_first()[15:],
            }

        # NEXT_PAGE_SELECTOR = '.paginator-control__next ::attr(href)'
        # next_page = response.css(NEXT_PAGE_SELECTOR).extract_first()
        # if next_page is not None:
        #     yield response.follow(next_page)
