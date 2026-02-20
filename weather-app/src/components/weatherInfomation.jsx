import React, { useState } from "react";
import sunImage from '../assets/Screenshot 2026-02-20 at 2.12.07 PM.png'

export default function WeatherInformation() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState("");

  const fetchTemperature = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      setError("");

      // 1️⃣ Fetch coordinates from city name
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );

      const geoData = await geoResponse.json();

      // If city not found
      if (!geoData.results) {
        setError("City not found");
        return;
      }

      const { latitude, longitude } = geoData.results[0];

      // 2️⃣ Fetch weather using coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      const weatherData = await weatherResponse.json();

      setTemperature(weatherData.current_weather.temperature);
    } catch (err) {
      setError("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Country"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border px-4 py-2 rounded-md mr-3"
      />

      <button
        className="mb-8 border py-2 px-6 rounded-md hover:bg-slate-900 duration-150"
        onClick={fetchTemperature}
      >
        Weather like
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {temperature !== null && (
        <p className="mt-4 items-center flex pl-16 text-2xl">Temperature: {temperature}°C</p>
      )}

      <img src={sunImage} alt=""  className="pl-16 mt-16 "/>
    </div>
  );
}