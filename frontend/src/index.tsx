import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import store from "./store";
import {Provider, useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route, Switch, useLocation, RouteProps, Redirect} from "react-router-dom";
import styled from "styled-components";

import {setUserAchievements, setAllAchievements} from "./Components/Pages/Achievements/AchievementsSlice";

import Header from "./Components/Blocks/Header";
import Footer from "./Components/Blocks/Footer/Footer";
import Achievements  from "./Components/Pages/Achievements/Achievements";
import UniqueAchievement from "./Components/Pages/UniqueAchievement/UniqueAchievement";
import {Spinner} from "@sberdevices/ui";
import {SberZarya} from "./Core/SberZarya";
import Main from "./Components/Pages/Main/Main"
import History from "./Components/Pages/History/History"
import Brushing from "./Components/Pages/Brushing/Brushing";
import Chat from "./Components/Pages/Chat/Chat"

interface AppProps {
    location:string | undefined
}

const initialAchievements = [
    {
        id: 0,
        title: "Первая чистка",
        description: "Да",
        img: "1.svg"
    },
    {
        id: 1,
        title: "Ранняя пташка",
        description: "Да",
        img: "3.svg"
    },
    {
        id: 2,
        title: "Обеденный перерыв",
        description: "Да",
        img: "2.svg"
    },
    {
        id: 3,
        title: "Обаяшка",
        description: "Да",
        img: "4.svg"
    }
]


const PageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(26.05deg, rgba(15, 153, 24, 0.32) 0%, rgba(8, 8, 8, 0) 72.24%), 
              radial-gradient(100% 100% at 0% 100%, rgba(0, 102, 255, 0.2) 0%, rgba(8, 8, 8, 0) 99.69%), 
              radial-gradient(74.68% 149.35% at 50% 149.35%, rgba(0, 102, 255, 0.6) 0%, rgba(8, 8, 8, 0) 99.69%);
  font-family: Arial, sans-serif;
`;

const App = ():JSX.Element => {
    const userAchievementState:boolean = useSelector(({achievements}:SberZarya.AchievementSelectorState) => achievements.userState);
    const allAchievementsState:boolean = useSelector(({achievements}:SberZarya.AchievementSelectorState) => achievements.allState);

    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!userAchievementState) dispatch(setUserAchievements([1]));
        if (!allAchievementsState) dispatch(setAllAchievements(initialAchievements));
        setLoading(true);
    }, []);

    if (!loading) return <Spinner/>
    return(
        <PageContainer>
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route path="/chat">
                        <Chat/>
                    </Route>
                    <Route path="/history">
                        <History/>
                    </Route>
                    <Route path="/achievements">
                        <Achievements/>
                    </Route>
                    <Route path="/achievement=:id" render={props => (
                        <UniqueAchievement id={props.match.params.id}/>
                    )}/>
                    <Route path="/brushing">
                        <Brushing/>
                    </Route>
                    <Route path="/main">
                        <Main/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/main"/>
                    </Route>
                </Switch>

                <Footer/>
            </BrowserRouter>
        </PageContainer>
    );
}

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
)