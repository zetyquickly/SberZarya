import React from "react";
import { Row, Carousel, CarouselItem, CarouselGridWrapper }  from '@sberdevices/ui';
import styled from "styled-components";
import {Link} from "react-router-dom";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const GalleryCard = styled.div`
    height: 240px;
    width: 256px;
    left: 0px;
    top: 0px;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%);
`;

const FadeCard = styled.div`
    position: absolute;
    height: 240px;
    width: 256px;
    border-radius: 20px;
    z-index: 1000;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%);
`;

const ImgCard = styled.img`
    height: 240px;
    width: 256px;
    left: 0px;
    top: 0px;
    border-radius: 20px;
`;

const DataCard = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    width: 224px;
    height: 36px;
    left: 0px;
    bottom: 0px;
`;

const BlockIconCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0px 13px 0px 0px;
    width: 36px;
    height: 36px;
    z-index: 2000;
    background-color: rgba(255,255,255,0.56);
    border-radius: 50%;
`;

const IconCard = styled.img`
    width: 20px;
    height: 20px;
    top: 2.19%;
    bottom: 2.19%;
`;

const TextCard = styled.p`
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.96);;
`;

interface RouteBlock {
    img:string,
    title:string,
    icon:string,
    link:string
}

const Main = ():JSX.Element => {
    const arrData:Array<RouteBlock> = [
        {
            img: "main1.png",
            title: "Почистить зубы",
            icon: "Brush-teeth.svg",
            link: "/brushing"
        },
        {
            img: "main2.png",
            title: "Мои достижения",
            icon: "My-achievements.svg",
            link: "/achievements"
        },
        { 
            img: "main3.png",
            title: "История",
            icon: "History-main.svg",
            link: "/history"
        }
    ]

    return(
        <MainContainer>

        <CarouselGridWrapper>
            {/*@ts-ignore*/}
            <Carousel
                as={Row}
                axis="x"
                scrollSnapType="mandatory"
                paddingStart="58px"
            >
                {arrData.map((item, i) => (
                    <CarouselItem key={`item:${i}`} style={{ margin: '0 16px 0 0' }}>
                        <Link to={item.link}>
                            <FadeCard>
                                <DataCard>
                                    <BlockIconCard>
                                        <IconCard src={`./assets/icons/${item.icon}`} />
                                    </BlockIconCard>
                                    <TextCard>
                                        {item.title}
                                    </TextCard>
                                </DataCard>
                            </FadeCard>
                            <GalleryCard>
                                <ImgCard src={`./assets/pictures/main_page/${item.img}`}/>
                            </GalleryCard>
                        </Link>
                    </CarouselItem>
                ))}
            </Carousel>
        </CarouselGridWrapper>
        </MainContainer>
    );
}

export default Main;