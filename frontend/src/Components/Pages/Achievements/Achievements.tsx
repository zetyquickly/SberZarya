import React from "react";
import { Row, Carousel, CarouselItem, CarouselGridWrapper }  from '@sberdevices/ui';
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
    console.log("Ghbdtn")
    
    const [index, setIndex] = React.useState("main");
    const arrImg = ["main1.png", "main2.png", "main3.png"]

    return(
        <AchievementsContainer>
            <CarouselGridWrapper>
            <Carousel
                as={Row}
                axis="x"
                index={1}
                scrollSnapType="mandatory"
                detectActive
                detectThreshold={0.5}
                paddingStart="50%"
                paddingEnd="50%"
            >
                {arrImg.map((img, i) => (
                    <CarouselItem key={`item:${i}`}>
                        {img}
                        {/* <GalleryCard
                            imageSrc={`${process.env.PUBLIC_URL}/img/${img}`}
                            imageRatio="1 / 1"
                            scaleOnFocus
                        /> */}
                    </CarouselItem>
                ))}
            </Carousel>
            </CarouselGridWrapper>
        </AchievementsContainer>
    );
}

export default Achievements;