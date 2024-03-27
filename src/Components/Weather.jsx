import React, { useState } from "react";
import "./Weather.css";
import humidity_icon from "./Assets/humidity.png";
import wind_icon from "./Assets/wind.png";
import cloud_icon from "./Assets/cloud.png";
import clear_icon from "./Assets/clear.png";
import drizzle_icon from "./Assets/drizzle.png";
import rain_icon from "./Assets/rain.png";
import snow_icon from "./Assets/snow.png";

function Weather() {
  let api_key = "905e6ecd98f7727cd36e479533bc8c5f";
  const [icon, setIcon] = useState(clear_icon);

  const search = async () => {
    const element = document.getElementsByClassName("search-bar");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rail");
    const temp = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/hr";
    temp[0].innerHTML = data.main.temp + "*C";
    location[0].innerHTML = data.name;

    if (data?.weather[0]?.icon === "01n" || data?.weather[0]?.icon === "01d") {
      setIcon(clear_icon);
    } else if (
      data.weather[0].icon === "02n" ||
      data.weather[0].icon === "02d"
    ) {
      setIcon(cloud_icon);
    } else if (
      data.weather[0].icon === "03n" ||
      data.weather[0].icon === "03d"
    ) {
      setIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04n" ||
      data.weather[0].icon === "04d"
    ) {
      setIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09n" ||
      data.weather[0].icon === "05d"
    ) {
      setIcon(rain_icon);
    } else if (
      data.weather[0].icon === "10n" ||
      data.weather[0].icon === "10d"
    ) {
      setIcon(rain_icon);
    } else if (
      data.weather[0].icon === "13n" ||
      data.weather[0].icon === "13d"
    ) {
      setIcon(snow_icon);
    } else {
      setIcon(clear_icon);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="search-bar" placeholder="Search" />
        <div className="search-icon">
          <i
            onClick={() => {
              search();
            }}
            class="fa fa-search"
          ></i>
        </div>
      </div>
      <div className="weather-image">
        <img src={icon} alt="" />
      </div>
      <div className="weather-temp">
        <p className="temp">24 c</p>
      </div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={wind_icon} alt="" />
          <div className="data">
            <div className="wind-rail">54 km/hr</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
        <div className="element">
          <img src={humidity_icon} alt="" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
