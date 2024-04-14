import React from "react";
import "./CurrentWeather.css";
import { ThreeDots } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  if (props.weather === null) {
    return (
      <div className="Loading">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#885df1"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather">
        <div>
          <h1 className="CurrentCity" id="current-city">
            {props.city}
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
            {Math.round(props.weather.temperature)}
          </span>
          <span className="CurrentTemperatureUnit">°C</span>
        </div>
      </div>
    );
  }
}
