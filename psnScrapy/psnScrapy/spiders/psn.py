import scrapy
from psnScrapy.items import PsnBannerItem, PsnGameItem


class PsnPriceSpider(scrapy.Spider):
    name = "psn_price_spider"
    start_urls = [
        'https://store.playstation.com/en-ca/grid/STORE-MSF77008-TOPGAMES/1',
        'https://store.playstation.com/en-ca/grid/STORE-MSF77008-TOPPSNGAMES/1',
        'https://store.playstation.com/en-ca/grid/STORE-MSF77008-ALLDEALS/1?gameContentType=bundles%2Cgames'
        # 'https://store.playstation.com/en-ca/grid/STORE-MSF77008-ALLGAMES/1'
    ]

    def parse(self, response):

        category_url = response.xpath(
            "//meta[@property='og:url']/@content")[0].extract()
        category_name = response.xpath(
            "//meta[@property='og:title']/@content")[0].extract()

        GRID_SELECTOR = '.__desktop-presentation__grid-cell__base__0ba9f'

        gameItem = []

        for grid in response.css(GRID_SELECTOR):
            URL_SELECTOR = 'a ::attr(href)'
            THUBM_IMG_SELECTOR = '.product-image__img.product-image__img--main ::attr(srcset)'
            GAME_NAME_SELECTOR = '.grid-cell__title span::text'
            GAME_TYPE = '.grid-cell__left-detail.grid-cell__left-detail--detail-2::text'
            REGULAR_PRICE_SELECTOR = '.price ::text'
            DISPLAY_PRICE_SELECTOR = '.price-display__price ::text'
            DISCOUNT_MESSAGE_SELECTOR = '.discount-badge__message ::text'
            PLUS_PRICE_SELECTOR = '.price-display__price--is-plus-upsell ::text'
            PLUS_EXCLUSIVE_PRICE_SELECTOR = '.price-display__price--is-plus-exclusive ::text'

            item_id = grid.css(URL_SELECTOR).extract_first().replace(
                "/en-ca/product/", "")
            item_game_title = grid.css(GAME_NAME_SELECTOR).extract_first()
            item_game_type = grid.css(GAME_TYPE).extract_first()
            item_game_url = 'https://store.playstation.com' + \
                grid.css(URL_SELECTOR).extract_first()
            item_thumb_img_url = grid.css(
                THUBM_IMG_SELECTOR).extract_first().split(", ")[2].replace("3x", "")
            item_api_url = 'https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/' + \
                grid.css(URL_SELECTOR).extract_first()[15:]

            item_regular_price = grid.css(
                REGULAR_PRICE_SELECTOR).extract_first()
            item_display_price = grid.css(
                DISPLAY_PRICE_SELECTOR).extract_first()
            item_discount_message = grid.css(
                DISCOUNT_MESSAGE_SELECTOR).extract_first()
            item_plus_price = grid.css(PLUS_PRICE_SELECTOR).extract_first()
            item_plus_exclusive_price = grid.css(
                PLUS_EXCLUSIVE_PRICE_SELECTOR).extract_first()

            game_item = PsnGameItem(
                category_url=category_url,
                category_name=category_name,
                game_id=item_id,
                game_title=item_game_title,
                game_type=item_game_type,
                game_url=item_game_url,
                thumb_img_url=item_thumb_img_url,
                api_url=item_api_url,
                regular_price=item_regular_price,
                display_price=item_display_price,
                discount_message=item_discount_message,
                plus_price=item_plus_price,
                plus_exclusive_price=item_plus_exclusive_price
            )
            yield game_item

        NEXT_PAGE_SELECTOR = '.paginator-control__next ::attr(href)'
        next_page = response.css(NEXT_PAGE_SELECTOR).extract_first()
        if next_page is not None:
            yield response.follow(next_page)


class PsnBannerSpider(scrapy.Spider):
    name = "psn_banner"
    start_urls = [
        'https://store.playstation.com/en-ca/home/games'
    ]

    def parse(self, response):
        BANNER_SELECTOR = '.slideshow-banner .banner-click-event'

        banner_items = []

        for banner in response.css(BANNER_SELECTOR):
            URL_SELECTOR = 'img ::attr(src)'

            img_url = banner.css(URL_SELECTOR).extract_first()

            banner_items.append(img_url)
        bannerItem = PsnBannerItem(bannerItems=banner_items)
        yield bannerItem
