
const API_KEY = "b27afd8e2bff6ff29b4e0dfae5882557";
const BASE_URL = "http://api.weatherstack.com/";


getWeatherData = (city) => {
    const FULL_URL = `${BASE_URL}current?access_key=${API_KEY}&query=${city}`;
    const weatherReport = fetch(FULL_URL);
    return weatherReport.then((response) => {
        return response.json();
    })
}

cityInput = () => {
    const city = document.getElementById('city-search-field').value;
    getWeatherData(city)
    .then((response) => {
        console.log(response);
        showWeatherData(response)
    })
    .catch((error) => {
        console.log(error);
    })
    document.getElementById('city-name').innerText = city;
}

showWeatherData = (weatherData) => {
    document.getElementById('weather-status').innerText = weatherData.current.weather_descriptions[0];
    document.getElementById('temp').innerText = `${weatherData.current.temperature}C`
    document.getElementById('pressure').innerText = `${weatherData.current.pressure}`
    document.getElementById('humidity').innerText = `${weatherData.current.humidity}`
}