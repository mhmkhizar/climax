import * as Constants from "./constants";
import * as Mapping from "./mapping";

export async function getWeather({ location, unitSystem }) {
  try {
    const resp = await fetch(
      `${Constants.weatherAPI.baseURL}/${location}?key=${Constants.weatherAPI.key}&unitGroup=${unitSystem}`,
    );
    if (!resp.ok) {
      console.error(`Network error.`);
      return null;
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
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

export function getTempUnit(unitSystem) {
  switch (unitSystem) {
    case `metric`:
      return `°C`;
    case `us`:
      return `°F`;
    case `uk`:
      return `°C`;
    default:
      return ``;
  }
}

export function getSpeedUnit(unitSystem) {
  switch (unitSystem) {
    case `metric`:
      return `km/h`;
    case `us`:
      return `mph`;
    case `uk`:
      return `mph`;
    default:
      return ``;
  }
}

export function getDistanceUnit(unitSystem) {
  switch (unitSystem) {
    case `metric`:
      return `km`;
    case `us`:
      return `miles`;
    case `uk`:
      return `miles`;
    default:
      return ``;
  }
}

export function getCardInfo(iconId) {
  return Mapping.weatherCardMapping[iconId];
}
