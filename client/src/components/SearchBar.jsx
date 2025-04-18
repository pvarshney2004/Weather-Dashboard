import React, { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
    } else {
      alert("Enter the city name...");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city name: "
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
