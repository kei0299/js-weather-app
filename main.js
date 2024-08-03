const weatherForm = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")
const weatherResults = document.getElementById("weather-results")

fetch("https://api.weatherapi.com/v1/current.json?key=07e5ff9f1259439ebd6122540240208&q=kyoto&aqi=no")
    .then(response=>response.json())
    .then(jsonData => console.log(jsonData.location.country))