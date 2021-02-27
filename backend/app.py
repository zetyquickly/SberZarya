import os
import pandas as pd
import json
import csv
from random import randint
from flask import Request
from flask import Flask

app = Flask(__name__)

SEC_CHKPT = 30


@app.route('/write_brushing/<uid>', methods=['POST'])
def write_brushing(uid):
    request_data = Request.get_json()
    local_datetime = request_data["datetime"]
    checkpoints = request_data["checkpoints"]
    has_tongue = request_data["has_tongue"]
    if not os.path.exists(f"user_db/{uid}.csv"):
        user_data = pd.DataFrame({
            "local_datetime": [local_datetime], 
            "duration": [checkpoints * SEC_CHKPT],
            "has_tongue": [has_tongue],
        })
    else:
        user_data = pd.read_csv(f"user_db/{uid}.csv")
        user_data.append({
            "local_datetime": local_datetime, 
            "duration": checkpoints * SEC_CHKPT,
            "has_tongue": has_tongue,
        })
    user_data.to_csv(f"user_db/{uid}.csv")
    return  # TODO: {response}


@app.route('/has_new_achievements/<uid>', methods=['GET'])


# VOVA
@app.route('/available_achievements/<uid>', methods=['GET'])
# вернуть json по всем ачивментам юзера
def get_achievements(uid):
    with open(f'user_db/{uid}_a.json', 'r', encoding='utf-8') as ach_json:
        ach_str = ''.join(ach_json.readlines())
        ach = json.dumps(json.loads(ach_str))

    return ach


@app.route('/history/<uid>', methods=['GET'])
# вернуть последние 10 чисток в json
def get_history(uid):
    with open(f'user_db/{uid}.csv', 'r') as history_csv:
        reader = list(csv.reader(history_csv, delimiter=','))
        titles = reader[0]
        history = reader[1:11]
        history_ten = []

        for item in history:
            history_ten.append({titles[0]: item[0],
                                titles[1]: item[1],
                                titles[2]: item[2]})
        history_ten = json.dumps(history_ten)

    return history_ten


@app.route('/recommendation/', methods=['GET'])
# сэмплировать рандомную рекомендацию из recommendations.json
# зачем нам uid тут?
def get_recommendation():
    with open('assets/recommendations.json', 'r', encoding='utf-8') as rec_json:
        recs_str = ''.join(rec_json.readlines())
        rec_key = randint(1, len(json.loads(recs_str)))
        rec = json.dumps(json.loads(recs_str)[str(rec_key)])

    return rec

