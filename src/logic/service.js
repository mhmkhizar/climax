import * as Constants from "./constants";

export async function getWeather({ location }) {
  try {
    const resp = await fetch(
      `${Constants.weatherAPI.baseURL}/${location}?key=${Constants.weatherAPI.key}`,
    );
    if (!resp.ok) throw new Error("Network error");
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(`Weather API Error: ${error.message}`);
  }
}

export async function getLocation({ lat, lon }) {
  try {
    const resp = await fetch(
      `${Constants.locationAPI.baseURL}?lat=${lat}&lon=${lon}&api_key=${Constants.locationAPI.key}`,
    );
    if (!resp.ok) throw new Error("Network error");
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(`Reverse Geocoding Error: ${error.message}`);
  }
}
