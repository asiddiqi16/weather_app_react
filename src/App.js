import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import { ThreeDots } from "react-loader-spinner";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecastWeather, setforecastWeather] = useState(null);
  const [ready, setReady] = useState(null);

  function showTemp(response) {
    let temp = response.data.temperature.current;
    let condition = response.data.condition.description;
    let humidity = response.data.temperature.humidity;
    let windSpeed = response.data.wind.speed;
    let weatherIcon = response.data.condition.icon_url;
    let todaysDate = new Date(response.data.time * 1000);
    let weather = {
      temperature: temp,
      desc: condition,
      humidity: humidity,
      wind: windSpeed,
      icon: weatherIcon,
      date: todaysDate,
    };
    setWeather(weather);
  }
  function showForecast(response) {
    setforecastWeather(response.data.daily);
    setReady(true);
  }

  function showWeather(event) {
    event.preventDefault();
    const apiKey = "483ecb596o30da81tf76d2a4bf19d4a6";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiURL).then(showTemp);

    let apiforecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiforecastURL).then(showForecast);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (ready != null) {
    return (
      <div className="App">
        <header className="Form">
          <form id="search-form" onSubmit={showWeather}>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="SearchInput"
              id="search-input"
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="SearchButton" />
          </form>
        </header>
        <main>
          <CurrentWeather
            cityName={city}
            weather={weather}
            forecast={forecastWeather}
          />
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="Form">
          <form id="search-form" onSubmit={showWeather}>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="SearchInput"
              id="search-input"
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="SearchButton" />
          </form>
        </header>
        <main>
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
        </main>
        <Footer />
      </div>
    );
  }
}
