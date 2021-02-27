from inspect import getmembers, isfunction
import achievements
import os
import pandas as pd

achievements_list = [o for o in getmembers(achievements) if isfunction(o[1])]

def files_exist(uid):
    if not os.path.exists(f"user_db/{uid}.csv"):
        return False
    elif not os.path.exists(f"user_db/{uid}_a.csv"):
        user_ach = pd.DataFrame()
        user_ach.to_csv(f"user_db/{uid}_a.csv", index=False)
        return True
    else:
        return True


def check_achievements(uid, local_datetime):
    if not files_exist(uid):
        return [False for ach in achievements_list]
    else:
        user_ach = pd.read_csv(f"user_db/{uid}_a.csv")
        user_data = pd.read_csv(f"user_db/{uid}.csv", index_col=False)
        user_ach['local_datetime'] =  pd.to_datetime(user_ach['local_datetime'], format="%Y-%m-%d %H:%M:%S")
        user_data['local_datetime'] =  pd.to_datetime(user_data['local_datetime'], format="%Y-%m-%d %H:%M:%S")
        ret_list = [(ach[0], ach[1](user_ach, user_data)) for ach in achievements_list]
        for ach_name, ret_val in ret_list:
            if ret_val == True:
                user_ach = user_ach.append({
                    "local_datetime": local_datetime, 
                    "achievement_id": ach_name,
                }, ignore_index=True)
        
        user_ach.to_csv(f"user_db/{uid}_a.csv", index=False)
        return ret_list


if __name__ == "__main__":
    from datetime import datetime
    check_achievements(
        "asjdijaisjdoiajsidj", 
        datetime.strptime("2021-05-26 20:00:00", "%Y-%m-%d %H:%M:%S")
    )