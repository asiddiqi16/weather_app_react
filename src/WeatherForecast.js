import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import FormattedDay from "./FormattedDay";
export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(props.forecast);
  useEffect(() => {
    setForecast(props.forecast);
  }, [props]);
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
            <FormattedDay forecastDay={forecast.time} />
          </div>
          <div className="forecastWeatherIcon">
            <img
              src={forecast.condition.icon_url}
              alt="weather-icon"
              width={50}
            />
          </div>
          <div className="forecastTemperature">
            <span className="forecastTemperatureMax">
              {maxTemperature(forecast.temperature.maximum)}
            </span>
            <span className="forecastTemperatureMin">
              {minTemperature(forecast.temperature.minimum)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
