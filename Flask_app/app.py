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
        f"<b>For data files in a json format for our genre vizualizations,  please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/genre</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For a json format of our international movies vizualizations, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/international_movies</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For the data files in a json format of our top films table, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/movies_datatables</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For the data files in a json format of our production vizualizations, please copy and paste the following endpoint to your localhost link:</b><br/>"
        f"<br/><font size=5>"
        f"<i><u>/api/v1.0/production</i></u><br/>"
        f"<br/></font size=5>"
        f"<b>For the data files in a json format of our taglines, please copy and paste the following endpoint to your localhost link:</b><br/>"
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
     #return "Welcome to our 'Dashboard' page!" 
     return render_template('flask_index.html')#, pass MongoDB query variable to produce appropriate json data)


@app.route("/api/v1.0/genre")
def genre():
     print("Server received request for 'genre' page...")
     return render_template('flask_genre.html')

@app.route("/api/v1.0/international_movies_json")
def int_movie():
     print("Server received request for 'international movies data' page...")
     for int_movies in dict3:
          print(int_movies)

@app.route("/api/v1.0/us_movies_json")
def us_movies():
     print("Server received request for 'us_movie' data page...")
     for us_movie in dict6:
          print(us_movie)

@app.route("/api/v1.0/top_10_json")
def top_10():
     print("Server received request for 'top_10 data' page...")
     for top_10 in dict5:
          print(top_10)     

@app.route("/api/v1.0/movies_datatables")
def ratings():
     print("Server received request for 'movies_datatbls' page...")
     return render_template('film_table.html')

@app.route("/api/v1.0/datatables_json")
def movie_data():
     print("Server received request for 'movies_datatbls data' page...")
     for tables in dict1:
          print(tables)

@app.route("/api/v1.0/production")
def worldwide():
     print("Server received request for 'production' page...")
     for atwwbx in dict2:
          print(atwwbx)
     for movie_prdctn in dict4:
          print(movie_prdctn)
     return render_template('flask_countries.html')

@app.route("/api/v1.0/ww_boxoffice")
def ww_boxoffice_data():
     print("Server received request for 'production' page...")
     for atwwbx in dict2:
          print(atwwbx)

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