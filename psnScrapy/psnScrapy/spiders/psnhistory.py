import scrapy
import re
import json
from psnScrapy.items import PsnPriceHistoryItem


class PsnPriceHistory(scrapy.Spider):
    name = "psn_price_history"
    start_urls = [
        # 'https://psdeals.net/ca-store/collection/top_rated_sale',
        # 'https://psdeals.net/ca-store/all-games',
        # 'https://psdeals.net/ca-store/collection/hot_deals?page=1'
        'https://psdeals.net/ca-store/game/10608/rocket-league',
        'https://psdeals.net/ca-store/game/10833/slender-the-arrival',
        'https://psdeals.net/ca-store/game/10314/assassins-creed-syndicate',
        'https://psdeals.net/ca-store/game/10225/unravel',
        'https://psdeals.net/ca-store/game/11314/surgeon-simulator-ae-anniversary-edition',
        'https://psdeals.net/ca-store/game/10443/overruled',
        'https://psdeals.net/ca-store/game/11383/valiant-hearts-the-great-war',
        'https://psdeals.net/ca-store/game/11625/minecraft-playstation3-edition',
        'https://psdeals.net/ca-store/game/11204/styx-master-of-shadows',
        'https://psdeals.net/ca-store/game/12094/alien-breed',
        'https://psdeals.net/ca-store/game/10229/tom-clancys-the-division',
        'https://psdeals.net/ca-store/game/11045/far-cry-4-',
        'https://psdeals.net/ca-store/game/10236/tom-clancys-rainbow-six-siege',
        'https://psdeals.net/ca-store/game/11267/minecraft-playstation4-edition',
        'https://psdeals.net/ca-store/game/11143/battlefield-4-premium-edition',
        'https://psdeals.net/ca-store/game/11057/monopoly-family-fun-pack'

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
        # yield {
        #     'game_id': game_id,
        #     'game_title': game_title,
        #     'chartPrices': chartPrices,
        #     'chartBonusPrices': chartBonusPrices
        # }

        priceItems = PsnPriceHistoryItem(
            game_id=game_id, game_title=game_title,
            chartPrices=chartPrices, chartBonusPrices=chartBonusPrices)
        yield priceItems
