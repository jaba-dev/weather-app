window.addEventListener("load", function () {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description")
  let temperatureDegree = document.querySelector(".temperature-degree")
  let locationTimezone = document.querySelector(".location-timezone")

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=d7a3d1e78f67d26675cc6ce8d41b7167`;
      fetch(api)
        .then(response => {
          return response.json()
        })
        .then(data => {
          const icon = data.weather[0].icon
          let temp = data.main.temp
          temp = temp - 273.15
          temp = temp.toFixed(1)
          let description = data.weather[0].description
          temperatureDegree.textContent = temp
          temperatureDescription.textContent = description
          locationTimezone.textContent = data.name

        })
    })
  }
})


/*
const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d7a3d1e78f67d26675cc6ce8d41b7167`;
*/ 