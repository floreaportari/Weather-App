export default function getLocation() {
  const userInput = document.querySelector("input");
  const city = userInput.value;
  userInput.value = "";
  return city;
}
