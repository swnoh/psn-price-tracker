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


class PsnscrapyPipeline(object):

    # Price history update!!!
    # def process_item(self, item, spider):
    #     priceItemDB = session.query(PsnPriceHistoryModel).filter(
    #         PsnPriceHistoryModel.game_id == item['game_id']).first()

    #     chartPrices = item["chartPrices"][0].replace(
    #         "formatData(", "").replace(")", "")
    #     chartBonusPrices = item["chartBonusPrices"][0].replace(
    #         "formatData(", "").replace(")", "")
    #     item["chartPrices"] = json.loads(chartPrices)
    #     item["chartBonusPrices"] = json.loads(chartBonusPrices)

    #     chartPrices = item["chartPrices"]
    #     chartBonusPrices = item["chartBonusPrices"]

    #     price_list = []
    #     bonus_price_list = []
    #     plus_low_price = []

    #     high_price = None
    #     low_price = None
    #     plus_low_price = None

    #     for chartPrice in chartPrices:
    #         price_list.append(float(chartPrice["price"]))

    #     for chartBonusPrice in chartBonusPrices:
    #         bonus_price_list.append(float(chartBonusPrice["price"]))

    #     if price_list:
    #         high_price = max(price_list)
    #         low_price = min(price_list)
    #     if bonus_price_list:
    #         plus_low_price = min(bonus_price_list)

    #     if priceItemDB:

    #         priceItemDB.chartPrices = chartPrices
    #         priceItemDB.chartBonusPrices = chartBonusPrices
    #         priceItemDB.highest_price = high_price
    #         priceItemDB.lowest_price = low_price
    #         priceItemDB.plus_lowest_price = plus_low_price

    #         session.commit()
    #     return item

    def process_item(self, item, spider):

            # # Banner #
            # session.query(PsnBannerModel).delete()
            # session.commit()

            # bannerItem = PsnBannerModel(banner_url=item['bannerItems'])
            # session.add(bannerItem)
            # session.commit()

            # return

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

        response = requests.get(item['api_url'])
        api_data = response.json()

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
                chartBonusPrice == float(api_data['default_sku']['rewards'][0]['display_price'].replace(
                    "$", ""))
                isBonusPrice = True
                chartPrice = float(
                    api_data['default_sku']['display_price'].replace("$", ""))

        print(item['category_name'])
        print(item['game_id'])

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

            if chartPriceItem[0]['price'] != '-1' and selectedPriceItem.chartPrices[-1]['price'] != chartPriceItem[0]['price']:
                updatePrice.append(chartPriceItem[0])
                updateBonusPrice.append(chartBonusPriceItem[0])
                isPriceUpdate = True

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

        return
