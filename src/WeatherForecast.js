import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row mt-2">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div classname="WeatherForecast-temperatures">
            <span className="WeatherForecast-max">19°</span>
            <span className="WeatherForecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
