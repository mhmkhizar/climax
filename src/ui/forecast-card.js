import * as Helper from "./helper";
import { format } from "date-fns";
import * as Service from "../logic/service";

const forecastSection = document.querySelector(`#forecast-section`);
const dayCardsContainer = document.querySelector(`#forecast-cards-container`);

export function generate({ dayObjsArray, selectedUnitSystem }) {
  forecastSection.classList.remove(`invisible`);
  dayCardsContainer.innerHTML = ``;
  dayObjsArray.forEach((dayObj) => {
    const dayCard = generateDayCard({
      dayName: format(new Date(dayObj.datetime), `EEEE`),
      temp: `${dayObj.feelslike}${Service.getTempUnit(selectedUnitSystem)}`,
      condition: dayObj.conditions,
      iconName: Service.getCardInfo(dayObj.icon).iconName,
    });
    dayCardsContainer.appendChild(dayCard);
  });
}

function generateDayCard({ dayName, temp, condition, iconName }) {
  const infoContainer = generateInfoContainer();
  const dayNameContainer = generateDayNameContainer({ dayName: dayName });
  const tempContainer = generateTempContainer({ temp: temp });
  const conditionAndIconContainer = generateConditionAndIconContainer({
    condition: condition,
    iconName: iconName,
  });
  infoContainer.append(
    dayNameContainer,
    tempContainer,
    conditionAndIconContainer,
  );
  return infoContainer;
}

function generateInfoContainer() {
  return Helper.createElement({
    element: `div`,
    classes: `flex flex-1 flex-col rounded bg-neutral-800 p-3`,
  });
}
function generateDayNameContainer({ dayName }) {
  const dayNameContainer = Helper.createElement({
    element: `div`,
    classes: `border-b border-neutral-700 pb-1.5`,
  });
  const dayNameHeading = Helper.createElement({
    element: `h5`,
    classes: `py-0.5 font-medium`,
    textContent: dayName,
  });
  dayNameContainer.appendChild(dayNameHeading);
  return dayNameContainer;
}

function generateTempContainer({ temp }) {
  const tempContainer = Helper.createElement({
    element: `div`,
    classes: `border-b border-neutral-700 py-1.5`,
  });
  const tempSpan = Helper.createElement({
    element: `span`,
    classes: `text-4xl`,
    textContent: temp,
  });
  tempContainer.appendChild(tempSpan);
  return tempContainer;
}

function generateConditionAndIconContainer({ condition, iconName }) {
  const conditionAndIconContainer = Helper.createElement({
    element: `div`,
    classes: `flex items-start gap-2 pt-1.5`,
  });
  const conditionPara = Helper.createElement({
    element: `p`,
    classes: `flex-1`,
    textContent: condition,
  });
  const iconSpan = Helper.createElement({
    element: `span`,
    classes: `material-symbols-rounded icon-fill !text-xl`,
    textContent: iconName,
  });
  conditionAndIconContainer.append(conditionPara, iconSpan);
  return conditionAndIconContainer;
}
