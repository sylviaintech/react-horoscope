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
  const urlAddition = "#";

  if (props.allToday !== {}) {
    return (
      <div>
        <div className="pt-2">
          <p>
            Your horoscope for{" "}
            <span className="user-date-main">
              {userDay}, {horoscopeDate}
            </span>
          </p>
          <div className="mobile-shortcuts">
            <p>Go straight to:</p>
            {Object.keys(allToday).map((starSign) => (
              <ul key={starSign}>
                <li sign={allToday[starSign].title}>
                  <a
                    target="_self"
                    href={urlAddition + allToday[starSign].title}
                    className="mobile-shortcuts-link"
                  >
                    {allToday[starSign].title} |
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <Carousel className="my-5 carousel-hide">
          {Object.keys(allToday).map((starSign) => (
            <Carousel.Item key={starSign}>
              <FilledImgs
                sign={allToday[starSign].title}
                class="img-fluid"
                id={allToday[starSign].title}
              />
              <Carousel.Caption>
                <div className="carousel-text-bg">
                  <div className="horoscope-title-carousel">
                    {allToday[starSign].title}
                  </div>
                  <div className="horocope-dates-carousel">
                    ({allToday[starSign].date_range})
                  </div>
                  <p className="user-date">{allToday[starSign].current_date}</p>
                  <p className="horoscope-description-carousel">
                    {allToday[starSign].description}
                  </p>
                </div>
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
