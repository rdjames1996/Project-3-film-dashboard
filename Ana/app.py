import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

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
        f"Ana Gonzalez, Robert James"
        f"Roy Jiang"
        f"Stephanie Tran"
        f"Ivan Villa <br/>"
        f"<br/>"
        f"Here are the Available Routes:</b></h3><br/>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/precipitation</i><br/>"
        f"<br/></font size=5>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/stations</i><br/>"
        f"<br/></font size=5>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/tobs</i><br/>"
        f"<br/></font size=5>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/<start></i><br/>"
        f"<br/></font size=5>"
        f"<b>enter text here:</b><br/>"
        f"<br/><font size=5>"
        f"<i>/api/v1.0/<start>/<end></i><br/>"
        f"<br/></font size=5>"
    )

@app.route("/dashboard")
def dashboard():
    return "This is a Test of our page"

if __name__ == '__main__':
    app.run(debug=True)