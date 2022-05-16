import "./App.css";
import React, { useState } from "react";

const weatherApi = {
  key: process.env.REACT_APP_WEATHER_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [question, setQuestion] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(
        `${weatherApi.base}weather?q=${question}&units=metric&APPID=${weatherApi.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuestion("");
          console.log(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const dateCreator = (d) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 2
            ? "App winter"
            : "App rain" || weather.main.temp > 20
            ? "App"
            : "App rain"
          : "App rain "
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Location..."
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateCreator(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">
                {Math.round(weather.main.temp)}&deg;c
              </div>
              <div className="weather-text">
                <div className="weather">{weather.weather[0].main}</div>
                <div className="weather-description">
                  {weather.weather[0].description}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
