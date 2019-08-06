import { combineReducers } from 'redux';
import * as NetworkReducer from "./NetworkReducer";
import * as LoaderReducer from './LoaderReducer';
import * as ErrorReducer from './ErrorReducer';

export default combineReducers(Object.assign(
    NetworkReducer,
    LoaderReducer,
    ErrorReducer,
))