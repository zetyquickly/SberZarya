import React from "react";
import { Row, Carousel, CarouselItem, CarouselGridWrapper, Card, CardContent }  from '@sberdevices/ui';
import styled from "styled-components";

const ChatContainer = styled.div`
    height: 400px;
    width: 528px;
    position: absolute;
    top: 0;
    margin: auto;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
`;

const TextMsg = styled.p`
    display: inline-block;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.96);
    margin: 0;
    padding: 0;
`;

const Chat = () => {

    const arrMsgs = [
        {
            msg: "Приготовьте зубную щетку и пасту, я дам вам минутку...",
            who: "assistant"
        },
        {
            msg: "Готовы?",
            who: "assistant"
        },
        {
            msg: "Привет всё хорошо",
            who: "user"
        },
        {
            msg: "Тогда начнем",
            who: "assistant"
        }
    ]

    return(
        <ChatContainer>
            <Carousel
                as={Row}
                axis="y"
                index={1}
                scrollSnapType="mandatory"
                detectActive
                detectThreshold={0.5}
                paddingStart="10%"
                paddingEnd="10%"
            >
                {arrMsgs.map((msg, i) => (
                    <>
                    {msg.who === 'assistant' &&
                    <CarouselItem key={`item:${i}`} style={{margin: "0 0 12px"}} >
                        <Card style={{display: "inline-block"}}> 
                            <CardContent compact>
                                <TextMsg>
                                    {msg.msg}
                                </TextMsg>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    }
                    {msg.who === 'user' && 
                    <CarouselItem key={`item:${i}`} style={{margin: "0 0 12px", display: "flex", justifyContent: "flex-end",}} >
                    <Card style={{display: "inline-block", justifyContent: "flex-end", background: "transparent", margin: "0 0 0 auto"}}> 
                        <CardContent compact style={{display: "inline-block"}}>
                            <TextMsg>
                                {msg.msg}
                            </TextMsg>
                        </CardContent>
                    </Card>
                    </CarouselItem>
                    }
                    </>
                ))}
            </Carousel>
        </ChatContainer>
    );
}

export default Chat;