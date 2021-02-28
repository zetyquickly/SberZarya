import React, {useEffect} from "react";
import {Card, CardBody, CardContent, CardMedia} from "@sberdevices/ui";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getAllAchievements} from "../Achievements/AchievementsSlice";
import {SberZarya} from "../../../Core/SberZarya";

interface UniqueAchievement {
    id:number
}

const Container = styled.section`
  margin: 0 auto;
  width: 526px;
`;

const Fade = styled.div`
  width: 100%;
  height: 100%;
  position:absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(180deg, rgba(8, 8, 8, 0) 0%, #080808 100%)
`;

const AchievementIcon = styled.img`
    width: 48px;
    height: 48px;
`;

const UniqueTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  margin-top: 21px;
  margin-bottom: 12px;
`;

const UniqueSubTitle = styled.span`
  font-size: 14px;
  color: #fff;
`;

const CardText = styled.div`
  align-self: center; 
`;

const UniqueAchievement = ({id}:UniqueAchievement):JSX.Element => {
    const achievement:SberZarya.RegularAchievements = useSelector(({achievements}:SberZarya.AchievementSelectorState) => achievements.allAchievements)
                                                      .filter((elem:SberZarya.RegularAchievements) => elem.id === Number(id))[0];

    return(
        <Container>
            <Card
                style={{
                    height: "240px",
                }}
            >
                <CardBody>
                    <CardMedia
                        src="/assets/pictures/achievements/unique/img.jpg"
                        style={{
                            position: "absolute"
                        }}
                    />
                    <Fade/>

                    <CardContent style={{
                        marginTop: "40px"
                    }}>
                        <Container>

                            <CardText>
                                <AchievementIcon
                                    src={`/assets/pictures/achievements/all/${achievement.img}`}
                                />
                                <UniqueTitle>{achievement.title}</UniqueTitle>
                                <UniqueSubTitle>{achievement.description}</UniqueSubTitle>
                            </CardText>

                        </Container>
                    </CardContent>
                </CardBody>
            </Card>
        </Container>
    );
}

export default UniqueAchievement;