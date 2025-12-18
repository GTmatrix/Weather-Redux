import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './actionTypes';
import { baseURL, api_key } from '../utils/constants';

export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch({ type: FETCH_WEATHER_REQUEST });

        fetch(`${baseURL}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => {
                if (!response.ok) throw new Error('City not found');
                return response.json();
            })
            .then(data => {
                dispatch({
                    type: FETCH_WEATHER_SUCCESS,
                    payload: {
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
                    }
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_WEATHER_FAILURE,
                    payload: 'Error getting weather, please check spelling!'
                });
            });
    };
};