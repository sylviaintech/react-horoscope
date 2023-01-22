import aquariusFilled from "../symbols/aquarius.png";
import capricornFilled from "../symbols/capricornus.png";
import ariesFilled from "../symbols/aries.png";
import cancerFilled from "../symbols/cancer.png";
import geminiFilled from "../symbols/gemini.png";
import leoFilled from "../symbols/leo.png";
import libraFilled from "../symbols/libra.png";
import piscesFilled from "../symbols/pisces.png";
import sagittariusFilled from "../symbols/sagittarius.png";
import scorpioFilled from "../symbols/scorpio.png";
import taurusFilled from "../symbols/taurus.png";
import virgoFilled from "../symbols/virgo.png";

const signsMapping = {
  aries: ariesFilled,
  taurus: taurusFilled,
  gemini: geminiFilled,
  cancer: cancerFilled,
  leo: leoFilled,
  virgo: virgoFilled,
  libra: libraFilled,
  scorpio: scorpioFilled,
  sagittarius: sagittariusFilled,
  capricorn: capricornFilled,
  aquarius: aquariusFilled,
  pisces: piscesFilled,
};

const imgFluid = "img-fluid";
const textElaborate = "A lined image showing the symbol for ";

const FilledImgs = (props) => (
  <img
    src={signsMapping[props.sign]}
    className={(props.className, imgFluid)}
    alt={(textElaborate, props.alt)}
  />
);

export default FilledImgs;
