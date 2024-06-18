document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    getWeatherData(location);
});

function getWeatherData(location) {
    const apiKey = '962285c97524a088e7f13272cb3193ea';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    document.querySelector('.loading').style.display = 'flex';
    document.getElementById('get-weather-button').disabled = true;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Invalid location or issue with API call');
        }
        return response.json();
    })
    .then(data => {
        displayWeatherData(data);
        document.querySelector('.loading').style.display = 'none';
        document.getElementById('get-weather-button').disabled = false;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-data').innerHTML = `<p>${error.message}</p>`;
        document.querySelector('.loading').style.display = 'none';
        document.getElementById('get-weather-button').disabled = false;
    });
}

function displayWeatherData(data) {
    const temperatureCelsius = convertToCelsius(data.main.temp);
    const temperatureFahrenheit = convertToFahrenheit(data.main.temp);
    let temperatureValue = temperatureCelsius;
    let temperatureUnit = "°C";
    let toggleButtonText = "Convert to Fahrenheit";

    const weatherData = `
        <h2><u>${data.name}, ${data.sys.country}</u></h2>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Temperature Readings: <span id="temperature">${temperatureValue}</span><span id="temperature-unit">${temperatureUnit}</span> <button id="toggle-button">${toggleButtonText}</button></p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weather-data').innerHTML = weatherData;

    document.getElementById('toggle-button').addEventListener('click', function() {
        if (temperatureUnit === "°C") {
            temperatureValue = temperatureFahrenheit;
            temperatureUnit = "°F";
            toggleButtonText = "Convert to Celsius";
        } else {
            temperatureValue = temperatureCelsius;
            temperatureUnit = "°C";
            toggleButtonText = "Convert to Fahrenheit";
        }
        document.getElementById('temperature').innerHTML = temperatureValue;
        document.getElementById('temperature-unit').innerHTML = temperatureUnit;
        document.getElementById('toggle-button').innerHTML = toggleButtonText;
    });
}

function convertToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

function convertToFahrenheit(kelvin) {
    return Math.round((kelvin - 273.15) * 9 / 5 + 32);
}