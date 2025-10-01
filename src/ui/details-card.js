const card = document.querySelector(`#details-card`);
const humiditySpan = card.querySelector(`#details-humidity`);
const dewPointSpan = card.querySelector(`#details-dew-point`);
const cloudCoverSpan = card.querySelector(`#details-cloud-cover
    `);
const windSpeedSpan = card.querySelector(`#details-wind-speed`);
const visibilitySpan = card.querySelector(`#details-visibility`);

export function update({
  humidity,
  dewPoint,
  cloudCover,
  windSpeed,
  visibility,
}) {
  card.classList.remove(`invisible`);
  humiditySpan.textContent = humidity;
  dewPointSpan.textContent = dewPoint;
  cloudCoverSpan.textContent = cloudCover;
  windSpeedSpan.textContent = windSpeed;
  visibilitySpan.textContent = visibility;
}
