# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import psycopg2

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

db_string = "postgres://manager:supersecretpass@localhost/test"

db = create_engine(db_string)

Session = sessionmaker(db)
session = Session()


from psnScrapy.models import *


class PsnscrapyPipeline(object):

    def __init__(self):
        self.ids_seen = set()

    def process_item(self, item, spider):

        # # Banner #
        # bannerItem = PsnBannerModel(banner_url=item['bannerItems'])
        # session.add(bannerItem)
        # session.commit()

        if item['game_id'] in self.ids_seen:
            raise DropItem("Repeated items found: %s" % item)
        else:
            self.ids_seen.add(item['game_id'])

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
                selectedGame = session.query(PsnGameModel).filter(
                    PsnGameModel.game_id == item['game_id']).one()

                selectedGame.game_title = item['game_title']
                selectedGame.game_type = item['game_type']
                selectedGame.game_url = item['game_url']
                selectedGame.thumb_img_url = item['thumb_img_url']
                selectedGame.api_url = item['api_url']
                selectedGame.regular_price = item['regular_price']
                selectedGame.display_price = item['display_price']
                selectedGame.discount_message = item['discount_message']
                selectedGame.plus_price = item['plus_price']
                selectedGame.plus_exclusive_price = item['plus_exclusive_price']

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

            return item

    # def process_item(self, item, spider):
    #     return item
