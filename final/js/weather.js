
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weatherCap');
// const day1Temp = doument.querySelector(".futTemp1");
// const day2Temp = doument.querySelector(".futTemp2");
// const day3Temp = doument.querySelector(".futTemp3");

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=39.26472&lon=-111.6389&units=imperial&exclude=minutely,hourly&appid=5b3201a7353e669490198c7f4c0758ec`;

apiFetch(url);

async function apiFetch(apiURL) {

        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        } 
    } 

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.current.temp.toFixed(1);
    const imagesrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    // day1Temp.innerHTML = weatherData.daily

}



// Day of the week

const todaysDate = document.querySelector(".today");
// const nextDay = document.querySelector(".day")

const todayName = new Date().toLocaleString('default', {weekday: 'long'});


todaysDate.innerHTML = `<em>${todayName}</em>`;

