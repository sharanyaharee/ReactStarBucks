
let weatherStatus = document.getElementById("weather");
const successCallback = (position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      let cityName = data.city.name;
      let temperature = data.list[0].temp.day + "°C";

      weatherStatus.innerText = `${cityName}-${temperature}`.toUpperCase();
    });
};
const errorCallback = (error) => {
  weatherStatus.innerText = "Geo not supported!";
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
