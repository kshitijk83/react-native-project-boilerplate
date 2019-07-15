export default function createReducer(intialState, handlers) {
    return function reducer(state = intialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        }
        else {
            return state
        }
    }
}