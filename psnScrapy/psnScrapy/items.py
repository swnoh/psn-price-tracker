# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy.item import Item, Field


class PsnGameItem(Item):
    category_url = Field()
    category_name = Field()
    game_id = Field()
    game_title = Field()
    game_type = Field()
    game_url = Field()
    thumb_img_url = Field()
    api_url = Field()
    regular_price = Field()
    display_price = Field()
    discount_message = Field()
    plus_price = Field()
    plus_exclusive_price = Field()


class PsnCategoryItem(Item):
    category_url = Field()
    category_name = Field()
    gameItem = Field()


class PsnBannerItem(Item):
    bannerItems = Field()
