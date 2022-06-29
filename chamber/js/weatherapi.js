const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector('#windspeed');
const windchill = document.querySelector('#windchill');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=Imperial&appid=7671f53ea22020bf2f3a9e4bc7ae05f4`;

apiFetch(url);

async function apiFetch(apiURL) {

        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // temp //
            displayResults(data)
        } else {
            throw Error(await response.text());
        } 
    } 

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong> ${weatherData.main.temp.toFixed(1)}</strong>`;


// ---------------- Windchill --------------------//

    const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;

    windspeed.innerHTML = `Wind Speed: ${weatherData.wind.speed}`;

    if (currentTemp <= 50 && windspeed > 3.0) {
        windchill.innerHTML = `${35.74 + 0.6215 * currentTemp - 35.75 * windspeed ** 0.16}`;
    } else {
        windchill.innerHTML = `N/A`;
    };

}

