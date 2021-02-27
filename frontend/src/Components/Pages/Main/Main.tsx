import React from "react";
import { Row, Carousel, CarouselItem, CarouselGridWrapper }  from '@sberdevices/ui';
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 64px;
    width: 200px;
    height: 42px;
    left: 56px;
    top: calc(50% - 42px/2 + 8px);
    margin: 0 0 22px
`;

const IconHeader = styled.div`
    padding: 0px;
    width: 36px;
    height: 36px;
    border-radius: 20px;
    margin: 0 12px 0 0;
`;

const TextHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

const NameApp = styled.h4`
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.96);
    margin: 0px;
`;

const TaglineApp = styled.p`
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.56);
    margin: 0px 0px;
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

const awards:Array<object> = [
    {
        title: "Первая чистка"
    }
]

const Main = () => {
    const arrData = [
        {
            img: "main1.png",
            title: "Почистить зубы",
            icon: "Brush-teeth.svg"
        },
        {
            img: "main2.png",
            title: "Мои достижения",
            icon: "My-achievements.svg"
        },
        { 
            img: "main3.png",
            title: "История",
            icon: "History-main.svg"
        }
    ]

    return(
        <MainContainer>
        <HeaderBlock>
            <IconHeader>
                <img src='./assets/icons/Header-icon.svg' style={{ borderRadius: '8px'}} />
            </IconHeader>
            <TextHeader>
                <NameApp>SberZarya</NameApp>
                <TaglineApp>Чистим зубы правильно</TaglineApp>
            </TextHeader>
        </HeaderBlock>
        <CarouselGridWrapper>
            <Carousel
                as={Row}
                axis="x"
                index={1}
                scrollSnapType="mandatory"
                detectActive
                detectThreshold={0.5}
                paddingStart="10%"
                paddingEnd="10%"
            >
                {arrData.map((item, i) => (
                    <CarouselItem key={`item:${i}`} style={{ margin: '0 16px 0 0' }}>
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
                    </CarouselItem>
                ))}
            </Carousel>
        </CarouselGridWrapper>
        </MainContainer>
    );
}

export default Main;