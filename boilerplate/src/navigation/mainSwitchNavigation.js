import { createSwitchNavigator } from 'react-navigation';
import NoData from '../containers/NoData';

export const mainSwitchNav = createSwitchNavigator({
    'dummy':{
        screen: NoData
    }
},
{
    initialRouteName:'dummy'
}
);