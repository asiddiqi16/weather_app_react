import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <span className="CurrentTemperatureIcon" id="current-temperature-icon">
        <img src={props.weatherIcon} alt="weather-icon" />
      </span>
      <span className="CurrentTemperatureValue" id="CurrentTemperatureValue">
        {Math.round(props.currentTemperature)}
      </span>
      <span className="CurrentTemperatureUnit">°C</span>
    </div>
  );
}
