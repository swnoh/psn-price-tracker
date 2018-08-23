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


@app.route('/', methods=["GET"])
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

        category_url = DB.session.query(PsnCategoryModel).filter(
            PsnCategoryModel.category_name == category_name).first().category_url

        for eachitem in eachitems:
            selected_game_item.append(convertPsnGameModelToDict(eachitem))

        selected_item.append({'category_name': category_name[0],
                              'category_url': category_url,
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

    eachitems = DB.session.query(PsnGameModel).join(
        PsnCategoryModel, PsnGameModel.game_id == PsnCategoryModel.game_id).filter(PsnCategoryModel.category_name == category_name).all()

    for eachitem in eachitems:
        selected_game_item.append(convertPsnGameModelToDict(eachitem))

    selected_item = {'category_name': itemCategory[0].category_name,
                     'category_url': itemCategory[0].category_url,
                     'gameItem': selected_game_item
                     }
    return json.dumps(selected_item)


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


@app.route('/api/psn/price/update', methods=['GET'])
def temp():

    itemPrices = PsnPriceHistoryModel.query.all()

    for item in itemPrices:
        tmp_price = []

        for bprices in item.chartBonusPrices:
            tmp_price.append(float(bprices["price"]))

        if tmp_price:
            if len(tmp_price) < 5 and item.lowest_price == min(tmp_price):
                lowest = -1
            else:
                lowest = min(tmp_price)

        upItem = PsnPriceHistoryModel.query.filter(
            PsnPriceHistoryModel.game_id == item.game_id).first()

        upItem.plus_lowest_price = lowest
        DB.session.commit()

    return "json.dumps(selected_item)"


@app.route('/api/psn/banner', methods=["GET"])
def psn_banner():

    items = PsnBannerModel.query.first()
    print(type(PsnPriceHistoryModel.query.first().chartPrices[0]))
    print(PsnPriceHistoryModel.query.first().chartPrices[0]["date"])
    selected_item = {'bannerItems': items.banner_url}

    return json.dumps(selected_item)


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
    return render_template("404.html")


if __name__ == ('__main__'):
    app.run(debug=False, threaded=True)
