import React from "react";

export default function Description(props) {
  return (
    <div>
      <div className="horoscope-title-grid">{props.horoscope.title}</div>
      <div className="text-center horoscope-dates-grid">
        ({props.horoscope.date_range})
      </div>
      <div className="my-1 user-date">
        {props.horoscope.current_date}
        {":"}
      </div>
      <p className="text-start horoscope-description-grid">
        {props.horoscope.description}
      </p>
    </div>
  );
}
