import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <header className="Form">
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="SearchInput"
          id="search-input"
        />
        <input type="submit" value="Search" className="SearchButton" />
      </form>
    </header>
  );
}
