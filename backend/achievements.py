import pandas as pd
from datetime import time as time_constr

def welcome(user_ach, user_data):
    if user_ach.empty and user_data.shape[0] == 1:
        return True
    else:
        return False

def lunch_brushing(user_ach, user_data):
    fun_name = lunch_brushing.__name__
    this_ach_df = user_ach[user_ach["achievement_id"] == fun_name].sort_values(by=["local_datetime"])
    if not this_ach_df.empty:
        last_datetime = this_ach_df.iloc[-1].local_datetime
    else:
        last_datetime = pd.Timestamp.min
    data_counts = user_data[user_data["local_datetime"] >= last_datetime]
    count_rows = data_counts[
        (data_counts["local_datetime"].dt.time >= time_constr(14, 0, 0)) &
           (data_counts["local_datetime"].dt.time < time_constr(17, 0, 0)) 
    ].shape[0]
    return True if count_rows == 5 else False

def night_brushing(user_ach, user_data):
    fun_name = night_brushing.__name__
    this_ach_df = user_ach[user_ach["achievement_id"] == fun_name].sort_values(by=["local_datetime"])
    if not this_ach_df.empty:
        last_datetime = this_ach_df.iloc[-1].local_datetime
    else:
        last_datetime = pd.Timestamp.min
    data_counts = user_data[user_data["local_datetime"] >= last_datetime]
    count_rows = data_counts[
        (data_counts["local_datetime"].dt.time >= time_constr(0, 0, 0)) &
           (data_counts["local_datetime"].dt.time < time_constr(3, 0, 0)) 
    ].shape[0]
    return True if count_rows == 5 else False

def early_bird(user_ach, user_data):
    fun_name = early_bird.__name__
    this_ach_df = user_ach[user_ach["achievement_id"] == fun_name].sort_values(by=["local_datetime"])
    if not this_ach_df.empty:
        last_datetime = this_ach_df.iloc[-1].local_datetime
    else:
        last_datetime = pd.Timestamp.min
    data_counts = user_data[user_data["local_datetime"] >= last_datetime]
    count_rows = data_counts[
        (data_counts["local_datetime"].dt.time >= time_constr(3, 30, 0)) &
           (data_counts["local_datetime"].dt.time < time_constr(6, 30, 0)) 
    ].shape[0]
    return True if count_rows == 5 else False

def kissable(user_ach, user_data):
    fun_name = kissable.__name__
    this_ach_df = user_ach[user_ach["achievement_id"] == fun_name].sort_values(by=["local_datetime"])
    if not this_ach_df.empty:
        last_datetime = this_ach_df.iloc[-1].local_datetime
    else:
        last_datetime = pd.Timestamp.min
    data_counts = user_data[user_data["local_datetime"] >= last_datetime].reset_index()
    data_counts = data_counts[data_counts["has_tongue"] == "true"]
    if data_counts.shape[0] < 5:
        return False
    return True if data_counts.iloc[-1]['index'] == data_counts.iloc[-5]['index'] + 4 else False

def most_consistent(user_ach, user_data):
    fun_name = most_consistent.__name__
    this_ach_df = user_ach[user_ach["achievement_id"] == fun_name].sort_values(by=["local_datetime"])
    if not this_ach_df.empty:
        last_datetime = this_ach_df.iloc[-1].local_datetime
    else:
        last_datetime = pd.Timestamp.min
    data_counts = user_data[user_data["local_datetime"] >= last_datetime]
    data_counts = data_counts[
        ((data_counts["local_datetime"].dt.time >= time_constr(3, 30, 0)) &
           (data_counts["local_datetime"].dt.time < time_constr(12, 0, 0))) |
        (data_counts["local_datetime"].dt.time >= time_constr(18, 0, 0))    |
        ((data_counts["local_datetime"].dt.time >= time_constr(0, 0, 0)) &
           (data_counts["local_datetime"].dt.time < time_constr(2, 0, 0)))
    ]
    data_counts['date'] = data_counts["local_datetime"].dt.date
    data_counts = data_counts.drop_duplicates(subset=['date'])
    if data_counts.shape[0] < 5:
        return False
    
    return True if (data_counts.iloc[-1].date - data_counts.iloc[-5].date).days == 4 else False

def high_mileage(user_ach, user_data):
    fun_name = high_mileage.__name__
    this_ach_df = user_ach[user_ach["achievement_id"] == fun_name].sort_values(by=["local_datetime"])
    if not this_ach_df.empty:
        last_datetime = this_ach_df.iloc[-1].local_datetime
    else:
        last_datetime = pd.Timestamp.min
    data_counts = user_data[user_data["local_datetime"] >= last_datetime]
    mileage = data_counts['duration'].sum()
    return True if mileage >= 1000 else False
