import getLocation from "./location.js";

export default async function displayData() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${getLocation()}&appid=e3e86caf81827a16d210622a44632411&units=metric`,
      { mode: "cors" }
    );
    const data = await response.json();
    let currentDate = new Date();

    const location = document.querySelector("#cityName");
    const temp = document.querySelector("#temp");
    const windSpeed = document.querySelector("#wind-speed");
    const humidity = document.querySelector("#humidity");
    const visibility = document.querySelector("#visibility");
    const date = document.querySelector("#date");

    date.innerHTML = `${currentDate.toDateString()}`;

    location.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `${data.main.temp.toFixed(1)}°C`;
    windSpeed.innerHTML = `Wind speed: ${data.wind.speed}m/s`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    visibility.innerHTML = `Visibility: ${data.visibility}m`;
  } catch (err) {
    console.log("Error retrieving data!");
  }
}
