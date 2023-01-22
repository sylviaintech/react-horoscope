import React from "react";

export default function Description(props) {
  return (
    <div>
      <div className="horoscope-title-grid">{props.horoscope.title}</div>
      <p className="text-center horoscope-dates-grid">
        {props.horoscope.date_range}
      </p>
      <p className="text-start horoscope-description-grid">
        {props.horoscope.description}
      </p>
    </div>
  );
}
