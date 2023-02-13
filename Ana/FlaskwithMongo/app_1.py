from flask import Flask, render_template
from flask import request, redirect, url_for
from bson import objectid
from pymongo import MongoClient
import os


app = Flask(__name__)

title = "TODO sample application using Flask and MongoDB"
heading = "TODO Reminder with Flask and MongoDB"

#host uri
client = MongoClient("mongodb://127.0.0.1:27017")
#Select the database
db = client.mymongodb
#Select the collection
todos = db.todo

def redirect_url():
    return request.args.get('next') or \
        request.referrer or \
            url_for('index')

@app.route("/list")
def lists ():
    #Display the all Tasks
    todos_1 = todos.find()
    a1="active"
    return render_template('index.html', a1=a1, t=title, todos=todos, h=heading)


@app.route("/")
@app.route("/uncompleted")
def tasks ():
    #Display the uncompleted tasks
    todos_1 = todos.find({"done":"no"})
    a2="active"
    return render_template('index.html', a2=a2, t=title, todos=todos, h=heading)

@app.route("/completed")
def completed ():
    #Display the completed tasks
    todos_1 = todos.find({"done":"yes"})
    a3="active"
    return render_template('index.html', a3=a3, t=title, todos=todos, h=heading)

@app.route("/done")
def done ():
    #Done-or-not ICON
    id-request.values.get("_id")
    tasks-todos.find({"_id":objectid})
    if(tasks[0]["done"]=="yes"):
        todos.update_many({"_id":objectid(id)}, {"$set": {"done": "no"}})
    else:
        todos.update_many({"_id":objectid(id)}, {"$set": {"done": "yes"}})
    redirect-redirect_url()

    return redirect(redirect)

@app.route("/action", methods=["POST"])
def action ():
    #adding a task
    name = request.values.get("name")
    desc = request.values.get("desc")
    date = request.value.get("date")
    pr = request.values.get("pr")
    todos.insert_many({"name":name, "desc":desc, "date":date, "pr":pr, "done":"no"})
    return redirect("/list")

@app.route("/remove")
def remove ():
    #deleting a task with various references
    key=request.values.get("_id")
    todos.remove({"_id":objectid(key)})
    return redirect("/")

@app.route("/update")
def update ():
    id = request.values.get("_id")
    task = todos.find({"_id":objectid(id)})
    return render_template('update.html', tasks=task, h=heading, t=title)

@app.route("/search", methods= ['GET'])
def search ():
    #searching a task with variouse references

    key = request.values.get("key")
    refer = request.get("refer")
    if(key=="_id"):
        todos_1 = todos.find({refer:objectid(key)})
    else:
        todos_1 = todos.find({refer:key})
    return render_template('searchlist.html', todos=todos_1, t=title, h=heading)

if __name__ == "__main__":
    app.run(debug=True)