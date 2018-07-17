from flask import Flask, render_template, url_for, json
# from models import db
import os
from collections import defaultdict

app = Flask(__name__, template_folder="templates")

# POSTGRES = {
#     'user': 'postgres',
#     'pw': 'password',
#     'db': 'psn_titles',
#     'host': 'localhost',
#     'port': '5432',
# }

# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES
# db.init_app(app)


def psnjson():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "./", "psn.json")
    data = json.load(open(json_url))
    return data


def category():
    categoriedItems = {}
    categoriedItem = defaultdict(list)

    for category in psnjson():
        if categoriedItems['category_name'] == category.get('category_name')

    # for category in psnjson():
    #     if (category['top_category_name'] == category['category_name']):
    #     categoriedItems = category['category_name']
    return categoriedItems


def thumb_img():
    thumb = psnjson()[0]["title_items"]["thumb_img_url"].split(", ")
    return thumb


@app.route('/')
def home():
    print(category())
    return "json.dumps(category())"


if __name__ == ('__main__'):
    app.run(debug=True)
