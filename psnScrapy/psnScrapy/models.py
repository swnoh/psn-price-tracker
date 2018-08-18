# from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import Column, String, Integer, JSON
from sqlalchemy.ext.declarative import declarative_base

base = declarative_base()

# base.metadata.create_all(db)


class PsnBannerModel(base):
    __tablename__ = 'psn_banner'

    id = Column(Integer, primary_key=True)
    banner_url = Column(JSON, nullable=False)


class PsnGameModel(base):
    __tablename__ = 'psn_game'

    id = Column(Integer, primary_key=True)
    game_id = Column(String, unique=True)
    game_title = Column(String)
    game_type = Column(String)
    game_url = Column(String)
    thumb_img_url = Column(String)
    api_url = Column(String)
    regular_price = Column(String)
    display_price = Column(String)
    discount_message = Column(String)
    plus_price = Column(String)
    plus_exclusive_price = Column(String)


class PsnCategoryModel(base):
    __tablename__ = 'psn_category'

    id = Column(Integer, primary_key=True)
    category_url = Column(String)
    category_name = Column(String)
    game_id = Column(String)
