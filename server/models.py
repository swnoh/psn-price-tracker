from app import DB
from sqlalchemy.dialects.postgresql import JSON


class PsnPriceHistoryModel(DB.Model):
    """model for one of your table"""
    __tablename__ = 'psn_price_history'

    id = DB.Column(DB.Integer, primary_key=True)
    game_id = DB.Column(DB.String(), unique=True)
    game_title = DB.Column(DB.String())
    chartPrices = DB.Column(JSON)
    chartBonusPrices = DB.Column(JSON)
    highest_price = DB.Column(DB.Float())
    lowest_price = DB.Column(DB.Float())
    plus_lowest_price = DB.Column(DB.Float())

    def __init__(self, game_id=None,
                 game_title=None,
                 chartPrices=None,
                 chartBonusPrices=None,
                 highest_price=None,
                 lowest_price=None,
                 plus_lowest_price=None):
        self.game_id = game_id
        self.game_title = game_title
        self.chartPrices = chartPrices
        self.chartBonusPrices = chartBonusPrices
        self.highest_price = highest_price,
        self.lowest_price = lowest_price,
        self.plus_lowest_price = plus_lowest_price

    def __repr__(self):
        return '<PsnPriceHistoryModel: game_id {}>'.format(self.game_id)


class PsnCategoryModel(DB.Model):
    __tablename__ = 'psn_category'

    id = DB.Column(DB.Integer, primary_key=True)
    category_url = DB.Column(DB.String())
    category_name = DB.Column(DB.String())
    game_id = DB.Column(DB.String())

    def __init__(self, category_url, category_name, game_id):
        self.category_url = category_url
        self.category_name = category_name
        self.game_id = game_id

    def __repr__(self):
        return '<id {}>'.format(self.id)


class PsnCategoryQuickModel(DB.Model):
    __tablename__ = 'psn_category_quick'

    id = DB.Column(DB.Integer, primary_key=True)
    category_url = DB.Column(DB.String())
    category_name = DB.Column(DB.String())
    gameItem = DB.Column(DB.JSON, nullable=False)

    def __init__(self, category_url, category_name, gameItem):
        self.category_url = category_url
        self.category_name = category_name
        self.gameItem = gameItem


class PsnBannerModel(DB.Model):
    __tablename__ = 'psn_banner'

    id = DB.Column(DB.Integer, primary_key=True)
    banner_url = DB.Column(DB.JSON, nullable=False)

    def __init__(self, banner_url):
        self.banner_url = banner_url


class PsnGameModel(DB.Model):
    """model for one of your table"""
    __tablename__ = 'psn_game'

    id = DB.Column(DB.Integer, primary_key=True)
    game_id = DB.Column(DB.String(), unique=True)
    game_title = DB.Column(DB.String())
    game_type = DB.Column(DB.String())
    game_url = DB.Column(DB.String())
    thumb_img_url = DB.Column(DB.String())
    api_url = DB.Column(DB.String())
    regular_price = DB.Column(DB.String())
    display_price = DB.Column(DB.String())
    discount_message = DB.Column(DB.String())
    plus_price = DB.Column(DB.String())
    plus_exclusive_price = DB.Column(DB.String())

    def __init__(
        self,
        game_id,
        game_title,
        game_type,
        game_url,
        thumb_img_url,
        api_url,
        regular_price,
        display_price,
        discount_message,
        plus_price,
        plus_exclusive_price
    ):
        self.game_id = game_id
        self.game_title = game_title
        self.game_type = game_type
        self.game_url = game_url
        self.thumb_img_url = thumb_img_url
        self.api_url = api_url
        self.regular_price = regular_price
        self.display_price = display_price
        self.discount_message = discount_message
        self.plus_price = plus_price
        self.plus_exclusive_price = plus_exclusive_price

    def __repr__(self):
        return '<PsnGameModel: game_id {}>'.format(self.game_id)
