import React, { PureComponent } from "react";
import { View } from "react-native";
import { connect } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
import { internetAvailable, internetNotAvailable } from '../actions/NetworkAction';

class NetworkConnectivity extends PureComponent {
    state = {
        isConnected: true
    };

    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            "connectionChange",
            this.handleConnectivityChange
        );
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            this.props.internetAvailable();
        } else {
            this.props.internetNotAvailable();
        }
    };

    render() {
        return <></>;
    }
}

const handleState = state => {
    console.log('store', state)
    return state.isInternet
}

const mapStateToProps = state => ({
    isInternet: handleState(state),
})

export default connect(
    mapStateToProps, { internetAvailable, internetNotAvailable }
)(NetworkConnectivity)