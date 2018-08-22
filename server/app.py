from flask import Flask, render_template, url_for, json, request
import os
from collections import defaultdict
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__, static_folder="../static",
            template_folder="../static")
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://%s:%s@%s/%s' % (
    # ARGS.dbuser, ARGS.dbpass, ARGS.dbhost, ARGS.dbname
    os.environ['DBUSER'], os.environ['DBPASS'], os.environ['DBHOST'], os.environ['DBNAME']
)

# initialize the database connection
DB = SQLAlchemy(app)

# initialize database migration management
MIGRATE = Migrate(app, DB)


from models import *


def psnjson():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "./", "psn.json")
    data = json.load(open(json_url))
    return data


# def parsePrice():
#     SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(SITE_ROOT, "./", "psnHistory.json")
#     data = json.load(open(json_url))
#     for item in data:
#         chartPrices = item["chartPrices"][0].replace(
#             "formatData(", "").replace(")", "")
#         chartBonusPrices = item["chartBonusPrices"][0].replace(
#             "formatData(", "").replace(")", "")
#         item["chartPrices"] = json.loads(chartPrices)
#         item["chartBonusPrices"] = json.loads(chartBonusPrices)
#     return data


@app.route('/')
def home():
    return render_template("index.html")


@app.route('/api/psn', methods=["GET"])
def psn():
    itemCategory = PsnCategoryModel.query.all()
    selected_item = []

    for item in itemCategory:
        selected_item.append({'category_name': item.category_name,
                              'category_url': item.category_url,
                              'game_id': item.game_id
                              })
    return json.dumps(selected_item)


@app.route('/api/psn/category_quick')
def psn_category_quick():
    selected_item = []

    for category_name in DB.session.query(PsnCategoryModel.category_name).distinct():
        selected_game_item = []
        eachitems = DB.session.query(PsnGameModel).join(PsnCategoryModel, PsnGameModel.game_id == PsnCategoryModel.game_id).filter(
            PsnCategoryModel.category_name == category_name).order_by(PsnCategoryModel.id.asc()).limit(20).all()

        for eachitem in eachitems:
            selected_game_item.append(convertPsnGameModelToDict(eachitem))

        selected_item.append({'category_name': category_name,
                              'category_url': category_name,
                              'gameItem': selected_game_item
                              })

    return json.dumps(selected_item)


@app.route('/api/psn/category/all', methods=["GET"])
def psn_category_all():
    itemCategory = PsnCategoryModel.query.all()
    selected_item = []

    for item in itemCategory:
        selected_item.append({'category_name': item.category_name,
                              'category_url': item.category_url,
                              'gameItem': item.game_id
                              })
    return json.dumps(selected_item)


@app.route('/api/psn/category/<category_name>', methods=["GET"])
def psn_category_name(category_name):
    itemCategory = DB.session.query(PsnCategoryModel).filter(
        PsnCategoryModel.category_name == category_name).all()

    selected_game_item = []

    print(datetime.datetime.now())

    # for item in itemCategory:
    #     eachitem = DB.session.query(PsnGameModel).filter(
    #         PsnGameModel.game_id == item.game_id).first()
    #     if eachitem is not None:
    #         selected_game_item.append(convertPsnGameModelToDict(eachitem))

    eachitems = DB.session.query(PsnGameModel).join(
        PsnCategoryModel, PsnGameModel.game_id == PsnCategoryModel.game_id).filter(PsnCategoryModel.category_name == category_name).all()

    for eachitem in eachitems:
        selected_game_item.append(convertPsnGameModelToDict(eachitem))

    print(datetime.datetime.now())

    selected_item = {'category_name': itemCategory[0].category_name,
                     'category_url': itemCategory[0].category_url,
                     'gameItem': selected_game_item
                     }
    return json.dumps(selected_item)


@app.route('/api/psn/category/<int:item_qty>', methods=["GET"])
def psn_category_item():
    return json.dumps(psnjson())


@app.route('/api/psn/search', methods=["GET"])
def psn_search_title():
    searchword = request.args.get('q')

    gameItems = DB.session.query(PsnGameModel).filter(
        PsnGameModel.game_title.ilike('%' + searchword + '%')).limit(100).all()

    selected_game_item = []

    if searchword:
        for gameItem in gameItems:
            selected_game_item.append(convertPsnGameModelToDict(gameItem))

    selected_item = {'category_name': "",
                     'category_url': "",
                     'gameItem': selected_game_item
                     }
    return json.dumps(selected_item)


