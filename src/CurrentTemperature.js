import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div className="CurrentTemperature">
      <span className="CurrentTemperatureIcon" id="current-temperature-icon">
        ☀️
      </span>
      <span className="CurrentTemperatureValue" id="CurrentTemperatureValue">
        24
      </span>
      <span className="CurrentTemperatureUnit">°C</span>
    </div>
  );
}
