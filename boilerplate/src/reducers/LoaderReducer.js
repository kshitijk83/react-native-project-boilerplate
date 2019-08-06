import createReducer from '../lib/createReducer'
import { SHOW_LOADER, HIDE_LOADER } from '../actions/actionConstants/ActionConstants'

export const isLoading = createReducer(false, {
    [SHOW_LOADER](state, action) {
        console.log('Loader Shown', state, action)
        return true;
    },
    [HIDE_LOADER](state, action) {
        console.log('Loader hide', state, action)
        return false;
    }
});