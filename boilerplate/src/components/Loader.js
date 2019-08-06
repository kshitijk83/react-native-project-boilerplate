import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    View,
    Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { isLoading } from '../reducers/LoaderReducer';

const { width, height } = Dimensions.get('window');


class Loader extends Component {
    render() {
        console.log('props is loading', this.props.isLoading)
        return (
            <React.Fragment>
                {this.props.isLoading ?
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#000" />
                    </View>
                    : null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading
})

export default connect(mapStateToProps)(Loader)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: "#ffffff",
        position: "absolute",
        height: height,
        width: width,
        zIndex: 9999,
        opacity: .3
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})