import * as Form from "./form";
import * as SummaryCard from "./summary-card";

export function init() {
  Form.init();
}

export function update({ location, time, date, temp, condition, desc }) {
  SummaryCard.update({
    location: location,
    time: time,
    date: date,
    temp: temp,
    condition: condition,
    desc: desc,
  });
}
