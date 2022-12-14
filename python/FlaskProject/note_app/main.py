from sqlite3 import Row
import sqlite3
from turtle import title
from flask import Flask , render_template , redirect,request
from flask_sqlalchemy import SQLAlchemy
import os


app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+ os.path.join(basedir , 'app.sqlite')
db = SQLAlchemy(app)



#Create model
class Note(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    title = db.Column(db.String(80))
    body=db.Column(db.Text)
        
        

@app.route("/")
def home():
    return render_template("home.html")



@app.route("/note/create",methods=["GET","POST"])
def create_note():
    if request.method == "GET" :
        return render_template("create_note.html")
    else:
        title=request.form["title"] 
        body =request.form["body"]
        
    note = Note(title=title , body=body)
    db.session.add(note)
    db.session.commit()

    return redirect("/note/create")





@app.route("/notes",methods=["GET","POST"])
def view_note():
    con = sqlite3.connect("app.sqlite")
    print("reading data...")
    cur = con.cursor()
    cur.execute("select * from Note")
    rows = cur.fetchall();
    print("Readed data: ",rows)
    return render_template("view_note.html",rows=rows)



if __name__ == "__main__":
    app.run(debug = True)
    