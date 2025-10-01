import * as Service from "../logic/service";
import * as UI from "./ui";
import { format } from "date-fns";

const form = document.querySelector(`#form`);
const citySearchInput = form.querySelector(`#city-search-input`);
const unitsSelectInput = form.querySelector(`#units-select-input`);
const searchBtn = form.querySelector(`#search-btn`);

export function init() {
  searchBtn.addEventListener(`click`, handleSearchBtnClick);
  citySearchInput.addEventListener(`input`, () => {
    citySearchInput.setCustomValidity(``);
  });
}

async function handleSearchBtnClick(e) {
  if (!citySearchInput.value) {
    citySearchInput.setCustomValidity(`Please enter your city here`);
    return;
  }
  e.preventDefault();
  const weatherData = await Service.getWeather({
    location: citySearchInput.value,
    unitSystem: unitsSelectInput.value,
  });
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
    temp: `${weatherData.currentConditions.feelslike}${getTempUnit(unitsSelectInput.value)}`,
    condition: weatherData.currentConditions.conditions,
    desc: weatherData.description,
  });

  citySearchInput.value = ``;
}

function getTempUnit(unitSystem) {
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
