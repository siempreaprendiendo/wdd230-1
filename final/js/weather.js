
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weatherCap');
const tempOne = document.querySelector('#futTemp1');
const tempTwo = document.querySelector('#futTemp2');
const tempThree = document.querySelector('#futTemp3');
const day1Icon = document.querySelector('#w-icon1');
const day1Desc = document.querySelector('.cap1');
const day2Icon = document.querySelector('#w-icon2');
const day2Desc = document.querySelector('.cap2');
const day3Icon = document.querySelector('#w-icon3');
const day3Desc = document.querySelector('.cap3');


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

    if (new Date().getDay() <= 3) {
        a = new Date().getDay()+1;
        b = new Date().getDay()+2;
        c = new Date().getDay()+3;
    } else if (new Date().getDay() === 4) {
        a = new Date().getDay()+1;
        b = new Date().getDay()+2;
        c = 0;
    } else if (new Date().getDay() === 5) {
        a = new Date().getDay()+1;
        b = 0;
        c = 1; 
    } else if (new Date().getDay() === 6) {
        a = 0;
        b = 1;
        c = 2; 
    }

    currentTemp.innerHTML = weatherData.current.temp.toFixed(1);
    const imagesrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
    
    tempOne.innerHTML = weatherData.daily[a].temp.day.toFixed(1);
    const imagesrc1 = `https://openweathermap.org/img/w/${weatherData.daily[a].weather[0].icon}.png`;
    const desc1 = weatherData.daily[a].weather[0].description;
    day1Icon.setAttribute('src', imagesrc1);
    day1Icon.setAttribute('alt', desc1);
    day1Desc.textContent = desc1;

    tempTwo.innerHTML = weatherData.daily[b].temp.day.toFixed(1);
    const imagesrc2 = `https://openweathermap.org/img/w/${weatherData.daily[b].weather[0].icon}.png`;
    const desc2 = weatherData.daily[b].weather[0].description;
    day2Icon.setAttribute('src', imagesrc2);
    day2Icon.setAttribute('alt', desc2);
    day2Desc.textContent = desc2;

    tempThree.innerHTML = weatherData.daily[c].temp.day.toFixed(1);
    const imagesrc3 = `https://openweathermap.org/img/w/${weatherData.daily[c].weather[0].icon}.png`;
    const desc3 = weatherData.daily[c].weather[0].description;
    day3Icon.setAttribute('src', imagesrc3);
    day3Icon.setAttribute('alt', desc3);
    day3Desc.textContent = desc3;
}


// 3 day calculation




// Today

const todaysDate = document.querySelector('.today');
const todayName = new Date().toLocaleString('default', {weekday: 'long'});
todaysDate.innerHTML = `<em>${todayName}</em>`;

// 3 day forcast days

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue"];
const dayOne = document.querySelector('.day1');
const dayTwo = document.querySelector('.day2');
const dayThree = document.querySelector('.day3');

dayOne.innerHTML = days[new Date().getDay()+1];
dayTwo.innerHTML = days[new Date().getDay()+2];
dayThree.innerHTML = days[new Date().getDay()+3];










