from flask import Flask, render_template, url_for
from flask.ext.navigation import Navigation

app = Flask(__name__)
nav = Navigation(app)

# with app.test_request_context():
    # url_for('static', filename='/css/bootstrap.min.css')

# https://flask-navigation.readthedocs.io/en/latest/
nav.Bar('top', [
    nav.Item('Home', 'index'),
    nav.Item('Wine List', 'table'),
    # nav.Item('Latest News', 'news', {'page': 1}),
])


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/table')
def table():
    return render_template('table.html')

# @app.route('/news/<int:page>')
# def news(page):
#     return render_template('news.html', page=page)
