import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api_key, baseURL } from '../utils/constants';


interface WeatherData {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: string;
}

interface WeatherState {
    weatherInfo: Partial<WeatherData>;
    message: string;
    loading: boolean;
}

export const fetchWeatherAction = createAsyncThunk<WeatherData, string, { rejectValue: string }>(
    'weather/fetchWeather',
    async (city, { rejectWithValue }) => {
        try {
            const response = await fetch(`${baseURL}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            return {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
            };
        } catch (error: any) {
            return rejectWithValue(error.message || 'Error getting weather');
        }
    }
);

const initialState: WeatherState = {
    weatherInfo: {},
    message: 'Enter city/country name!',
    loading: false
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherAction.pending, (state) => {
                state.loading = true;
                state.message = 'Loading...';
            })
            .addCase(fetchWeatherAction.fulfilled, (state, action: PayloadAction<WeatherData>) => {
                state.loading = false;
                state.weatherInfo = action.payload;
                state.message = '';
            })
            .addCase(fetchWeatherAction.rejected, (state, action) => {
                state.loading = false;
                state.weatherInfo = {};
                state.message = action.payload as string;
            });
    }
});

export default weatherSlice.reducer;