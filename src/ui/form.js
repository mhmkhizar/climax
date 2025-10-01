import * as Service from "../logic/service";
import * as UI from "./ui";
import { format } from "date-fns";
import * as LoadingSpinner from "./loading-spinner";

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
  UI.weatherContent.classList.add(`!hidden`);
  UI.loadingSpinner.classList.remove(`!hidden`);
  LoadingSpinner.animate();
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
    summaryBgColor: Service.getCardInfo(weatherData.currentConditions.icon)
      .bgColor,
    summaryTextColor: Service.getCardInfo(weatherData.currentConditions.icon)
      .textColor,
    location: `${locationData.address.city}, ${locationData.address.state}`,
    time: format(new Date(), "hh:mm a"),
    date: format(new Date(), "EEEE, MMMM d, yyyy"),
    temp: `${weatherData.currentConditions.feelslike}${Service.getTempUnit(unitsSelectInput.value)}`,
    iconName: Service.getCardInfo(weatherData.currentConditions.icon).iconName,
    iconColor: Service.getCardInfo(weatherData.currentConditions.icon)
      .iconColor,
    condition: weatherData.currentConditions.conditions,
    desc: weatherData.description,
    humidity: `${weatherData.currentConditions.humidity} %`,
    dewPoint: `${weatherData.currentConditions.dew} ${Service.getTempUnit(unitsSelectInput.value)}`,
    cloudCover: `${weatherData.currentConditions.cloudcover} %`,
    windSpeed: `${weatherData.currentConditions.windspeed} ${Service.getSpeedUnit(unitsSelectInput.value)}`,
    visibility: `${weatherData.currentConditions.visibility} ${Service.getDistanceUnit(unitsSelectInput.value)}`,
    dayObjsArray: weatherData.days.slice(0, 5),
    selectedUnitSystem: unitsSelectInput.value,
  });

  citySearchInput.value = ``;
}
