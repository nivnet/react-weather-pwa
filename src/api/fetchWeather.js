import axios from 'axios';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '7c50b6ea47e43bfc236c21a02f2e93df';

export const fetchWeather = async (query) => {
    const {
        data
    } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });
    // - Example of API call:
    // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7c50b6ea47e43bfc236c21a02f2e93df
    
    return data
}