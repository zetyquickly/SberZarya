import React from "react";
import { Cell, CellIcon, TextBox }  from '@sberdevices/ui';
import styled from "styled-components";

const HistoryDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardData = styled.div`
    display: flax;
    height: 208px;
    width: 453px;
    border-radius: 20px;
    z-index: 1000;
    background: #262626;
`;

const BlockTime = styled.div`
    width: 165px;
`;

const Time = styled.p`
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

const Stuff = styled.div`
    padding: 24px 9px;
`;

const DataList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    height: 42px;
    left: 56px;
    top: calc(50% - 42px/2 + 8px);
    margin: 0 0 10px
`;

const BlockIconCard = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    width: 36px;
    height: 36px;
    margin: 0 12px 0 0;
`;

const TextList = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderList = styled.h4`
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.019em;
    color: #FFFFFF;
    margin: 0;
`;

const SubHeaderList = styled.p`
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.56);
    margin: 0;
`;


const HistoryData = () => {

    const arrStaff = [
        {
            title: "Зубная нить",
            subTitle: "Относитесь бережно к зубам и деснам",
            icon: './assets/icons/Dental-floss.svg'
        },
        {
            title: "Чистка языка",
            subTitle: "Двигайтесь от основания к кончику",
            icon: './assets/icons/Tongue-cleaning.svg'
        },
        {
            title: "Ополаскиватель",
            subTitle: "Избавьтесь от неприятных запахов",
            icon: './assets/icons/Rinse-aid.svg',
        }
    ]

    return(
        <HistoryDataContainer>
            <CardData>
                <BlockTime>
                    <Time>
                        02<span style={{ margin: '0 8.5px', fontSize: '30px', color: '#2AC673' }}>:</span>00
                    </Time>
                    <TimeText style={{ margin: '0 0 0 16px' }}>
                        Время чистки
                    </TimeText>
                </BlockTime>
                <Stuff>
                    {arrStaff.map((item) => (
                        <DataList>
                            <BlockIconCard>
                                <img src={item.icon}/>
                            </BlockIconCard>
                            <TextList>
                                <HeaderList>
                                    {item.title}
                                </HeaderList>
                                <SubHeaderList>
                                    {item.subTitle}
                                </SubHeaderList>
                            </TextList>
                        </DataList>
                    ))}
                </Stuff>
            </CardData>
        </HistoryDataContainer>
    );
}

export default HistoryData;