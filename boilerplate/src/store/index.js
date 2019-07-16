import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
    const enhancer = compose(
        composeWithDevTools(applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ))
    );
    return createStore(reducer, initialState, enhancer)
}
const store = configureStore({})
export default store;