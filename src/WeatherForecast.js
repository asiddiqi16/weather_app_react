import React from "react";
import "./WeatherForecast.css";
import FormattedDay from "./FormattedDay";
export default function WeatherForecast(props) {
  function maxTemperature(maxTemp) {
    return `${Math.round(maxTemp)}°`;
  }
  function minTemperature(minTemp) {
    return `${Math.round(minTemp)}°`;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">
            <FormattedDay forecastDay={props.forecast.time} />
          </div>
          <div className="forecastWeatherIcon">
            <img
              src={props.forecast.condition.icon_url}
              alt="weather-icon"
              width={50}
            />
          </div>
          <div className="forecastTemperature">
            <span className="forecastTemperatureMax">
              {maxTemperature(props.forecast.temperature.maximum)}
            </span>
            <span className="forecastTemperatureMin">
              {minTemperature(props.forecast.temperature.minimum)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
