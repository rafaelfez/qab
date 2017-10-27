import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Inicial from './components/Inicial';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#9c27b0' }} titleStyle={{ color: '#fff' }} >
        <Stack key="root">
        	<Scene key="inicial" component={Inicial} title="Inicial" hideNavBar={true} />
            <Scene key="login" component={Login} title="Login" hideNavBar={false} />
            <Scene key="cadastro" component={Cadastro} title="Cadastro" hideNavBar={false} />
        </Stack>
    </Router>
)