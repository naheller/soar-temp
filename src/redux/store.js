import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

const store = createStore(
    rootReducer, 
    inititalState, 
    compose(
        applyMiddleware(thunk), 
        process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        : compose
    )
);

export default store;