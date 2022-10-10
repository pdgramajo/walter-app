export const getWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy&hourly=temperature_2m,windspeed_10m`);
      return response.json();
    } catch {
      throw new Error('could not fetch ubication');
    }
  };