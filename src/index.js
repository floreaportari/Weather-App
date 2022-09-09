import "./styles.css";
import displayData from "./data.js";
import getDateTime from "./time.js";

window.addEventListener("load", displayData("Berlin"));
getDateTime();

const searchBtn = document.querySelector("button");
searchBtn.addEventListener("click", displayData);

window.addEventListener("keydown", (e) => {
  const input = document.querySelector("input");
  if (input.value !== "" && e.key === "Enter") {
    displayData();
  }
});
