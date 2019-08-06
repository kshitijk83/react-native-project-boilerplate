import React, { Component } from 'react';
import {connect} from 'react-redux';

class WithErrorHandler extends Component{

    render(){

        return(
            <>
                {this.props.errMsg? alert('Error'): null}
                {this.props.children}
            </>
            )
    }
};

const mapStateToProps = (state)=>{
    return{
        errMsg: state.error
    }
}

export default connect(mapStateToProps, null)(WithErrorHandler);