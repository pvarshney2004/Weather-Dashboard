import React from "react";
import './WeatherCard.css'

const WeatherCard = ({ data }) => {
  return (
    <div>
      <div className="weather-card">
        <h2>{data.city}</h2>
        <img src={data.icon} alt={data.weatherCondition} />
        <p>
          <strong>Temperature:</strong> {data.temperature}°C
        </p>
        <p>
          <strong>Condition:</strong> {data.weatherCondition}
        </p>
        <p>
          <strong>Humidity:</strong> {data.humidity}%
        </p>
        <p>
          <strong>Wind Speed:</strong> {data.windSpeed} m/s
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
