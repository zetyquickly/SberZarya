import React from "react";
import { Container, Row, Col, Carousel  }  from '@sberdevices/ui';
import styled from "styled-components";

const AchievementsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const awards:Array<object> = [
    {
        title: "Первая чистка"
    }
]

const Achievements = () => {
    return(
        <AchievementsContainer>
            <Carousel>

            </Carousel>
        </AchievementsContainer>
    );
}

export default Achievements;