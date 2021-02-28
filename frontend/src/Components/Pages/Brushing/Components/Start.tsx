import React from "react";
import styled from "styled-components";

interface StartProps {
    onProceed:() => void
}

const Container = styled.main`
  text-align: center;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 79px;
`;

const Title = styled.h1`
  font-size: 18px;
  margin-top: 31px;
  color: #fff;
  font-weight: 300;
`;

const Button = styled.button`
    width: 220px;
    height: 48px;
    border: none;
    outline: none;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    margin-top: 79px;
`;

const Start = ({onProceed}:StartProps):JSX.Element => {
    return(
        <Container>
            <Image src="/assets/icons/brushing/Start.svg" alt="Toothbrush"/>
            <Title>Нанесите небольшой слой пасты на щетку</Title>

            <Button
                onClick={() => onProceed()}
            >Я готов</Button>
        </Container>
    )
}

export default Start;