@app.route('/api/psn/price/<item_id>', methods=['GET'])
def view_psn_price_history(item_id):
    itemPrice = PsnPriceHistoryModel.query.filter(
        PsnPriceHistoryModel.game_id == item_id).first()

    if itemPrice is None:
        selected_item = {
            'game_id': "",
            'game_title': "",
            'chartBonusPrices': [],
            'chartPrices': [],
            'highest_price': None,
            'lowest_price': None,
            'plus_lowest_price': None
        }
    else:
        selected_item = {'game_id': itemPrice.game_id,
                         'game_title': itemPrice.game_title,
                         'chartPrices': itemPrice.chartPrices,
                         'chartBonusPrices': itemPrice.chartBonusPrices,
                         'highest_price': str(itemPrice.highest_price),
                         'lowest_price': str(itemPrice.lowest_price),
                         'plus_lowest_price': str(itemPrice.plus_lowest_price)
                         }
    return json.dumps(selected_item)


@app.route('/api/psn/banner', methods=["GET"])
def psn_banner():

    items = PsnBannerModel.query.first()
    print(type(PsnPriceHistoryModel.query.first().chartPrices[0]))
    print(PsnPriceHistoryModel.query.first().chartPrices[0]["date"])
    selected_item = {'bannerItems': items.banner_url}

    return json.dumps(selected_item)


#########################################################
#########################################################
###############                           ###############
###############      DB Insert Update     ###############
###############                           ###############
#########################################################
#########################################################


@app.route('/db/add/banner', methods=["GET"])
def banner_add():

    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "./", "psnbanner.json")
    data = json.load(open(json_url))

    items = data[0]["bannerItems"]

    bannerItem = PsnBannerModel(items)

    DB.session.add(bannerItem)
    DB.session.commit()

    return "Banners: SUCCESS TO INSERT TO DB"


@app.route('/db/add/init-quick-category', methods=["GET"])
def psn_init_category_quick():

    itemCategory = DB.session.query(PsnCategoryModel).all()

    for item in itemCategory:
        selected_item = []
        for idx, eachid in enumerate(item.game_id):
            eachitem = DB.session.query(PsnGameModel).filter(
                PsnGameModel.game_id == eachid).first()
            if idx < 20:
                if eachitem is not None:
                    selected_item.append(convertPsnGameModelToDict(eachitem))

        category_quick = PsnCategoryQuickModel(item.category_url, item.category_name,
                                               selected_item)
        DB.session.add(category_quick)
        DB.session.commit()
    return "json.dumps(selected_item)"


# @app.route('/db/add/init-category', methods=['GET'])
# def category_add():
#     SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(SITE_ROOT, "./", "psn_game.json")
#     data = json.load(open(json_url))
#     DB.session.query(PsnCategoryModel).delete()
#     DB.session.commit()

#     DB.session.query(PsnCategoryQuickModel).delete()
#     DB.session.commit()

#     temp_title = []
#     temp_category = {}
#     temp_category_quick = {}

#     for item in data:
#         category_url = item["category_url"]
#         category_name = item["category_name"]
#         game_items = item["gameItem"]
#         game_id = []
#         game_id_quick = []

#         for idx, game in enumerate(game_items):
#             game_id.append(game['game_id'])

#             if idx < 20:
#                 game_id_quick.append(game)

#         if category_name in temp_category:
#             temp_category[category_name]["game_id"] += game_id
#         else:
#             temp_title.append(category_name)
#             temp_category[category_name] = {
#                 "category_name": category_name, "category_url": category_url, "game_id": game_id}
#             temp_category_quick[category_name] = {
#                 "category_name": category_name, "category_url": category_url, "game_id": game_id_quick}

#     for title in temp_title:
#         category = PsnCategoryModel(temp_category[title]["category_url"], temp_category[title]["category_name"],
#                                     temp_category[title]["game_id"])

#         DB.session.add(category)
#         DB.session.commit()

#         category_quick = PsnCategoryQuickModel(temp_category_quick[title]["category_url"], temp_category_quick[title]["category_name"],
#                                                temp_category_quick[title]["game_id"])
#         DB.session.add(category_quick)
#         DB.session.commit()

#     return "Category: SUCCESS TO INSERT TO DB"


