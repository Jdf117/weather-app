

const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY; // Replace with your actual OpenWeatherMap API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const getWeatherForecast = async (city) => {
  const url = `${baseUrl}?q=${city}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Weather data could not be fetched');
  }
  const data = await response.json();
  return data;
};

export default getWeatherForecast;
