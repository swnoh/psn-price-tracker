import scrapy
import re
import json


class PsnPriceHistory(scrapy.Spider):
    name = "psn_price_history"
    start_urls = [
        # 'https://psdeals.net/ca-store/collection/top_rated_sale',
        # 'https://psdeals.net/ca-store/all-games',
        # 'https://psdeals.net/ca-store/collection/hot_deals?page=1'

    ]

    # def parse(self, response):

    #     base_link = 'https://psdeals.net'
    #     ITEMS_LINK = '.game-collection-item-link'

    #     for item in response.css(ITEMS_LINK):
    #         ITEM_LINK = 'a ::attr(href)'

    #         item_id = item.css(ITEM_LINK).extract_first()
    #         item_page_url = base_link + item_id

    #         yield response.follow(item_page_url, callback=self.pageParse)

    #     NEXT_PAGE_SELECTOR = '.next a ::attr(href)'
    #     next_page = response.css(NEXT_PAGE_SELECTOR).extract_first()
    #     if next_page is not None:
    #         yield response.follow(base_link + next_page)

    def parse(self, response):
        game_id = response.css('.game-buy-button-href ::attr(href)').extract_first().replace(
            'https://store.playstation.com/#!/en-ca/cid=', '')
        game_title = response.css(
            '.game-title-info-name ::text').extract_first()

        chartPrices = re.findall(
            "var chartPrices = (.+?);\n", response.body.decode("utf-8"), re.S)
        chartBonusPrices = re.findall(
            "var chartBonusPrices = (.+?);\n", response.body.decode("utf-8"), re.S)
        yield {
            'game_id': game_id,
            'game_title': game_title,
            'chartPrices': chartPrices,
            'chartBonusPrices': chartBonusPrices
        }
