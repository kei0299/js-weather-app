const weatherForm = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")
const weatherResults = document.getElementById("weather-results")

const getWeather = () => {
fetch("https://api.weatherapi.com/v1/current.json?key=07e5ff9f1259439ebd6122540240208&q=kyoto&aqi=no")
    .then(response=>response.json())
    .then(jsonData =>
        weatherResults.innerHTML = `
        <div class="results-country">${jsonData.location.country}</div>
        <div class="results-city">${jsonData.location.name}</div>
        <div class="results-temp">${jsonData.current.temp_c}<span>°C</span></div>
        <div class="results-condition">
          <img src=${"https:" + jsonData.current.condition.icon} alt="icon">
          <span>${jsonData.current.condition.text}</span>
        </div>
      </div> 
      `
    )
}