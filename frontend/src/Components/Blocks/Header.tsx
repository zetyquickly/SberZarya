import React, {useEffect, useState} from "react";
import {Container, Header as HeaderBlock} from '@sberdevices/ui';
import Routes from "../../Core/PagesRoutingConfig";
import {useHistory, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {SberZarya} from "../../Core/SberZarya";


const Header = ():JSX.Element => {
    const location = useLocation();
    const history = useHistory();
    const uniqueRegex = /achievement=(\d)/;
    const allAchievements:Array<SberZarya.RegularAchievements> = useSelector(({achievements}:SberZarya.AchievementSelectorState) => achievements.allAchievements);

    const [currLocation, setLocation] = useState<string>(location.pathname);
    const [locationTitle, setLocationTitle] = useState<string>(Routes[location.pathname]);


    useEffect(() => {
        const matches = location.pathname.match(uniqueRegex)

        if (matches) {
            const newTitle:string = allAchievements.filter((elem:SberZarya.RegularAchievements) => elem.id === Number(matches[1]))[0].title;
            setLocationTitle(newTitle);
        } else {
            setLocationTitle(Routes[location.pathname]);
            setLocation(location.pathname);
        }
    }, [location]);

    useEffect(() => {
        console.log(history);
    }, [history]);

    return(
        <Container>
            {currLocation !== ("/main" || "/") &&
                <HeaderBlock
                    back={true}
                    title={locationTitle}
                    onBackClick={():void => {
                        history.goBack();
                    }}
                />
            }

            {currLocation === ("/main" || "/") &&
                <HeaderBlock
                  back={false}
                  logo={'./assets/icons/Header-icon.svg'}
                  logoAlt="SberZarya"
                  title="SberZarya"
                  subtitle="Чистим зубы правильно"
                  style={{
                      marginLeft: "50px"
                  }}
                />
            }

        </Container>
    );
}

export default Header;