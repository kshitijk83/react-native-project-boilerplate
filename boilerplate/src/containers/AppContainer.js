import React, { Component } from 'react'
// import { Root } from '';
import { Dimensions, View } from 'react-native'
import Navigation from '../navigation/index'
import NetworkConnectivity from '../containers/NetworkConnectivity'
// import Loader from '../components/Loader'
import WithLoaderHandler from '../hoc/withLoaderHandler';
import { instance } from '../api/axios/instance';

import WithErrorHandler from '../hoc/withErrorHandler';

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const TABLET_HEIGHT = 1000
export const TABLET_WIDTH = 700
export const VERSION = "v1.0.1"



class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Root>
                <View style={{ flex: 1 }}>
                    <NetworkConnectivity />
                    <WithErrorHandler>
                        <Navigation />
                    </WithErrorHandler>
                    {/* <Loader /> */}
                </View>
            // </Root>
        )
    }

}

export default AppContainer;