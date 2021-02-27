import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from "./store";
import {BrowserRouter, Route, Switch, RouteProps} from "react-router-dom";
import styled from "styled-components";

import Header from "./Components/Blocks/Header";
import Footer from "./Components/Blocks/Footer/Footer";
import Achievements  from "./Components/Pages/Achievements/Achievements"

const PageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(26.05deg, rgba(15, 153, 24, 0.32) 0%, rgba(8, 8, 8, 0) 72.24%), 
              radial-gradient(100% 100% at 0% 100%, rgba(0, 102, 255, 0.2) 0%, rgba(8, 8, 8, 0) 99.69%), 
              radial-gradient(74.68% 149.35% at 50% 149.35%, rgba(0, 102, 255, 0.6) 0%, rgba(8, 8, 8, 0) 99.69%);
`;

const App = (props:RouteProps) => {
    return(
        <BrowserRouter>
            <PageContainer>
                <Header location={props.location!.pathname || "/"}/>

                <Switch>
                    <Route path="/achievements">
                        <Achievements/>
                    </Route>

                </Switch>

                <Footer/>
            </PageContainer>
        </BrowserRouter>
    );
}

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" render={(props:RouteProps):JSX.Element => (
                    <App {...props}/>
                )}/>
            </BrowserRouter>
        </Provider>,
    document.getElementById('root')
)