const wholeContainer = document.querySelector(".wholeContainer");
const searchBox = document.querySelector(".searchBox");
const weatherBox = document.querySelector(".weatherBox");
const weatherDetails = document.querySelector(".weatherDetails");

searchBox.addEventListener("click", () => {
  const APIkey = "2a208c7c8d5f54c9f15484d6640fc13a";
  const city = document.querySelector(".searchBox input").value;

  if (city == "") return;

  fetch(
    // "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2a208c7c8d5f54c9f15484d6640fc13a"
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
  )
    .then((response) => response.json())
    .then((json) => {
      const image = document.querySelector(".weatherBox img");
      const temperature = document.querySelector(".weatherBox .temperature");
      const description = document.querySelector(".weatherBox .description");
      const humidity = document.querySelector(".weatherDetails .humidity span");
      const wind = document.querySelector(".weatherDetails .windy span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clearsun.jpg";
          break;

        case "Rain":
          image.src = "images/rainycloud.jpg";
          break;
        case "Clouds":
          image.src = "images/rain-sun.jpg";
          break;
        case "Mist":
          image.src = "images/mist.jpg";
        default:
          image.src = "images/clearsun.jpg";
      }
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}km/hr`;
    });
});
