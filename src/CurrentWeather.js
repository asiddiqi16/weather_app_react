import React from "react";
import "./CurrentWeather.css";

import CurrentTemperature from "./CurrentTemperature";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div>
        <h1 className="CurrentCity" id="current-city">
          Paris
        </h1>
        <p className="CurrentDetails">
          <span id="current-date">Sunday, 18:32</span>, moderate rain <br />
          Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
        </p>
      </div>
      <CurrentTemperature />
    </div>
  );
}
