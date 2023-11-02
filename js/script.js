//33c62e271dfad296e21e73c8dda3a11a
//Variaveis
const apiKey = "2ac36586912c94e6d8b4db038c12ec3d";
const apiCountryURL= "https://flagsapi.com/BE/flat/png/"


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const WeatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
//Funções
const GetWeatherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data
}


const ShowWeatherData = async (city) =>{
    const data = await GetWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    WeatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`
};


//Eventos
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()

    const city = cityInput.value;

  ShowWeatherData(city);  
})