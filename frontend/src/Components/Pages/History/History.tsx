import React from "react";
import { Row, Carousel, CarouselItem, CarouselGridWrapper, CardContent, Card, TextBox }  from '@sberdevices/ui';
import styled from "styled-components";

const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 0 0;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 64px;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.96);
`;

const TimeText = styled.div`
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.96);
`;

const WeekText = styled.div`
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.56);
`;

const NewHr = styled.div`
    height: 1px;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    margin: 11px 0px;
`;

interface HistoryPart {
    title:string,
    subTitle:string
}

const History = ():JSX.Element => {

    const arrTime:Array<HistoryPart> = [
        {
            title: "Дневная чистка",
            subTitle: "28.02.2021"
        },
        {
            title: "Вечерняя чистка",
            subTitle: "26.02.2021"
        },
        {
            title: "Вечерняя чистка",
            subTitle: "25.02.2021"
        }
    ]

    return(
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
                    <CarouselItem>
                        <Card style={{ height: '208px', width: '165px', margin: '0 16px 0 0' }}>
                            <CardContent>
                                <Time>
                                    01<span style={{ margin: '0 8.5px', fontSize: '30px', color: '#2AC673' }}>:</span>40
                                </Time>
                                <TimeText>
                                    Среднее время
                                </TimeText>
                                <WeekText>
                                    За неделю
                                </WeekText>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem>
                        <Card style={{ height: '208px', width: '256px', margin: '0 16px 0 0'}}>
                            <CardContent>
                                {arrTime.map((item, i) => (
                                    <>
                                    <TextBox
                                        key={i}
                                        size="m"
                                        subTitle={item.subTitle}
                                        title={item.title}
                                    />
                                    {i < arrTime.length - 1 &&
                                        <NewHr />
                                    }
                                    </>
                                ))}
                            </CardContent>
                        </Card>
                    </CarouselItem>
            </Carousel>
            </CarouselGridWrapper>
    );
}

export default History;