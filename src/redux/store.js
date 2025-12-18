import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { weatherReducer } from './reducer';


const loggerMiddleware = store => next => action => {
    console.log('Dispatching action:', action);
    return next(action);
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    weatherReducer,
    composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
);

export default store;