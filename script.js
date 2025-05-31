

const apiKey = "e1f3eb0af188bc7fb3d647ae5927542f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

const searchBox = document.querySelector(".search-box input ");
const searchBtn = document.querySelector(".search-box button ");
const weatherIcon = document.querySelector(".weather-img");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
     
     if(data.weather[0].main== "Clouds"){
        weatherIcon.src ="weather-app-imgs/clouds.png";
     }
     else if(data.weather[0].main== "Clear"){
        weatherIcon.src ="weather-app-imgs/clear.png";
     }
     else if(data.weather[0].main== "Rain"){
        weatherIcon.src ="weather-app-imgs/rain.png";
     }
     else if(data.weather[0].main== "Drizzle"){
        weatherIcon.src ="weather-app-imgs/drizzle.png";
     }
     else if(data.weather[0].main== "Mist"){
        weatherIcon.src ="weather-app-imgs/mist.png";
     }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
