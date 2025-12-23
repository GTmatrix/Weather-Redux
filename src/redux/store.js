import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';

const loggerMiddleware = _store => next => action => {
    console.log('Dispatching action:', action);
    return next(action);
};

const store = configureStore({
    reducer: {
        weather: weatherReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;