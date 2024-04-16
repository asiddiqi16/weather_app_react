import React from "react";

export default function formatDay(props) {
  let todaysDate = new Date(props.forecastDay * 1000);
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
  return (
    <div className="formattedDay">{forecastDays[todaysDate.getDay()]}</div>
  );
}
