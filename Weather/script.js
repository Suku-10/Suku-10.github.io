const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1ec30dfdafmsh8d4ee659dcd55ddp142d34jsn790b69c1cf23',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    // let cityname = document.getElementById("cityname")
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp

            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like

            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

// document.getElementsByClassName("weather")[0].computedStyleMap.color="white";