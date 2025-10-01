const card = document.querySelector(`#summary-card`);
const locationHeading = card.querySelector(`#summary-location`);
const timeSpan = card.querySelector(`#summary-time`);
const datePara = card.querySelector(`#summary-date`);
const tempHeading = card.querySelector(`#summary-temp`);
const iconSpan = card.querySelector(`#summary-icon`);
const conditionHeading = card.querySelector(`#summary-condition`);
const descPara = card.querySelector(`#summary-desc`);

export function update({
  location,
  time,
  date,
  temp,
  iconName,
  iconColor,
  condition,
  desc,
}) {
  locationHeading.textContent = location;
  timeSpan.textContent = time;
  datePara.textContent = date;
  tempHeading.textContent = temp;
  iconSpan.textContent = iconName;
  iconSpan.classList.add(iconColor);
  conditionHeading.textContent = condition;
  descPara.textContent = desc;
}
