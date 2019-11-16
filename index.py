import os
import re
import time
import requests
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
json_creds = os.getenv("GOOGLE_SHEETS_CREDS_JSON")
creds_dict = json.loads(json_creds)
creds_dict["private_key"] = creds_dict["private_key"].replace("\\\\n", "\n")
# creds = ServiceAccountCredentials.from_json_keyfile_name("client_secret.json", scope)
creds = ServiceAccountCredentials.from_json_keyfile_dict(creds_dict, scope)


def get_client_ip(request):
    ip = request.headers.get("HTTP_CF_CONNECTING_IP")
    if ip is None:
        ip = request.headers.get("REMOTE_ADDR")
    return ip


@app.route("/")
def index():
    filename = os.path.join(app.static_folder, "content.json")
    with open(filename) as content:
        data = json.load(content)
    return render_template("index.html", currentYear=datetime.now().year, content=data)


@app.route("/signup", methods=["POST"])
def signup():
    client = gspread.authorize(creds)
    email = request.form["email"]

    # get user ip
    user_ip = request.headers.get("X-Forwarded-For", request.remote_addr)

    # Use my ip from env file for local testing
    # if user_ip == "127.0.0.1":
    #     user_ip = os.getenv("MY_IP")

    # get location from ip
    ip_url_base = "http://ipinfo.io/" + user_ip
    ip_url_prefs = "/geo?token=" + os.getenv("IPINFO_TOKEN")
    ip_url = ip_url_base + ip_url_prefs
    ip_response = requests.get(ip_url)
    ip_data = ip_response.json()

    if email == "" or not re.match(email_pattern, email):
        response = {"response": "invalid_email"}
    else:
        # set variables for wrtiting to sheet
        signup_date = (
            f"{datetime.now().month}/{datetime.now().day}/{datetime.now().year}"
        )
        signup_timestamp = f"{datetime.now().time()}"
        signup_region = f"{ip_data['city']}, {ip_data['region']}, {ip_data['country']}"
        signup_ip = f"{ip_data['ip']}"
        signup_data = [email, signup_date, signup_timestamp, signup_region, signup_ip]

        # write data to sheet
        sheet = client.open("Frum Philly LP Signups").sheet1
        list_of_hashes = sheet.get_all_records()
        sheet.append_row(signup_data)

        # set success response
        response = {"response": "success"}
    time.sleep(5)  # delay for frontend testing. remove for prod
    return jsonify(response)
