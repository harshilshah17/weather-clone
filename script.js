let weather = {
  apikey: "1e5413a1745bfaa539f9f24d71afa95b",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("No weather data found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data))
      .catch((error) => {
        alert(error.message);
      });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/hr";
    document.querySelector(".weather").classList.remove("loading");
    this.updateBackgroundImage(description);
  },
  updateBackgroundImage: function (description) {
    const weatherConditions = {
      "clear sky": "url('images/clear.jpg')",
      "few clouds": "url('images/few-clouds.jpg')",
      "scattered clouds": "url('images/scattered-clouds.jpg')",
      "broken clouds": "url('images/broken-clouds.jpg')",
      "shower rain": "url('images/shower-rain.jpg')",
      "rain": "url('images/rain.jpg')",
      "thunderstorm": "url('images/thunderstorm.jpg')",
      "snow": "url('images/snow.jpg')",
      "mist": "url('images/mist.jpg')",
      "overcast clouds": "url('images/overcast-clouds.jpg')"
    };

    document.body.style.backgroundImage = weatherConditions[description] || "url('images/default.jpg')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Delhi");
