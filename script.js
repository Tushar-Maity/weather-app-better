

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const URL = "https://api.openweathermap.org/data/2.5/weather";

getWeatherData = (city) => {
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) => {
        return response.json();
    })
}

cityInput = () => {
    const city = document.getElementById('city-search-field').value;
    getWeatherData(city)
    .then((response) => {
        // console.log(response);
        showWeatherReport(response);
    })
    .catch((error) => {
        console.log(error);
    })
    document.getElementById('city-name').innerText = city;
}


showWeatherReport = (weatherData) => {
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('pressure').innerText = weatherData.main.pressure;
    document.getElementById('humidity').innerText = weatherData.main.humidity;
}