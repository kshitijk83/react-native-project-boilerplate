import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class NoData extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',marginHorizontal:20}}>
                <Text>
                    {"No Data"}
                </Text>  
            </View>
        );
    }
}