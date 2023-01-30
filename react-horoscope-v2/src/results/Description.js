import React from "react";

export default function Description(props) {
  function backToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className="horoscope-title-grid" id={props.horoscope.title}>
        {props.horoscope.title}
      </div>
      <div className="text-center horoscope-dates-grid">
        ({props.horoscope.date_range})
      </div>
      <div className="my-1 user-date">
        {props.horoscope.current_date}
        {":"}
      </div>
      <p className="horoscope-description-grid">
        {props.horoscope.description}
      </p>
      <p className="top-page">
        <button className="top-page-link" onClick={backToTop}>
          Back to top
        </button>
      </p>
    </div>
  );
}
