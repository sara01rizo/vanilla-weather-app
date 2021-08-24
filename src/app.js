function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "6689484e79257d67b075593fc22c1ad7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
