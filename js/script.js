//33c62e271dfad296e21e73c8dda3a11a
//Variaveis
const apiKey = "33c62e271dfad296e21e73c8dda3a11a";
const apiCountryURL= "https://flagsapi.com/BE/flat/png/"


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("description");
const WeatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
//Funções
const GetWeatherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    console.log(data)
}


const ShowWeatherData = (city) =>{
    GetWeatherData(city)
};


//Eventos
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()

    const city = cityInput.value;

  ShowWeatherData(city);  
})