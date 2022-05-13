import "./App.css";
import React, { useState } from "react";
const weatherApi = {
  key: "f275f7ed536cb14807cf3876a63270d1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [question, setQuestion] = useState("");
  const [weather, setWeather] = useState({});

  const search = (E) => {
    if (E.key === "Enter") {
      fetch(
        `${weatherApi.base} weather?q=${question}&units=metric&APPID=${weatherApi.key}`
      );
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
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Location..." />
        </div>
        <div className="location-box">
          <div className="location">Manchester, UK</div>
          <div className="date">{dateCreator(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temperature">10&deg;</div>
          <div className="weather">Cloudy</div>
        </div>
      </main>
    </div>
  );
}

export default App;
