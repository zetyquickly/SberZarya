import React from "react";
import {Container, Row, Carousel, CarouselGridWrapper, CarouselCol} from '@sberdevices/ui';
import styled from "styled-components"

import GeneralBlock from "./Components/GeneralBlock";
import AchievementCard from "./Components/AchievementCard";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {SberZarya} from "../../../Core/SberZarya";

const AchievementsContainer = styled.div`
  vertical-align:middle;
  text-align: center;
  height: 239px;
`;

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start;
  height: 239px;
  width: auto;
`;

const Achievements = ():JSX.Element => {
    const allAchievements:Array<SberZarya.RegularAchievements> = useSelector(({achievements}:SberZarya.AchievementSelectorState) => achievements.allAchievements);
    const userAchievements:Array<number> = useSelector(({achievements}:SberZarya.AchievementSelectorState) => achievements.userAchievements);

    return(
        <AchievementsContainer>
            <CarouselGridWrapper >
                {/*@ts-ignore*/}
                <Carousel
                    scrollSnapType="mandatory"
                    as={Row}
                    axis="x"
                    paddingStart="56px"
                >
                    <CarouselCol>
                        <GeneralBlock
                            achievements={userAchievements}
                            allAchievements={allAchievements}
                        />
                    </CarouselCol>

                    <CarouselCol>
                        <Container>
                            <Grid>
                                {allAchievements.map((elem:SberZarya.RegularAchievements, i:number) =>
                                    <Link to={`/achievement=${elem.id}`}>
                                        <AchievementCard
                                            key={i}
                                            title={elem.title}
                                            description={elem.description}
                                            picture={elem.img}
                                            earned={userAchievements.indexOf(elem.id) !== -1}
                                        />
                                    </Link>
                                )}
                            </Grid>
                        </Container>
                    </CarouselCol>

                </Carousel>
            </CarouselGridWrapper>
        </AchievementsContainer>
    );
}

export default Achievements;