import React, { useState, useEffect } from "react";
import "./CurrentWeather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  const [forecastWeather, setforecastWeather] = useState(null);
  const [temperature, setTemperature] = useState(
    Math.round(props.weather.temperature)
  );

  const [metric, setMetric] = useState("temp-units boldtext");
  const [imperial, setImperial] = useState("temp-units");
  const [units, setUnits] = useState("metric");

  function showFaranheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.weather.temperature * (9 / 5) + 32));
    setMetric("temp-units");
    setImperial("temp-units boldtext");
    setUnits("imperial");
  }
  function showCelsius(event) {
    event.preventDefault();
    setTemperature(Math.round(props.weather.temperature));
    setMetric("temp-units boldtext");
    setImperial("temp-units");
    setUnits("metric");
  }

  function showForecast(response) {
    console.log(response);
    setforecastWeather(response.data.daily);
    console.log(forecastWeather);
  }
  useEffect(() => {
    // eslint-disable-next-line
    setTemperature(Math.round(props.weather.temperature));
    const apiKey = "483ecb596o30da81tf76d2a4bf19d4a6";
    // eslint-disable-next-line
    let apiforecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityName}&key=${apiKey}&units=${units}`;
    // eslint-disable-next-line
    axios.get(apiforecastURL).then(showForecast);
  }, [props]);
  useEffect(() => {
    const apiKey = "483ecb596o30da81tf76d2a4bf19d4a6";
    // eslint-disable-next-line
    let apiforecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityName}&key=${apiKey}&units=${units}`;
    // eslint-disable-next-line
    axios.get(apiforecastURL).then(showForecast);
  }, [units]);
  if (forecastWeather != null) {
    return (
      <div className="WeatherInfo">
        <div className="CurrentWeather">
          <div>
            <h1 className="CurrentCity" id="current-city">
              {props.cityName}
            </h1>
            <p className="CurrentDetails">
              <span id="current-date">
                <FormattedDate todaysDate={props.weather.date} />
              </span>
              , {props.weather.desc} <br />
              Humidity: <strong>{props.weather.humidity}%</strong>, Wind:{" "}
              <strong>{props.weather.wind}km/h</strong>
            </p>
          </div>
          <div className="CurrentTemperature">
            <span
              className="CurrentTemperatureIcon"
              id="current-temperature-icon"
            >
              <img src={props.weather.icon} alt="weather-icon" />
            </span>
            <span
              className="CurrentTemperatureValue"
              id="CurrentTemperatureValue"
            >
              {temperature}
            </span>
            <span className="CurrentTemperatureUnit">
              <a
                href="/"
                className={metric}
                id="temp-units-C"
                onClick={showCelsius}
              >
                °C{" "}
              </a>
              <span className="temp-units">|</span>
              <a
                href="/"
                className={imperial}
                id="temp-units-F"
                onClick={showFaranheit}
              >
                °F{" "}
              </a>
            </span>
          </div>
        </div>
        <div className="foreCastDetails">
          {forecastWeather.map(function (forecastDetails, index) {
            if (index < 6) {
              return (
                <div className="weatherForecastDetails" key={index}>
                  <WeatherForecast forecast={forecastDetails} />
                </div>
              );
            } else {
              return <div className="weatherForecastDetails"></div>;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "483ecb596o30da81tf76d2a4bf19d4a6";
    let apiforecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityName}&key=${apiKey}&units=${units}`;

    axios.get(apiforecastURL).then(showForecast);
  }
}
