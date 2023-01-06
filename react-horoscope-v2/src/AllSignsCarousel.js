import React from "react";

import Carousel from "react-bootstrap/Carousel";

import FilledImgs from "./mapping-imgs/FilledImgs";

import AllSignsGrid from "./AllSignsGrid";

export default function AllSignsCarousel(props) {
  const allToday = props.allToday;
  allToday.aries.title = "aries";
  allToday.taurus.title = "taurus";
  allToday.gemini.title = "gemini";
  allToday.cancer.title = "cancer";
  allToday.leo.title = "leo";
  allToday.virgo.title = "virgo";
  allToday.libra.title = "libra";
  allToday.scorpio.title = "scorpio";
  allToday.sagittarius.title = "sagittarius";
  allToday.capricorn.title = "capricorn";
  allToday.aquarius.title = "aquarius";
  allToday.pisces.title = "pisces";

  //console.log(allToday);
  //console.log(allToday.aries.title);

  const dayButton = props.dayButton;
  console.log(dayButton);
  const horoscopeDate = allToday.aries.current_date;

  if (props.allToday !== {}) {
    return (
      <div>
        <div>
          Your horoscope for {dayButton}, {horoscopeDate}
        </div>
        <Carousel className="my-5">
          {Object.keys(allToday).map((starSign) => (
            <Carousel.Item key={starSign}>
              <FilledImgs sign={allToday[starSign].title} />
              <Carousel.Caption>
                <h3>{allToday[starSign].title}</h3>
                <h4>{allToday[starSign].date_range}</h4>
                <h5>{allToday[starSign].current_date}</h5>
                <p>{allToday[starSign].description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <AllSignsGrid allToday={allToday} />
      </div>
    );
  } else {
    return (
      <div className="text-center">
        Errrrrr, I need a few seconds 😂🙃 Horoscope incoming...
      </div>
    );
  }
}
