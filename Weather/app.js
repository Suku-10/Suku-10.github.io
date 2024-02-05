const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=93919d529a0e2b23622bc32d0d25d271`);
    if (!response.ok) {
        document.querySelector('.weather').style.display = "none";
        document.querySelector('.error').style.display = "block";
    }
    else {
        const result = await response.json();
        document.querySelector('.city').innerHTML = result.name;
        document.querySelector('.temp').innerHTML = Math.round(`${result.main.temp}`) + "°C";
        document.querySelector('.text').innerHTML = result.weather[0].main;
        document.querySelector('.humidity').innerHTML = result.main.humidity + "%";
        document.querySelector('.wind').innerHTML = result.wind.speed + " km/h";
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
        if (result.weather[0].main == 'Snow') {
            weatherIcon.src = 'images/snow.png'
        } else if (result.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png'
        } else if (result.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png'
        } else if (result.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png'
        } else if (result.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png'
        } else if (result.weather[0].main == 'Clouds') {
            weatherIcon.src = 'images/clouds.png'
        } else {
            weatherIcon.src = 'images/sun.png'
        }
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
