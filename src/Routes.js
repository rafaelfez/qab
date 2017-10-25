import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from './components/Login';

export default props => (
    <Router>
        <Stack key="root">
            <Scene key="login" component={Login} title="Login" hideNavBar={true} initial/>
        </Stack>
    </Router>
)