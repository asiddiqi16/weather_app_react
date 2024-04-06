import React from "react";
import "./App.css";
import Form from "./Form";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Form />
      <main>
        <CurrentWeather />
      </main>
      <Footer />
    </div>
  );
}
