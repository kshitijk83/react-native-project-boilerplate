import createReducer from '../lib/createReducer';

export const reducer = createReducer({}, {
    ['blah'](state, action) {
        return { ...state, x: ' true' };
    }
});