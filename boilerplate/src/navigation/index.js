import React, { Component } from 'react';
import { createAppContainer, } from 'react-navigation';
import { mainSwitchNav } from './mainSwitchNavigation';



class Navigation extends Component {
    render() {
        // const AppContainer = createAppContainer(withOutLogin);
        const AppContainer = createAppContainer(mainSwitchNav);
        return <AppContainer />;
    }
}

export default Navigation;