import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {updateTime} from "../BrushingSlice";
import {useDispatch, useSelector} from "react-redux";
import {SberZarya} from "../../../../Core/SberZarya";

interface MainStageProps {
    onEnd: () => void
}


interface Option {
    top:string,
    bottom:string
}

const options:Array<Option> = [
    {
        top: "чистим правую верхнюю часть",
        bottom: "от десны к низу"
    },
    {
        top: "чистим правую нижнюю часть",
        bottom: "от десны вверх"
    },
    {
        top: "чистим левую нижнюю часть",
        bottom: "от десны вверх"
    },
    {
        top: "чистим левую верхнюю часть",
        bottom: "от десны вниз"
    }
];

const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
`;

const HandsPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Timer = styled.h2`
  font-size: 60px;
`;

const MainStage = ({onEnd}:MainStageProps):JSX.Element => {
    const currentBrushingTime = useSelector(({brushing}:SberZarya.BrushingSelectorState) => brushing.time);
    const [time, setTime] = useState<number>(currentBrushingTime);
    const dispatch = useDispatch();

    let interval = setTimeout(timeUpdate, 1000);

    function timeUpdate() {
        setTime(time+1);
        clearTimeout(interval);
        interval = setTimeout(timeUpdate, 1000);
    }

    const getZeroed = ():string => {
        if (time >= 60) {
            return (time-60) >= 10 ? `${time}` : `0${time}`;
        } else {
            return time >= 10 ? `${time}` : `0${time}`;
        }
    }

    useEffect(() => {
        return function cleanup() {
            console.log("AA");
            clearTimeout(interval);
            dispatch(updateTime(time));
        }
    }, []);

    useEffect(() => {
        if (time >= 120) {
            clearTimeout(interval);
            onEnd();
        }
    }, [time])


    return(
        <Container>

            <TimePart>
                <Timer>{`0${Math.trunc(time / 60)}:${getZeroed()}`}</Timer>
            </TimePart>

        </Container>
    )
}

export default MainStage;