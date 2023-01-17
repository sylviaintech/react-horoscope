import axios from "axios";

import React, {useState, useEffect} from "react";

import AllSignsCarousel from "../results/AllSignsCarousel";

export default function FetchData(props) {
  const userDay = props.userDay;
  const isClicked = props.isClicked;

  const [isLoaded, setIsLoaded] = useState(false);
  const [allToday, setAllToday] = useState({});

  useEffect(() => {
    if (isClicked) {
      axiosHoroscopeSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDay]);

  //Full terminal msg for useEffect above
  //React Hook useEffect has missing dependencies: 'axiosHoroscopeSearch' and 'isClicked'.
  //Either include them or remove the dependency array  react-hooks/exhaustive-deps
  //https://stackoverflow.com/questions/55840294

  function ariesURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=aries&day=${userDay}`
    );
  }

  function taurusURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=taurus&day=${userDay}`
    );
  }

  function geminiURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=gemini&day=${userDay}`
    );
  }

  function cancerURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=cancer&day=${userDay}`
    );
  }

  function leoURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=leo&day=${userDay}`
    );
  }

  function virgoURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=virgo&day=${userDay}`
    );
  }

  function libraURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=libra&day=${userDay}`
    );
  }

  function scorpioURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=scorpio&day=${userDay}`
    );
  }

  function sagittariusURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=sagittarius&day=${userDay}`
    );
  }

  function capricornURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=capricorn&day=${userDay}`
    );
  }

  function aquariusURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=aquarius&day=${userDay}`
    );
  }

  function piscesURL() {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=pisces&day=${userDay}`
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
        <div className="container text-center">
          <AllSignsCarousel allToday={allToday} userDay={userDay} />
        </div>
      </div>
    );
  } else {
    whenPageLoads();
    return (
      <div className="container text-center">
        Errrrrr, I need a few seconds for the rest 🙃
        <br />
        Horoscope is incoming...🌠
      </div>
    );
  }
}
