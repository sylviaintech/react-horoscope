import axios from "axios";

import React, {useState, useEffect} from "react";

import AllSignsCarousel from "./AllSignsCarousel";

export default function FetchData(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allToday, setAllToday] = useState({});
  const [dayButton, setDayButton] = useState(props.dateOnLoad);

  //useEffect(() => {
  // when button clicks, update dayButton and perform new axiosHoroscopeSearch();
  //});

  function newDate(event) {
    event.preventDefault();
    setDayButton(event.target.value);
  }

  function ariesURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=aries&day=${dayButton}`
    );
  }

  function taurusURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=taurus&day=${dayButton}`
    );
  }

  function geminiURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=gemini&day=${dayButton}`
    );
  }

  function cancerURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=cancer&day=${dayButton}`
    );
  }

  function leoURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=leo&day=${dayButton}`
    );
  }

  function virgoURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=virgo&day=${dayButton}`
    );
  }

  function libraURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=libra&day=${dayButton}`
    );
  }

  function scorpioURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=scorpio&day=${dayButton}`
    );
  }

  function sagittariusURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=sagittarius&day=${dayButton}`
    );
  }

  function capricornURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=capricorn&day=${dayButton}`
    );
  }

  function aquariusURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=aquarius&day=${dayButton}`
    );
  }

  function piscesURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=pisces&day=${dayButton}`
    );
  }

  function axiosHoroscopeSearch() {
    Promise.all([
      ariesURL(),
      taurusURL(),
      geminiURL(),
      cancerURL(),
      leoURL(),
      virgoURL(),
      libraURL(),
      scorpioURL(),
      sagittariusURL(),
      capricornURL(),
      aquariusURL(),
      piscesURL(),
    ])
      .then(function (results) {
        setIsLoaded(true);
        collectAll(results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function collectAll(response) {
    setAllToday({
      aries: response[0].data,
      taurus: response[1].data,
      gemini: response[2].data,
      cancer: response[3].data,
      leo: response[4].data,
      virgo: response[5].data,
      libra: response[6].data,
      scorpio: response[7].data,
      sagittarius: response[8].data,
      capricorn: response[9].data,
      pisces: response[10].data,
      aquarius: response[11].data,
    });
  }

  function whenPageLoads() {
    axiosHoroscopeSearch();
  }

  if (isLoaded === true) {
    return (
      <div>
        <div className="mt-5 my-2">
          <button className="mx-1" value="yesterday" onClick={newDate}>
            Yesterday
          </button>
          <button className="mx-1" value="today" onClick={newDate}>
            Today
          </button>
          <button className="mx-1" value="tomorrow" onClick={newDate}>
            Tomorrow
          </button>
        </div>
        <div className="container text-center">
          <AllSignsCarousel allToday={allToday} dayButton={setDayButton} />
        </div>
      </div>
    );
  } else {
    whenPageLoads();
    return (
      <div className="text-center">
        Errrrrr, I need a few seconds 😂🙃 Horoscope incoming...
      </div>
    );
  }
}
