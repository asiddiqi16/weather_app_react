import React from "react";
import "./CurrentWeather.css";
import { ThreeDots } from "react-loader-spinner";

import CurrentTemperature from "./CurrentTemperature";

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
            <span id="current-date">{props.weather[0].date}</span>,{" "}
            {props.weather[0].desc} <br />
            Humidity: <strong>{props.weather[0].humidity}%</strong>, Wind:{" "}
            <strong>{props.weather[0].wind}km/h</strong>
          </p>
        </div>
        <CurrentTemperature
          weatherIcon={props.weather[0].icon}
          currentTemperature={props.weather[0].temperature}
        />
      </div>
    );
  }
}
