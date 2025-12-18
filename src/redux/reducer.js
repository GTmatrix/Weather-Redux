import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './actionTypes';

const initialState = {
    weatherInfo: {},
    message: 'Enter city/country name!',
    loading: false
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return { ...state, loading: true, message: 'Loading...' };
        case FETCH_WEATHER_SUCCESS:
            return { ...state, loading: false, weatherInfo: action.payload, message: '' };
        case FETCH_WEATHER_FAILURE:
            return { ...state, loading: false, weatherInfo: {}, message: action.payload };
        default:
            return state;
    }
};