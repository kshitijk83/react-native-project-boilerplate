import * as ActionConstants from '../actions/actionConstants/ActionConstants';
import {instance} from '../api/axios/instance';

export const loginRequest = (formData, onSuccess)=>{
    return dispatch=>{
        dispatch({type: ActionConstants.SHOW_LOADER});
        instance.post('api/v1/login/', formData)
        .then(res=>{
            console.log(res);
            dispatch({type: ActionConstants.HIDE_LOADER, action: res});
            onSuccess();
        })
        .catch(err=>{
            console.log(err);
            dispatch({type: ActionConstants.ERROR_MSG, action: 'Error'})
            dispatch({type: ActionConstants.HIDE_LOADER, action: err});
        })
    }
}