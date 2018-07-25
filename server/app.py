from flask import Flask, render_template, url_for, json
import os
from collections import defaultdict
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
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


def parsePrice():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "./", "psnHistory.json")
    data = json.load(open(json_url))
    for item in data:
        chartPrices = item["chartPrices"][0].replace(
            "formatData(", "").replace(")", "")
        chartBonusPrices = item["chartBonusPrices"][0].replace(
            "formatData(", "").replace(")", "")
        item["chartPrices"] = json.loads(chartPrices)
        item["chartBonusPrices"] = json.loads(chartBonusPrices)
    return data


@app.route('/')
def home():
    return render_template("/static/index.html")


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


@app.route('/api/psn/category/all', methods=["GET"])
def psn_category_all():
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
    print("Received Request!!!!")
    itemCategory = PsnCategoryQuickModel.query.all()
    selected_item = []

    for item in itemCategory:
        selected_item.append({'category_name': item.category_name,
                              'category_url': item.category_url,
                              'gameItem': item.gameItem
                              })
    return json.dumps(selected_item)


@app.route('/api/psn/category/<category_name>', methods=["GET"])
def psn_category_name(category_name):
    itemCategory = DB.session.query(PsnCategoryModel).filter(
        PsnCategoryModel.category_name == category_name)
    selected_item = []

    for item in itemCategory:
        selected_item.append({'category_name': item.category_name,
                              'category_url': item.category_url,
                              'game_id': item.game_id
                              })
    return json.dumps(selected_item)


@app.route('/api/psn/category/<int:item_qty>', methods=["GET"])
def psn_category_item():
    return json.dumps(psnjson())


# @app.route('/api/psn/category/game/all', methods=["GET"])
# def psn_category_game_all():
#     itemCategory = PsnCategoryModel.query.all()
#     selected_category_item = []

#     games = PsnGameModel.query.all()
#     selected_game_item = []

#     for category_item in itemCategory:
#         selected_game_item = []

#         for category_game_id in category_item.game_id:
#             for game in games:
#                 if category_game_id == game.game_id:
#                     selected_game_item.append({'game_id': game.game_id,
#                                                'game_title': game.game_title,
#                                                'game_type': game.game_type,
#                                                'game_url': game.game_url,
#                                                'thumb_img_url': game.thumb_img_url,
#                                                'api_url': game.api_url,
#                                                'regular_price': game.regular_price,
#                                                'display_price': game.display_price,
#                                                'discount_message': game.discount_message,
#                                                'plus_price': game.plus_price,
#                                                'plus_exclusive_price': game.plus_exclusive_price
#                                                })

#         selected_category_item.append({'category_name': category_item.category_name,
#                                        'category_url': category_item.category_url,
#                                        'gameItem': selected_game_item
#                                        })
#     return json.dumps(selected_category_item)


@app.route('/api/psn/price/<item_id>', methods=["GET"])
def psn_price_history(item_id):
    prices = (parsePrice())
    for item in prices:
        if item['game_id'] == item_id:
            return json.dumps(item)
    empty_item = {
        "chartBonusPrices": [],
        "chartPrices": [],
        "game_id": "",
        "game_title": ""}

    return json.dumps(empty_item)


@app.route('/db/psn/price/<item_id>', methods=['GET'])
def view_psn_price_history(item_id):
    itemPrice = PsnPriceHistoryModel.query.all()

    for item in itemPrice:
        if item.game_id == item_id:
            selected_item = {'game_id': item.game_id,
                             'game_title': item.game_title,
                             'chartPrices': item.chartPrices,
                             'chartBonusPrices': item.chartBonusPrices,
                             'highest_price': str(item.highest_price),
                             'lowest_price': str(item.lowest_price),
                             'plus_lowest_price': str(item.plus_lowest_price)
                             }
            return json.dumps(selected_item)

    empty_item = {
        'game_id': "",
        'game_title': "",
        'chartBonusPrices': [],
        'chartPrices': [],
        'highest_price': None,
        'lowest_price': None,
        'plus_lowest_price': None
    }
    return json.dumps(empty_item)


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
                    selected_item.append({
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
                        # 'highest_price': str(eachitem.highest_price),
                        # 'lowest_price': str(eachitem.lowest_price),
                        # 'plus_lowest_price': str(eachitem.plus_lowest_price)
                    })

        category_quick = PsnCategoryQuickModel(item.category_url, item.category_name,
                                               selected_item)
        DB.session.add(category_quick)
        DB.session.commit()
    return "json.dumps(selected_item)"


