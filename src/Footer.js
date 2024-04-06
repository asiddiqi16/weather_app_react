import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/asiddiqi16"
          target="_blank"
          rel="noreferrer"
        >
          Ariba Siddiqi
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/asiddiqi16/weather_app_react"
          target="_blank"
          rel="noreferrer"
        >
          on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://phenomenal-nasturtium-df6034.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </footer>
  );
}
