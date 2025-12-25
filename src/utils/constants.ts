export const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
export const api_key = import.meta.env.VITE_WEATHER_API_KEY; //Ругается но работает...
if (!import.meta.env.VITE_WEATHER_API_KEY) {
    console.warn("Error: No API key in .env file!");
}