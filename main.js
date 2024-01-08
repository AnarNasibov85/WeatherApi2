const url = "https://api.openweathermap.org/data/2.5/weather?";
const id = 'c17bc3b039b1b73de4e0175c6792ff96';
const lang = "az";
const units = 'metric';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const query = url + "q=" + city + "&appid=" + id + "&units=" + units + "&lang=" + lang;

    try {
        const response = await fetch(query);
        const data = await response.json();
        displayWeatherInfo(data);
    } catch (error) {
        console.error('Hata:', error);
        document.getElementById('weather-info').innerHTML = 'Hava durumu bilgileri alınamadı.';
    }
}

function displayWeatherInfo(weatherData) {
    const weatherInfo = `
                <h2>Şeher: ${weatherData.name}</h2>
                <h3>Olke: ${weatherData.sys.country}</h3>
                <h4>Tempratur: ${Math.round(weatherData.main.temp)}°C</h4>
                <h5>Havanin Veziyyeti: ${weatherData.weather[0].description}</h5>
                <p>Koordinatlar: ${weatherData.coord.lat}, ${weatherData.coord.lon}</p>
            `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}