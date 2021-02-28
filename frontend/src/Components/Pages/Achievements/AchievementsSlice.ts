import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SberZarya} from "../../../Core/SberZarya";

const initialState:SberZarya.AchievementState = {
    allState: false,
    userState: false,
    userAchievements: [],
    allAchievements: []
}

const setAll:CaseReducer<SberZarya.AchievementState, PayloadAction<Array<SberZarya.RegularAchievements>>> = (state, action:PayloadAction<Array<SberZarya.RegularAchievements>>):void => {
    state.allAchievements = action.payload;
    state.allState = !0;
};
const setUser:CaseReducer<SberZarya.AchievementState, PayloadAction<Array<number>>> = (state, action:PayloadAction<Array<number>>):void => {
    state.userAchievements = action.payload;
    state.userState = !0;
}
// const addAchievement:CaseReducer<State, PayloadAction<number>> = (state, action:PayloadAction<number>):void => {
//     state.userAchievements.push(action.payload);
// }

const AchievementsSlice = createSlice({
    name: "achievements",
    initialState: initialState,
    reducers: {
        setAllAchievements: setAll,
        setUserAchievements: setUser
    }
});

export const getUserAchievements = (state:SberZarya.AchievementState):Array<number> => state.userAchievements;
export const getAllAchievements = (state:SberZarya.AchievementState):Array<SberZarya.RegularAchievements> => state.allAchievements;

export const getUserAchievementsState = (state:SberZarya.AchievementState):boolean => state.userState;
export const getAllAchievementsState = (state:SberZarya.AchievementState):boolean => state.allState;

export const {setAllAchievements, setUserAchievements} = AchievementsSlice.actions;
export default AchievementsSlice.reducer;