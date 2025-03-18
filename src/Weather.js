import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city"
              className="search-bar form-control w-100"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="search-button btn w-100"
            />
          </div>
        </div>
      </form>
      <h1>Halifax</h1>
      <ul>
        <li>Tuesday 17:00</li>
        <li>Partly sunny</li>
      </ul>
      <div className="row">
        <div className="col-6 mt-3">
          <p>
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="lightpink"
              size={58}
              animate="true"
            />{" "}
            <span className="temperature">6</span>
            <span className="units">°C</span>
          </p>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Precipitation:</li>
            <li>Humidity:</li>
            <li>Wind: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
