// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=kolkata.1%2C-0.13';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1ec30dfdafmsh8d4ee659dcd55ddp142d34jsn790b69c1cf23',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    if (!response.ok) {
        document.querySelector('.weather').style.display = "none";
        document.querySelector('.error').style.display = "block";
    }
    else {
        const result = await response.json();
        document.querySelector('.city').innerHTML = result.location.name;
        document.querySelector('.temp').innerHTML = Math.round(`${result.current.temp_c}`) + "°C";
        document.querySelector('.humidity').innerHTML = result.current.humidity + "%";
        document.querySelector('.wind').innerHTML = result.current.wind_kph + " km/h";
        document.querySelector('.text').innerHTML = result.current.condition.text;
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
