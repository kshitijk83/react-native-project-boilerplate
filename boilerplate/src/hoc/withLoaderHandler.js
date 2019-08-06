import React, { Component } from 'react';
import { View, ActivityIndicator, Modal, StyleSheet, Dimensions } from 'react-native';
import {connect} from 'react-redux';
const { width, height } = Dimensions.get('window');
import { withNavigation } from 'react-navigation';
import { BackHandler } from 'react-native';

export default withErrorHandler = (WrappedComponent)=>{

    const mapStateToProps = state=>{
        return{ 
            isLoading: state.isLoading
        }
    }

    return withNavigation(connect(mapStateToProps, null)(
        class extends Component{
            
            componentWillReceiveProps(newProps){
                if(newProps.isLoading){
                    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
                } else{
                    this.backHandler&&this.backHandler.remove();
                }
            }

            handleBackPress=()=>{
                return true;
            }

            render(){
                return(
                    <WrappedComponent navigation={this.props.navigation} isLoading={this.props.isLoading} />
                )
            }
        }
    ))
}

// class withErrorHandler extends Component{

//         render(){
//             return(
//                 <View style={{flex: 1}}>
//                 {this.props.isLoading?(
//                 <View style={[styles.container, styles.horizontal]}>
//                     <ActivityIndicator size="large" color="#000" />
//                 </View>
//                 ):this.props.children}
//                 </View>
//             )
//         }
//     }

// const mapStateToProps = state=>{
//     return{ 
//         isLoading: state.isLoading
//     }
// }

// export default connect(mapStateToProps, null)(withErrorHandler);

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