import * as Service from "./service";

const form = document.querySelector(`#city-search-form`);
const input = form.querySelector(`#city-search-input`);
const searchBtn = form.querySelector(`#city-search-btn`);

export function init() {
  searchBtn.addEventListener(`click`, handleSearchBtnClick);
}

async function handleSearchBtnClick() {
  if (!input.value.trim()) return;
  const obj = await Service.getWeather(input.value);
  console.log(obj);
}
