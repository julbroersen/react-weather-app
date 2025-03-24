import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  const apiKey = "63fd08b40a55a7od498ecfac7t28e16f";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row mt-2">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max">19°</span>
            <span className="WeatherForecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
