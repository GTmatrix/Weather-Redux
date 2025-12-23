import {useState} from "react";
import {useDispatch} from "react-redux";
import { fetchWeatherAction } from "../redux/weatherSlice.js";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleButtonSubmit = event => {
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