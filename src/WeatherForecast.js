import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  console.log(props);
  function formatDay(timestamp) {
    let todaysDate = new Date(timestamp * 1000);
    let forecastDays = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thurs",
      "Fri",
      "Sat",
      "Sun",
    ];
    return forecastDays[todaysDate.getDay()];
  }
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">
            {formatDay(props.forecast.forecastDay)}
          </div>
          <div className="forecastWeatherIcon">
            <img
              src={props.forecast.forecastIcon}
              alt="weather-icon"
              width={50}
            />
          </div>
          <div className="forecastTemperature">
            <span className="forecastTemperatureMax">
              {props.forecast.highTemp}°
            </span>
            <span className="forecastTemperatureMin">
              {props.forecast.lowTemp}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
