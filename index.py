import os

from dotenv import find_dotenv, load_dotenv
from flask import Flask, render_template
from datetime import datetime

dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path)

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", currentYear=datetime.now().year)
