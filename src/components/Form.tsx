// @ts-ignore
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherAction } from "../redux/weatherSlice";
import { AppDispatch } from "../redux/store";

const Form = () => {
    const [city, setCity] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();

    const handleButtonSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (city.trim()) {
            dispatch(fetchWeatherAction(city));
            setCity('');
        }
    }

    return (
        <form onSubmit={handleButtonSubmit}>
            <input
                type="text"
                value={city}
                onChange={event => setCity(event.target.value)}
                placeholder="City name..."
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;