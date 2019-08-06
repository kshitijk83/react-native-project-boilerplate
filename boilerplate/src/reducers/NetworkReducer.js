import createReducer from '../lib/createReducer';
import {
    INTERNET_AVAILABLE, INTERNET_NOTAVAILABLE,
    CLEAR_DATA,
} from '../actions/actionConstants/ActionConstants'

export const isInternet = createReducer(false, {
    [INTERNET_AVAILABLE](state, action) {
        console.log('Internet Available', state, action)
        return true
    },
    [INTERNET_NOTAVAILABLE](state, action) {
        console.log('Internet Not Available', state, action)
        return false
    },
    [CLEAR_DATA](state, action) {
        return ({})
    }
});