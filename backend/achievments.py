import os
import pandas as pd

def files_exist(uid):
    if not os.path.exists(f"user_db/{uid}.csv"):
        return False
    elif not os.path.exists(f"user_db/{uid}_a.csv"):
        user_ach = pd.DataFrame()
        user_ach.to_csv(f"user_db/{uid}_a.csv")
        return True
    else:
        return True


def welcome(uid):
    if not files_exist(uid):
        return False
    else:
        user_ach = pd.read_csv(f"user_db/{uid}_a.csv")
        user_data = pd.read_csv(f"user_db/{uid}.csv")
        if user_ach.empty and user_data.shape[0] == 1:
            return True
        else:
            return False

def lunch_brushing(uid):
    pass

def night_brushing(uid):
    pass

def early_bird(uid):
    pass

def kissable(uid):
    pass

def content(uid):
    pass

def high_mileage(uid):
    pass