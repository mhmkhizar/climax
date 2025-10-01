import * as Service from "../logic/service";
import * as UI from "./ui";
import { format } from "date-fns";

const form = document.querySelector(`#form`);
const input = form.querySelector(`#city-search-input`);
const searchBtn = form.querySelector(`#search-btn`);

export function init() {
  searchBtn.addEventListener(`click`, handleSearchBtnClick);
}

async function handleSearchBtnClick(e) {
  if (!input.value) return;
  const weatherData = await Service.getWeather({ location: input.value });
  console.log(
    "🚀 ~ form.js:15 ~ handleSearchBtnClick ~ weatherData:",
    weatherData,
  );
  const locationData = await Service.getLocation({
    lat: weatherData.latitude,
    lon: weatherData.longitude,
  });
  UI.update({
    location: `${locationData.address.city}, ${locationData.address.state}`,
    time: format(new Date(), "hh:mm a"),
    date: format(new Date(), "EEEE, MMMM d, yyyy"),
  });
  e.preventDefault();
}