# @app.route('/db/add/init-category', methods=['GET'])
# def category_add():
#     SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(SITE_ROOT, "./", "psn_game.json")
#     data = json.load(open(json_url))
#     DB.session.query(PsnCategoryModel).delete()
#     DB.session.commit()

#     DB.session.query(PsnCategoryQuickModel).delete()
#     DB.session.commit()

#     for item in data:
#         category_url = item["category_url"]
#         category_name = item["category_name"]
#         game_items = item["gameItem"]
#         game_id_quick = []

#         for idx, game in enumerate(game_items):
#             category = PsnCategoryModel(
#                 category_url, category_name, game['game_id'])

#             DB.session.add(category)
#             DB.session.commit()

#             if idx < 20:
#                 game_id_quick.append(game)

#         category_quick = PsnCategoryQuickModel(category_url, category_name,
#                                                game_id_quick)
#         DB.session.add(category_quick)
#         DB.session.commit()

#     return "Category: SUCCESS TO INSERT TO DB"


@app.route('/db/add/init-game', methods=['GET'])
def game_add():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "./", "psnall.json")
    data = json.load(open(json_url))
    for category_item in data:
        for item in category_item["gameItem"]:
            game_id = item["game_id"]
            game_title = item["game_title"]
            game_type = item["game_type"]
            game_url = item["game_url"]
            thumb_img_url = item["thumb_img_url"]
            api_url = item["api_url"]
            regular_price = item["regular_price"]
            display_price = item["display_price"]
            discount_message = item["discount_message"]
            plus_price = item["plus_price"]
            plus_exclusive_price = item["plus_exclusive_price"]

            game = PsnGameModel(game_id,
                                game_title,
                                game_type,
                                game_url,
                                thumb_img_url,
                                api_url,
                                regular_price,
                                display_price,
                                discount_message,
                                plus_price,
                                plus_exclusive_price)

            duplicatePsn = DB.session.query(
                PsnGameModel).filter(PsnGameModel.game_id == item["game_id"]).first()

            if not duplicatePsn:
                DB.session.add(game)
                DB.session.commit()
    return "Game: SUCCESS TO INSERT TO DB"


@app.route('/db/add/init-price', methods=['GET'])
def price_add():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "./", "psnhistory.json")
    data = json.load(open(json_url))
    for item in data:
        chartPrices = item["chartPrices"][0].replace(
            "formatData(", "").replace(")", "")
        chartBonusPrices = item["chartBonusPrices"][0].replace(
            "formatData(", "").replace(")", "")
        item["chartPrices"] = json.loads(chartPrices)
        item["chartBonusPrices"] = json.loads(chartBonusPrices)

        chartPrices = item["chartPrices"]
        chartBonusPrices = item["chartBonusPrices"]

        price_list = []
        bonus_price_list = []
        plus_low_price = []

        high_price = None
        low_price = None
        plus_low_price = None

        for chartPrice in chartPrices:
            price_list.append(float(chartPrice["price"]))

        for chartBonusPrice in chartBonusPrices:
            bonus_price_list.append(float(chartBonusPrice["price"]))

        if price_list:
            high_price = max(price_list)
            low_price = min(price_list)
        if bonus_price_list:
            plus_low_price = min(bonus_price_list)

        duplicatePsn = DB.session.query(
            PsnPriceHistoryModel).filter(PsnPriceHistoryModel.game_id == item["game_id"]).first()

        if not duplicatePsn:
            price = PsnPriceHistoryModel(item["game_id"], item["game_title"],
                                         chartPrices, chartBonusPrices,
                                         high_price, low_price, plus_low_price)

            DB.session.add(price)
            DB.session.commit()

    return "SUCCESS TO INSERT TO DB"


def convertPsnGameModelToDict(eachitem):
    return {
        'game_id': eachitem.game_id,
        'game_title': eachitem.game_title,
        'game_type': eachitem.game_type,
        'game_url': eachitem.game_url,
        'thumb_img_url': eachitem.thumb_img_url,
        'api_url': eachitem.api_url,
        'regular_price': eachitem.regular_price,
        'display_price': eachitem.display_price,
        'discount_message': eachitem.discount_message,
        'plus_price': eachitem.plus_price,
        'plus_exclusive_price': eachitem.plus_exclusive_price
    }


@app.errorhandler(404)
def page_not_found(error):
    return 'page_not_found'


if __name__ == ('__main__'):
    app.run(debug=False, threaded=True)
