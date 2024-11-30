import React, { useState, useEffect } from 'react';
import getWeatherForecast from './services/weatherService';
import './styles/App.css'; // Reference to the new CSS file
import {SearchBar} from './components/SearchBar.jsx';


const App = () => {
  const [city, setCity] = useState('Vancouver');  // Default to Vancouver
  const [currentWeather, setCurrentWeather] = useState(null);  // Current weather data
  const [forecast, setForecast] = useState([]);  // 5-day forecast data
  const [error, setError] = useState('');

  // Function to fetch weather and forecast for the given city
  const fetchWeather = async (city) => {
    try {
      const weatherData = await getWeatherForecast(city);

      // Current weather is the first item in the forecast list
      setCurrentWeather(weatherData.list[0]);  // Most recent weather (as "current")

      // Use forecast data for the next 5 days (at regular 24-hour intervals)
      const forecastData = weatherData.list.filter((_, index) => index % 8 === 0).slice(1, 6); 
      setForecast(forecastData);  // Set 5-day forecast
      setError('');
    } catch (error) {
      setError('City not found or error fetching weather');
      setCurrentWeather(null);
      setForecast([]);
    }
  };

  // Fetch Vancouver weather on load
  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div className="app-container">
      <h1>Weather Forecast</h1>


      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => fetchWeather(city)}>Get Forecast</button>
      </div>

      {/* Display any errors */}
      {error && <p className="error">{error}</p>}

      {/* Display Current Weather */}
      {currentWeather && (
        <div className="current-weather">
          <h2>Current Weather in {city}</h2>
          <p>{currentWeather.weather[0].description}</p>
          <p>Temperature: {currentWeather.main.temp} °C</p>
          <p>Humidity: {currentWeather.main.humidity} %</p>
        </div>
      )}

      {/* Display 5-Day Weather Forecast */}
      {forecast.length > 0 && (
        <div className="forecast-container">
          <h2>5-Day Weather Forecast</h2>
          <div className="forecast-grid">
            {forecast.map((day, index) => (
              <div key={index} className="forecast-day">
                <p><strong>Day {index + 1}</strong></p>
                <p>{day.weather[0].description}</p>
                <p>Temp: {day.main.temp} °C</p>
                <p>Humidity: {day.main.humidity} %</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
