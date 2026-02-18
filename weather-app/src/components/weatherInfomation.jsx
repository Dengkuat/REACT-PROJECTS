import React, { useState } from 'react';

export default function WeatherInformation() {
  const [temperature, setTemperature] = useState(null);

  const fetchTemperature = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=-1.95&longitude=30.06&current_weather=true"
      );

      const data = await response.json();
      setTemperature(data.current_weather.temperature);
    } catch (err) {
      console.error('Failed to fetch temperature', err);
    }
  };

  return (
    <div>
      <button
        className='mb-8 border py-2 px-6 rounded-md hover:bg-slate-900 duration-150'
        onClick={fetchTemperature}
      >
        Get Weather
      </button>

      {temperature !== null && <p>Temperature: {temperature}°C</p>}
    </div>
  );
}