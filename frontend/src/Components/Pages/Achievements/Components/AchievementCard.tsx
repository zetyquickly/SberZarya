import React from "react";
import {Card} from "@sberdevices/ui";
import styled from "styled-components";

interface AchievementCard {
    title:string,
    description:string,
    picture:string,
    earned:boolean
}

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

const CardTitle = styled.h2`
  font-size: 14px;
  margin: 0;
  color: #FFFFFF;
`;

const CardBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  margin: 6px auto 0 auto;
`


const AchievementCard = ({title, description, picture, earned}:AchievementCard):JSX.Element => {
    return(
        <Card style={{
            width: "162px",
            height: "114px",
            marginRight: "12px",
            boxSizing: "border-box"
        }}>
            <CardBody style={{

            }}>
                <Image src={`/assets/pictures/achievements/all/${picture}`} alt={title}/>

                <TextBox>
                    <CardTitle>{title}</CardTitle>
                </TextBox>
            </CardBody>
        </Card>
    );
}

export default AchievementCard;