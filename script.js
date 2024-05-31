// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=04e5610f7a542c90d14270c177a1d8d2

const apiKey = "04e5610f7a542c90d14270c177a1d8d2";

async function showWeather(city) {
  console.log("helllo");
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

  const data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp - 273.15) + "°C";

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".speed").innerHTML = data.wind.speed + "km/h";

  document.querySelector(".weather").style.display = "flex";
}

document.querySelector(".search-btn").addEventListener("click", () => {
  showWeather(document.querySelector(".city-input").value);
});
