import { useSelector } from "react-redux";

const Weather = () => {
    const { weatherInfo, message, loading } = useSelector(state => state);

    if (loading) return <div className="infoWeath"><p>Loading...</p></div>;
    if (message) return <div className="infoWeath"><p className="error">{message}</p></div>;

    return (
        <div className='infoWeath'>
            <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
            <p>Temperature: {weatherInfo.temp}°C</p>
            <p>Pressure: {weatherInfo.pressure}</p>
            <p>Sunset: {weatherInfo.sunset}</p>
        </div>
    );
};

export default Weather;