export default function getDateTime() {
  const date = document.querySelector("#date");
  let currentDate = new Date();
  let minutes = currentDate.getMinutes();

  let time = `${currentDate.getHours()}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;

  date.innerHTML = `Your current time: ${currentDate
    .toISOString()
    .slice(0, 10)}, ${time}  `;
}
