import React from "react";
import {Container, Row, Carousel, CarouselGridWrapper, CarouselCol} from '@sberdevices/ui';
import styled from "styled-components"

import GeneralBlock from "./Components/GeneralBlock";
import AchievementCard from "./Components/AchievementCard";

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

const awards:Array<number> = [0];

const allAwards:Array<object> = [
    {
        id: 0,
        title: "Первая чистка",
        img: "1.svg"
    },
    {
        id: 1,
        title: "Ранняя пташка",
        img: "3.svg"
    },
    {
        id: 2,
        title: "Обеденный перерыв",
        img: "2.svg"
    },
    {
        id: 3,
        title: "Обаяшка",
        img: "4.svg"
    }
]

const Achievements = () => {
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
                            achievements={awards}
                            allAchievements={allAwards}
                        />
                    </CarouselCol>

                    <CarouselCol>
                        <Container>
                            <Grid>
                                {allAwards.map((elem:any) =>
                                    <AchievementCard
                                        key={allAwards.indexOf(elem)}
                                        title={elem.title}
                                        description={elem.description}
                                        picture={elem.img}
                                        earned={awards.indexOf(elem.id) !== -1}
                                    />
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