@app.route('/db/add/init-category', methods=['GET'])
def category_add():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "./", "psncategory.json")
    data = json.load(open(json_url))
    for item in data:
        category_url = item["category_url"]
        category_name = item["category_name"]
        game_items = item["gameItem"]
        game_item = []
        game_id = []

        for idx, game in enumerate(game_items):
            game_id.append(game['game_id'])

            if idx < 20:
                game_item.append(game)

        category = PsnCategoryModel(category_url, category_name,
                                    game_id)

        DB.session.add(category)
        DB.session.commit()

        category_quick = PsnCategoryQuickModel(category_url, category_name,
                                               game_item)
        DB.session.add(category_quick)
        DB.session.commit()

    return "Category: SUCCESS TO INSERT TO DB"


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
            # highest_price = updateprice_legacy(item["game_id"])[0]
            # lowest_price = updateprice_legacy(item["game_id"])[1]
            # plus_lowest_price = updateprice_legacy(item["game_id"])[2]

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
            # highest_price,
            # lowest_price,
            # plus_lowest_price)
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
        high_price = 0
        low_price = 10000000

        plus_high_price = 0
        plus_low_price = 10000000

        for chartPrice in chartPrices:
            if high_price < float(chartPrice["price"]):
                high_price = float(chartPrice["price"])
            if low_price > float(chartPrice["price"]):
                low_price = float(chartPrice["price"])

        for chartBonusPrice in chartBonusPrices:
            if plus_high_price < float(chartBonusPrice["price"]):
                plus_high_price = float(chartBonusPrice["price"])
            if plus_low_price > float(chartBonusPrice["price"]):
                plus_low_price = float(chartBonusPrice["price"])

        duplicatePsn = DB.session.query(
            PsnPriceHistoryModel).filter_by(game_id=item["game_id"]).first()

        if not duplicatePsn:
            price = PsnPriceHistoryModel(item["game_id"], item["game_title"],
                                         chartPrices, chartBonusPrices,
                                         high_price, low_price, plus_low_price)

            DB.session.add(price)
            DB.session.commit()

    return "SUCCESS TO INSERT TO DB"


@app.route('/simple/compare')
def duplicate():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "./", "psnhistory.json")
    data = json.load(open(json_url))
    tempdict = []
    for item in data:
        if item["game_id"] not in tempdict:
            tempdict.append(item["game_id"])
        else:
            print(item["game_id"])
    return "Done"


@app.route('/simple/updateprice')
def duplicate_updateprice():
    tempdict = []
    for item in data:
        if item["game_id"] not in tempdict:
            tempdict.append(item["game_id"])
        else:
            print(item["game_id"])
    return "Done"


def updateprice_legacy(game_id):

    itemPrice = DB.session.query(PsnPriceHistoryModel).filter(
        PsnPriceHistoryModel.game_id == game_id).first()

    high_price = 0
    low_price = 10000000

    plus_high_price = 0
    plus_low_price = 10000000

    if itemPrice is not None:

        for chartPrice in itemPrice.chartPrices:
            if high_price < float(chartPrice["price"]):
                high_price = float(chartPrice["price"])
            if low_price > float(chartPrice["price"]):
                low_price = float(chartPrice["price"])

        for chartBonusPrice in itemPrice.chartBonusPrices:
            if plus_high_price < float(chartBonusPrice["price"]):
                plus_high_price = float(chartBonusPrice["price"])
            if plus_low_price > float(chartBonusPrice["price"]):
                plus_low_price = float(chartBonusPrice["price"])

        price_legacy = []
        price_legacy.extend((high_price, low_price, plus_low_price))
        return price_legacy

    return [None, None, None]


@app.errorhandler(404)
def page_not_found(error):
    return 'page_not_found'


if __name__ == ('__main__'):
    app.run(debug=False, threaded=True)
