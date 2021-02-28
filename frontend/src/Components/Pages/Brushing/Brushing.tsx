import React, {useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {SberZarya} from "../../../Core/SberZarya";
import {brushStart, brushEnd} from "./BrushingSlice";

import MainStage from "./Components/MainStage";
import Start from "./Components/Start";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Brushing = ():JSX.Element => {
    const brushingState:boolean = useSelector(({brushing}:SberZarya.BrushingSelectorState):boolean => brushing.ongoingBrushing);
    const dispatch = useDispatch();

    const [stage, setStage] = useState<number>(brushingState ? 2 : 2);

    const onProceed = ():void => {
        dispatch(brushStart());
        setStage(2);
    }

    const onEnd = ():void => {
        dispatch(brushEnd())
        setStage(1);
    }

    return(
        <Main>
            {stage === 1 && <Start onProceed={onProceed}/>}
            {stage === 2 && <MainStage onEnd={onEnd}/>}
        </Main>
    )
}

export default Brushing;