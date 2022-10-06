const SERVER_DOMAIN = 'https://632519874cd1a2834c394f69.mockapi.io/api';

export const getColorPalettes = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/color-palettes`);
    return response.json();
  } catch {
    throw new Error('could not fetch color palettes');
  }
};

export const getTags = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/tags`);
    return response.json();
  } catch {
    throw new Error('could not fetch tags');
  }
};

export const getUbication = async (latitude, longitude) => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy&hourly=temperature_2m,windspeed_10m`);
    return response.json();
  } catch {
    throw new Error('could not fetch ubication');
  }
};
