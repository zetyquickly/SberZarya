import os
import pandas as pd
from flask import Flask
app = Flask(__name__)

SEC_CHKPT = 30

@app.route('/write_brushing/<uid>', methods=['POST'])
def write_brushing():
    request_data = request.get_json()
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
    return # TODO: {response}

@app.route('/has_new_achievements/<uid>', methods=['GET'])

# VOVA
@app.route('/available_achievments/<uid>', methods=['GET'])
# вернуть json по всем ачивментам юзера

@app.route('/history/<uid>', methods=['GET'])
# вернуть последние 10 чисток в json

@app.route('/recommendation/<uid>', methods=['GET'])
# сэмплировать рандомную рекомендацию из recommendations.json 