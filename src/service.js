export async function getWeather(location) {
  const baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
  const key = `GQ2UPGPDFMWDWQ6GGVXXB8Y7S`;
  try {
    const response = await fetch(`${baseURL}/${location}?key=${key}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Weather API request failed ${error.message}`);
  }
}
