import React from "react";

import Carousel from "react-bootstrap/Carousel";

import FilledImgs from "../mapping-imgs/FilledImgs";

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

  const userDay = props.userDay;
  console.log(userDay);
  const horoscopeDate = allToday.aries.current_date;

  if (props.allToday !== {}) {
    return (
      <div>
        <div className="pt-2">
          Your horoscope for{" "}
          <span className="horoscope-date">
            {userDay}, {horoscopeDate}
          </span>
        </div>
        <Carousel className="my-5">
          {Object.keys(allToday).map((starSign) => (
            <Carousel.Item key={starSign}>
              <FilledImgs sign={allToday[starSign].title} />
              <Carousel.Caption>
                <div className="horoscope-title-carousel">
                  {allToday[starSign].title}
                </div>
                <div className="horocope-dates-carousel">
                  {allToday[starSign].date_range}
                </div>
                <div className="horoscope-user-date-carousel">
                  {allToday[starSign].current_date}
                </div>
                <p className="horoscope-description-carousel">
                  {allToday[starSign].description}
                </p>
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
