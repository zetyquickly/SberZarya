import React from "react";
import styled from "styled-components";
import {Container, Header as HeaderBlock} from '@sberdevices/ui';
import Routes from "../../Core/PagesRoutingConfig";

interface HeaderProps {
    location:string
}

const Header = ({location}:HeaderProps) => {
    const locationTitle = Routes[location];

    return(
        <Container>
            <HeaderBlock
                back={true}
                title={locationTitle}
            />
        </Container>
    );
}

export default Header;