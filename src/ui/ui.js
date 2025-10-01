import * as Form from "./form";
import * as SummaryCard from "./summary-card";

export function init() {
  Form.init();
}

export function update({
  summaryBgColor,
  summaryTextColor,
  location,
  time,
  date,
  temp,
  iconName,
  iconColor,
  condition,
  desc,
}) {
  SummaryCard.update({
    bgColor: summaryBgColor,
    textColor: summaryTextColor,
    location: location,
    time: time,
    date: date,
    temp: temp,
    iconName: iconName,
    iconColor: iconColor,
    condition: condition,
    desc: desc,
  });
}
