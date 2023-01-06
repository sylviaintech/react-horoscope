import React from "react";

export default function Description(props) {
  //console.log("test component");
  //console.log(props.horoscope);
  return (
    <span>
      <h4>{props.horoscope.title}</h4>
      <p className="text-center my-3">{props.horoscope.date_range}</p>
      <p className="text-start my-3">{props.horoscope.description}</p>
    </span>
  );
}
