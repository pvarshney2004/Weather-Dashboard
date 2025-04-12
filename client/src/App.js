import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  
  const fetchData = async (city) => {
    setLoading(true);
    setError("");
    setWeatherData(null);
    try {
      const response = await axios.get(
        `http://localhost:4000/weather?city=${city}`
      );
      setWeatherData(response.data);
    } catch (err) {
      if (err.response.status === 404) {
        setError("City not found. Please try with diffrent name.");
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Weather Information Dashboard</h1>
      <SearchBar onSearch={fetchData} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
