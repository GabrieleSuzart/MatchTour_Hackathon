import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Detalhes from './screens/Detalhes';
import Guias from './screens/Guias';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="home" component={Home} hideNavBar={true} />
                <Scene key="profile" component={Profile} hideNavBar={true} />
                <Scene key="detalhes" component={Detalhes} hideNavBar={true} />
                <Scene key="guias" component={Guias} hideNavBar={true} />
            </Stack>
        </Router>
    );
};

export default RouterComponent;