import createReducer from '../lib/createReducer'
import { ERROR_MSG } from '../actions/actionConstants/ActionConstants'

export const error = createReducer(false, {
    [ERROR_MSG](state, action) {
        return {
            ...state,
            errMsg: action.action
        }
    }
});