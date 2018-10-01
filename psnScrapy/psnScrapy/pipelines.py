# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import datetime
import requests
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from flask import json

db_string = 'postgres://%s:%s@%s/%s' % (
    os.environ['DBUSER'], os.environ['DBPASS'], os.environ['DBHOST'], os.environ['DBNAME']
)

db = create_engine(db_string)

Session = sessionmaker(db)
session = Session()


from psnScrapy.models import *
from psnScrapy.items import PsnGameItem


class PsnscrapyPipeline(object):

    def process_item(self, item, spider):

        if spider.name is 'psn_banner':

            print("psn_banner Start")
            self.set_banner_item(item)
            self.update_category_game_item()
            session.query(PsnCategoryModel).delete()
            session.commit()
            print("psn_banner End")
            return item

        if spider.name is 'psn_price_spider':
            # Getting price information from API #
            response = requests.get(item['api_url'])
            api_data = response.json()

            print("psn_price_spider Start")
            self.set_category_item(item)
            self.set_game_item(item)
            self.set_price_history_item(item, api_data)
            print("psn_price_spider End")

            return item['game_id']

    def update_category_game_item(self):
        categoryItemDB = session.query(PsnCategoryModel).all()

        for categoryItem in categoryItemDB:
            eachitem = session.query(PsnGameModel).filter(
                PsnGameModel.game_id == categoryItem.game_id).first()

            if eachitem:
                # Getting price information from API #
                response = requests.get(eachitem.api_url)
                api_data = response.json()

                regular_price = None
                display_price = None
                discount_message = None
                plus_price = None
                plus_exclusive_price = None

                if 'default_sku' in api_data:
                    if 'display_price' in api_data['default_sku']:
                        regular_price = api_data['default_sku']['display_price']
                        display_price = api_data['default_sku']['display_price']

                    if 'rewards' in api_data['default_sku']:
                        if api_data['default_sku']['rewards']:
                            display_price = api_data['default_sku']['rewards'][0]['display_price']
                            if api_data['default_sku']['rewards'][0]['discount'] is not 0:
                                discount_message = 'SAVE {}%'.format(
                                    api_data['default_sku']['rewards'][0]['discount'])

                            if 'bonus_display_price' in api_data['default_sku']['rewards'][0]:
                                plus_price = api_data['default_sku']['rewards'][0]['bonus_display_price']

                            if api_data['default_sku']['rewards'][0]['isPlus']:
                                plus_exclusive_price = api_data['default_sku']['rewards'][0]['display_price']
                                if api_data['default_sku']['rewards'][0]['discount'] is 0:
                                    discount_message = api_data['default_sku']['rewards'][0]['display_price']
                                else:
                                    discount_message = 'SAVE {}%'.format(
                                        api_data['default_sku']['rewards'][0]['discount'])

                game_item = PsnGameItem(
                    game_id=eachitem.game_id,
                    game_title=eachitem.game_title,
                    game_type=eachitem.game_type,
                    game_url=eachitem.game_url,
                    thumb_img_url=eachitem.thumb_img_url,
                    api_url=eachitem.api_url,
                    regular_price=regular_price,
                    display_price=display_price,
                    discount_message=discount_message,
                    plus_price=plus_price,
                    plus_exclusive_price=plus_exclusive_price
                )

                self.set_game_item(game_item)
                self.set_price_history_item(game_item, api_data)

    def set_banner_item(self, item):
        '''
        DB Update for Banner in Main Page
        '''
        # Banner #
        banner = session.query(PsnBannerModel).first()

        banner.banner_url = item['bannerItems']
        session.commit()

    def set_category_item(self, item):
        '''
        DB Update for Game Category if not exist.
        '''
        categoryItemDB = session.query(PsnCategoryModel).filter(
            PsnCategoryModel.category_name == item['category_name']).filter(
            PsnCategoryModel.game_id == item['game_id']).first()

        if not categoryItemDB:
            categoryItem = PsnCategoryModel(
                category_url=item['category_url'],
                category_name=item['category_name'],
                game_id=item['game_id']
            )
            session.add(categoryItem)
            session.commit()

    def set_game_item(self, item):
        '''
        DB Update for Game Title
        '''
        gameItemDB = session.query(PsnGameModel).filter(
            PsnGameModel.game_id == item['game_id']).first()

        if not gameItemDB:
            gameItem = PsnGameModel(
                game_id=item['game_id'],
                game_title=item['game_title'],
                game_type=item['game_type'],
                game_url=item['game_url'],
                thumb_img_url=item['thumb_img_url'],
                api_url=item['api_url'],
                regular_price=item['regular_price'],
                display_price=item['display_price'],
                discount_message=item['discount_message'],
                plus_price=item['plus_price'],
                plus_exclusive_price=item['plus_exclusive_price']
            )
            session.add(gameItem)
            session.commit()

        else:
            gameItemDB.game_title = item['game_title']
            gameItemDB.game_type = item['game_type']
            gameItemDB.game_url = item['game_url']
            gameItemDB.thumb_img_url = item['thumb_img_url']
            gameItemDB.api_url = item['api_url']
            gameItemDB.regular_price = item['regular_price']
            gameItemDB.display_price = item['display_price']
            gameItemDB.discount_message = item['discount_message']
            gameItemDB.plus_price = item['plus_price']
            gameItemDB.plus_exclusive_price = item['plus_exclusive_price']

            session.commit()

    def set_price_history_item(self, item, api_data):
        '''
        DB Update for Game Price History
        '''

        if 'default_sku' in api_data:

            if api_data['default_sku']['display_price'] != 'Free':
                chartPrice = float(api_data['default_sku']['display_price'].replace(
                    "$", ""))
            else:
                chartPrice = -1

            chartBonusPrice = -1
            isBonusPrice = False

            if api_data['default_sku']['rewards']:
                if api_data['default_sku']['rewards'][0]['display_price'] != 'Free':
                    chartPrice = float(api_data['default_sku']['rewards'][0]['display_price'].replace(
                        "$", ""))
                else:
                    chartPrice = -1

                if 'bonus_display_price' in api_data['default_sku']['rewards'][0]:
                    chartBonusPrice = float(api_data['default_sku']['rewards'][0]['bonus_display_price'].replace(
                        "$", ""))
                    isBonusPrice = True

                if api_data['default_sku']['rewards'][0]['isPlus']:
                    if api_data['default_sku']['rewards'][0]['display_price'] == 'Free':
                        chartBonusPrice = 0
                    else:
                        chartBonusPrice = float(api_data['default_sku']['rewards'][0]['display_price'].replace(
                            "$", ""))
                    isBonusPrice = True
                    chartPrice = float(
                        api_data['default_sku']['display_price'].replace("$", ""))

            if chartBonusPrice == -1:
                chartBonusPrice = chartPrice

            date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

            chartPriceItem = [{
                'date': date,
                'price': str(chartPrice)
            }]
            chartBonusPriceItem = [{
                'date': date,
                'price': str(chartBonusPrice)
            }]

            # Game Price History Update #
            priceItemDB = session.query(PsnPriceHistoryModel).filter(
                PsnPriceHistoryModel.game_id == item['game_id']).first()

            if not priceItemDB:

                if chartPrice == -1:
                    chartPriceItem = []

                if chartBonusPrice == -1:
                    chartBonusPriceItem = chartPriceItem

                priceItem = PsnPriceHistoryModel(
                    game_id=item['game_id'],
                    game_title=item['game_title'],
                    chartPrices=chartPriceItem,
                    chartBonusPrices=chartBonusPriceItem,
                    highest_price=chartPrice,
                    lowest_price=chartPrice,
                    plus_lowest_price=chartBonusPrice
                )
                session.add(priceItem)
                session.commit()

            else:
                selectedPriceItem = session.query(PsnPriceHistoryModel).filter(
                    PsnPriceHistoryModel.game_id == item['game_id']).first()

                updatePrice = selectedPriceItem.chartPrices
                updateBonusPrice = selectedPriceItem.chartBonusPrices
                isPriceUpdate = False
                isBonusPriceUpdate = False

                if selectedPriceItem.chartPrices:
                    if chartPriceItem[0]['price'] != '-1' and selectedPriceItem.chartPrices[-1]['price'] != chartPriceItem[0]['price']:
                        updatePrice.append(chartPriceItem[0])
                        updateBonusPrice.append(chartBonusPriceItem[0])
                        isPriceUpdate = True

                if selectedPriceItem.chartBonusPrices:
                    if chartBonusPriceItem[0]['price'] != '-1' and selectedPriceItem.chartBonusPrices[-1]['price'] != chartBonusPriceItem[0]['price']:
                        if not isPriceUpdate:
                            updatePrice.append(chartPriceItem[0])
                            updateBonusPrice.append(chartBonusPriceItem[0])
                            isBonusPriceUpdate = True

                if selectedPriceItem.highest_price < chartPrice or selectedPriceItem.highest_price == -1:
                    selectedPriceItem.highest_price = chartPrice

                if selectedPriceItem.lowest_price > chartPrice or selectedPriceItem.lowest_price == -1:
                    if(chartPrice != -1):
                        selectedPriceItem.lowest_price = chartPrice

                if isBonusPrice:
                    if selectedPriceItem.plus_lowest_price > chartBonusPrice or selectedPriceItem.plus_lowest_price == -1:
                        selectedPriceItem.plus_lowest_price = chartBonusPrice

                session.commit()

                if isPriceUpdate or isBonusPriceUpdate:
                    selectedPriceItem.chartPrices = updatePrice
                    selectedPriceItem.chartBonusPrices = updateBonusPrice
                    session.commit()
