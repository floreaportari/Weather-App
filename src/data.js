import getLocation from "./location.js";
import * as dotenv from "dotenv";
dotenv.config();
console.log();

export default async function displayData() {
  const apiKey = process.env.API_KEY;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&appid=${apiKey}&units=metric`,
      { mode: "cors" }
    );
    const data = await response.json();

    const location = document.querySelector("#cityName");
    const temp = document.querySelector("#temp");
    const weatherIcon = document.querySelector("#weather-icon");
    const description = document.querySelector("#description");

    const windSpeed = document.querySelector("#wind-speed");
    const humidity = document.querySelector("#humidity");
    const visibility = document.querySelector("#visibility");

    location.innerHTML = `${data.name}, ${data.sys.country}`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    temp.innerHTML = `${data.main.temp.toFixed(1)}°C`;
    description.innerHTML = `${data.weather[0].description}`;
    windSpeed.innerHTML = `Wind speed: ${data.wind.speed}m/s`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    visibility.innerHTML = `Visibility: ${data.visibility}m`;
  } catch (err) {
    console.log("Error retrieving data!");
  }
}
