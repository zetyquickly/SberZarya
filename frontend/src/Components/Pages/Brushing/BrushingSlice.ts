import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SberZarya} from "../../../Core/SberZarya";

const initialState:SberZarya.BrushingState = {
    ongoingBrushing:false,
    time: 0
}

const brushingStarted:CaseReducer<SberZarya.BrushingState> = (state):void => {
    state.ongoingBrushing = true;
}

const brushingEnded:CaseReducer<SberZarya.BrushingState> = (state):void => {
    state.ongoingBrushing = false;
}

const setTime:CaseReducer<SberZarya.BrushingState, PayloadAction<number>> = (state, action:PayloadAction<number>):void => {
    state.time = action.payload;
}

const BrushingSlice = createSlice({
    name: "brushing",
    initialState: initialState,
    reducers: {
        brushStart: brushingStarted,
        brushEnd: brushingEnded,
        updateTime: setTime
    }
});

export const getBrushingState = (state:SberZarya.BrushingState):boolean => state.ongoingBrushing;

export const {brushStart, brushEnd, updateTime} = BrushingSlice.actions;
export default BrushingSlice.reducer;