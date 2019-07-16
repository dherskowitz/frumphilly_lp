import os
import re
import time
from dotenv import find_dotenv, load_dotenv
from flask import Flask, render_template, request, redirect, jsonify
from datetime import datetime
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from urllib.request import urlopen
import json

dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path)

app = Flask(__name__)

email_pattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"

scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/drive",
]
creds = ServiceAccountCredentials.from_json_keyfile_name("client_secret.json", scope)
client = gspread.authorize(creds)


@app.route("/")
def index():
    return render_template("index.html", currentYear=datetime.now().year)


@app.route("/signup", methods=["POST"])
def signup():
    email = request.form["email"]

    # get location from ip
    url = "http://ipinfo.io/json"
    response = urlopen(url)
    data = json.load(response)

    if email == "" or not re.match(email_pattern, email):
        response = {"response": "invalid_email"}
    else:
        # set variables for wrtiting to sheet
        signup_date = (
            f"{datetime.now().month}/{datetime.now().day}/{datetime.now().year}"
        )
        signup_timestamp = f"{datetime.now().time()}"
        signup_region = f"{data['region']}, {data['country']}"
        signup_ip = f"{data['ip']}"
        signup_data = [email, signup_date, signup_timestamp, signup_region, signup_ip]

        # write data to sheet
        sheet = client.open("Frum Philly LP Signups").sheet1
        list_of_hashes = sheet.get_all_records()
        sheet.append_row(signup_data)

        # set success response
        response = {"response": "success"}
    time.sleep(5)  # delay for frontend testing. remove for prod
    return jsonify(response)
