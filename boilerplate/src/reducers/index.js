import { combineReducers } from 'redux';
import * as reducer from "./reducer";


export default combineReducers(Object.assign(
    reducer
))