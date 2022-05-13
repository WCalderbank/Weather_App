import "./App.css";
import React from "react";
const weatherApi = {
  key: "f275f7ed536cb14807cf3876a63270d1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const dateCreator = (d) => {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
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
      </main>
    </div>
  );
}

export default App;
