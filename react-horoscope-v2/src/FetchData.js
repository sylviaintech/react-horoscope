import axios from "axios";

import React, {useState} from "react";

//import Button from "react-bootstrap/Button";

import AllSignsCarousel from "./AllSignsCarousel";

export default function FetchData(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allToday, setAllToday] = useState({});
  const [dayButton, setDayButton] = useState(props.dateOnLoad);

  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  function newDate(event) {
    event.preventDefault();
    debugger;
    setDayButton(event.target.value);

    axiosHoroscopeSearch();
  }

  function horoscopeURL(oneSign) {
    return `https://aztro.sameerkumar.website/?sign=${oneSign}&day=${dayButton}`;
  }

  function ariesURL() {
    return axios.post(horoscopeURL(signs[0]));
  }

  function taurusURL() {
    return axios.post(horoscopeURL(signs[1]));
  }

  function geminiURL() {
    return axios.post(horoscopeURL(signs[2]));
  }

  function cancerURL() {
    return axios.post(horoscopeURL(signs[3]));
  }

  function leoURL() {
    return axios.post(horoscopeURL(signs[4]));
  }

  function virgoURL() {
    return axios.post(horoscopeURL(signs[5]));
  }

  function libraURL() {
    return axios.post(horoscopeURL(signs[6]));
  }

  function scorpioURL() {
    return axios.post(horoscopeURL(signs[7]));
  }

  function sagittariusURL() {
    return axios.post(horoscopeURL(signs[8]));
  }

  function capricornURL() {
    return axios.post(horoscopeURL(signs[9]));
  }

  function aquariusURL() {
    return axios.post(horoscopeURL(signs[10]));
  }

  function piscesURL() {
    return axios.post(horoscopeURL(signs[11]));
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

  function loadingMessage() {
    return (
      <div className="text-center">
        Errrrrr, I need a few seconds 😂🙃 Horoscope incoming...
      </div>
    );
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
          <AllSignsCarousel allToday={allToday} dayButton={dayButton} />
        </div>
      </div>
    );
  } else {
    loadingMessage();
    whenPageLoads();
  }
}
