import React, { useState, useEffect } from "react";
import "./CurrentWeather.css";

import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  const [temperature, setTemperature] = useState(
    Math.round(props.weather.temperature)
  );
  useEffect(() => {
    setTemperature(Math.round(props.weather.temperature));
  }, [props]);
  const [metric, setMetric] = useState("temp-units boldtext");
  const [imperial, setImperial] = useState("temp-units");
  function showFaranheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.weather.temperature * (9 / 5) + 32));
    setMetric("temp-units");
    setImperial("temp-units boldtext");
  }
  function showCelsius(event) {
    event.preventDefault();
    setTemperature(Math.round(props.weather.temperature));
    setMetric("temp-units boldtext");
    setImperial("temp-units");
  }

  return (
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
        <span className="CurrentTemperatureIcon" id="current-temperature-icon">
          <img src={props.weather.icon} alt="weather-icon" />
        </span>
        <span className="CurrentTemperatureValue" id="CurrentTemperatureValue">
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
  );
}
