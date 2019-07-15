import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class hehe extends Component {

    render() {
        return (
            <Text>sdfhafald;{this.props.x}</Text>
        );
    }
}

const map = state => {
    return {
        x: state.reducer.x
    }
}

const mapDispatch = dispatch => {
    return {
        blah: dispatch({ type: 'blah' })
    }
}

export default connect(map, mapDispatch)(hehe);