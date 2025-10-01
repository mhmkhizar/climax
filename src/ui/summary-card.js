const card = document.querySelector(`#summary-card`);
const locationHeading = card.querySelector(`#summary-location`);
const timeSpan = card.querySelector(`#summary-time`);
const datePara = card.querySelector(`#summary-date`);
const tempHeading = card.querySelector(`#summary-temp`);
const conditionHeading = card.querySelector(`#summary-condition`);
const descPara = card.querySelector(`#summary-desc`);

export function update({ location, time, date, temp, condition, desc }) {
  locationHeading.textContent = location;
  timeSpan.textContent = time;
  datePara.textContent = date;
  tempHeading.textContent = temp;
  conditionHeading.textContent = condition;
  descPara.textContent = desc;
}
