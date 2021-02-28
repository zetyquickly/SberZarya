import React from "react";
import {
    Card,
    CardBody,
    CardContent,
    TextBox,
    TextBoxBigTitle,
    Row,
    Col,
    Container, CardMedia
} from "@sberdevices/ui";
import styled from "styled-components";

interface GeneralBlock {
    achievements:Array<number>,
    allAchievements:Array<any>
}

const CardAmount = styled.h2`
  font-size: 96px;
  align-self: center;
  color: #FFFFFF;
  margin: 57px 0;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const Fade = styled.div`
  width: 100%;
  height: 100%;
  position:absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%);,
`;

const GeneralBlock = ({achievements, allAchievements}:GeneralBlock):JSX.Element => {
    const amount = achievements.length;

    const generateIcons = ():Array<JSX.Element> => {
        const icons:Array<JSX.Element> = [];
        for (let i:number = 0; i < 4; i++) {
            let icon:JSX.Element;

            if (achievements[i] !== undefined) {
                const current = allAchievements[achievements[i]];
                icon = <Image
                            src={`/assets/pictures/achievements/all/${current.img}`}
                            alt={current.title}
                        />
            } else {
                icon = <Image
                            src="/assets/pictures/achievements/all/empty.svg"
                            alt="None"
                        />
            }
            icons.push(<Col size={1} key={i}> {icon} </Col>);
        }
        return icons;
    }


    const icons:Array<JSX.Element> = generateIcons();

    return(
        <Card>
            <CardBody>

                <CardMedia
                    src="/assets/pictures/achievements/main_background.jpg"
                    style={{
                        position: "absolute"
                    }}
                />
                <Fade/>

                <CardContent
                    style={{
                        textAlign: "center"
                    }}
                >

                    <CardAmount>{amount}</CardAmount>
                    <TextBox>
                        <TextBoxBigTitle>награда</TextBoxBigTitle>
                    </TextBox>

                    <Container style={{marginTop: "20px"}}>
                        <Row>
                            {icons}
                        </Row>
                    </Container>

                </CardContent>

            </CardBody>
        </Card>
    )
}

export default GeneralBlock;