#import numpy as np

#import sqlalchemy
#from sqlalchemy.ext.automap import automap_base
#from sqlalchemy.orm import Session
#from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask import render_template

#################################################
# Database Setup
#################################################
# engine = create_engine("sqlite:///titanic.sqlite")

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(autoload_with=engine)

# # Save reference to the table
# Passenger = Base.classes.passenger

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"<h2><b>Welcome to the Film Info Dashboard!</b></h2><br/>"
        f"<h3><b>Group 5 :<br/>"
        f"Ana Gonzalez, Robert James, Roy Jiang, Stephanie Tran, Ivan Villa <br/>"
        f"<br/>"
        f"Here are the Available Routes:</b></h3><br/>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/dashboard</i><br/>"
        f"<br/></font size=5>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/genre</i><br/>"
        f"<br/></font size=5>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/ratings</i><br/>"
        f"<br/></font size=5>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/worldwide</i><br/>"
        f"<br/></font size=5>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/more</i><br/>"
        f"<b>enter text here:</b><br/>"
        f"<br/></font size=10>"
        f"<i>/api/v1.0/analysis</i><br/>"
        f"<b>enter text for 'analysis'category here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/<start>/<end></i><br/>"
        f"<br/></font size=5>"
    )

@app.route("/api/v1.0/dashboard")
def dashboard():
     print("Server received request for 'Dashboard' page...")
     #return "Welcome to our 'Dashboard' page!"
     return render_template('index.html')

@app.route("/api/v1.0/genre")
def genre():
     print("Server received request for 'genre' page...")
     return "Welcome to our 'genre' page!"

@app.route("/api/v1.0/ratings")
def ratings():
     print("Server received request for 'ratings' page...")
     return "Welcome to our 'ratings' page!"

@app.route("/api/v1.0/worldwide")
def worldwide():
     print("Server received request for 'worlwide' page...")
     return "Welcome to our 'worldwide' page!"

@app.route("/api/v1.0/more")
def more():
     print("Server received request for 'more' page...")
     return "Welcome to our 'more' page!"

@app.route("/api/v1.0/analysis")
def analysis():
     print("Server received request for 'analysis' page...")
     return "Welcome to our 'analysis' page!"

if __name__ == '__main__':
    app.run(debug=True)