const apikey = "56a03f9c6174d57fd577a66fe74f326c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const cityError = document.querySelector('.city-error'); 
const weather = document.querySelector('.weather');
const weatherimg = document.querySelector('.weather-icon');


async function checkweather(cityname){

    const response = await fetch(apiurl + `q=${cityname}` + `&appid=${apikey}`);
    const result = await response.json();

    if(result.cod == 404){
        cityError.style.display = "block";
        weather.style.display ="none";
    }else{
        cityError.style.display ="none";
        weather.style.display ="flex";

        const city = document.querySelector('.city');    
        const temp = document.querySelector('.temp');    
        const humadity = document.querySelector('.humadity');    
        const wind = document.querySelector('.wind');    

        if(result.weather[0].main == "Rain"){
            weatherimg.src = './assets/rain.png'
        }else if(result.weather[0].main == "Clouds"){
            weatherimg.src = './assets/clouds.png'
        }else if(result.weather[0].main == "Drizzle"){
            weatherimg.src = './assets/drizzle.png'
        }else if(result.weather[0].main == "Mist"){
            weatherimg.src = './assets/Mist.png'
        }else if(result.weather[0].main == "Snow"){
            weatherimg.src = './assets/snow.png'
        }else if(result.weather[0].main == "Clear"){
            weatherimg.src = './assets/clear.png'
        }

        console.log(result);
        city.innerHTML = result.name;
        temp.innerHTML = Math.round(result.main.temp) + `<sup>°C</sup>`;
        humadity.innerHTML = result.main.humidity + '%';
        wind.innerHTML = result.wind.speed + ' km\\h';
    }


}

searchBtn.addEventListener('click',() => {
    if(searchInput.value === ''){
        weather.style.display = 'none';
    }else{
    checkweather(searchInput.value);
    }
});