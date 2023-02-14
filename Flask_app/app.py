#import numpy as np

#import sqlalchemy
#from sqlalchemy.ext.automap import automap_base
#from sqlalchemy.orm import Session
#from sqlalchemy import create_engine, func

from flask import Flask, jsonify, request
from flask import render_template, url_for, redirect
from flask_mongoengine import MongoEngine
from flask_restful import Resource, Api, reqparse, abort, fields, marshal_with
import pymongo
from pymongo import MongoClient


#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Database Setup (importing MongoDB data)
#################################################
client = pymongo.MongoClient('mongodb://localhost:27017/')

db = client['film_db']
col1 = db['top_748']
col2 = db['atww_boxoffice']
col3 = db['international_movies']
col4 = db['movie_prdctn_cntry']
col5 = db['top10_boxoffice']
col6 = db['us_movies_2000']

dict1 = col1.find()
dict2 = col2.find()
dict3 = col3.find()
dict4 = col4.find()
dict5 = col5.find()
dict6 = col6.find()


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"<!DOCTYPE html>"
        f"<h2><b>Welcome to the Film Info Dashboard API Routes!</b></h2><br/>"
        f"<h3><b>Group 5 :<br/>"
        f"Ana Gonzalez, Robert James, Roy Jiang, Stephanie Tran, Ivan Villa <br/>"
        f"<br/>"
        f"Here are the Available Routes:</b></h3><br/>"
        f"<b>For a link to our home page, follow:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/dashboard</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For our genre vizualizations, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/genre</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For a json format of our international movies vizualizations, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/international_movies_json</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For a json format of our US movies vizualizations, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/us_movies_json</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For a json format of our Top 10 movies data, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/top_10_json</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For the data files in a json format of our top films table, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/movies_datatables</i></u><br/>"
     
        f"<br/></font size=5>"
        f"<b>For our production vizualizations, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/production</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For a json format of our worldwide box office data, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/ww_boxoffice_json</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For  our taglines, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/taglines</i></u><br/>"
        f"<b></b><br/>"
        f"<br/></font size=5>"
        f"<b>For the link to our GitHub repo, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<i><u>/api/v1.0/github</i></u><br/>"
        f"<br/><font size=5>"
    )

@app.route("/api/v1.0/dashboard")
def dashboard():
     print("Server received request for 'Dashboard' page...")
     return render_template('flask_index.html')


@app.route("/api/v1.0/genre")
def genre():
     print("Server received request for 'genre' page...")
     return render_template('flask_genre.html')

@app.route("/api/v1.0/international_movies_json")
def int_movie():
     print("Server received request for 'international movies data' page...")
     int_mv_list = []
     for int_movies in dict3:
          int_movies['_id'] = str(int_movies['_id'])
          int_mv_list.append(int_movies)
          print(int_movies)
     return jsonify(int_mv_list)

@app.route("/api/v1.0/us_movies_json")
def us_movies():
     print("Server received request for 'us_movie' data page...")
     us_mv_list = []
     for us_movies in dict6:
          us_movies['_id'] = str(us_movies['_id'])
          us_mv_list.append(us_movies)
          print(us_movies)
     return jsonify(us_mv_list)

@app.route("/api/v1.0/top_10_json")
def top_10():
     print("Server received request for 'top_10 data' page...")
     top10_list = []
     for top10 in dict5:
          top10['_id'] = str(top10['_id'])
          top10_list.append(top10)
          print(top10)
     return jsonify(top10_list)     

@app.route("/api/v1.0/movies_datatables")
def ratings():
     print("Server received request for 'movies_datatbls' page...")
     return render_template('film_table.html')

@app.route("/api/v1.0/production")
def worldwide():
     return render_template('flask_countries.html')

@app.route("/api/v1.0/ww_boxoffice_json")
def ww_boxoffice_data():
     print("Server received request for 'production' page...")
     ww_mv_list = []
     for ww_movies in dict2:
          ww_movies['_id'] = str(ww_movies['_id'])
          ww_mv_list.append(ww_movies)
          print(ww_movies)
     return jsonify(ww_mv_list)

@app.route("/api/v1.0/movie_production_json")
def production():
     print("Server received request for 'movie_production data' page...")
     production_list = []
     for production in dict4:
          production['_id'] = str(production['_id'])
          production_list.append(production)
          print(production)
     return jsonify(production_list)

@app.route("/api/v1.0/taglines")
def more():
     print("Server received request for 'more' page...")
     return render_template('taglines.html')

@app.route("/api/v1.0/github")
def analysis():
     print("Server received request for 'analysis' page...")
     return render_template('github.html')

if __name__ == '__main__':
    app.run(debug=True)