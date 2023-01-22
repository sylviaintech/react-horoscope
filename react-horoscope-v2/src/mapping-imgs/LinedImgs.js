import aquariusLined from "../symbols/aquarius-line.png";
import capricornLined from "../symbols/capricornus-line.png";
import ariesLined from "../symbols/aries-line.png";
import cancerLined from "../symbols/cancer-line.png";
import geminiLined from "../symbols/gemini-line.png";
import leoLined from "../symbols/leo-line.png";
import libraLined from "../symbols/libra-line.png";
import piscesLined from "../symbols/pisces-line.png";
import sagittariusLined from "../symbols/sagittarius-line.png";
import scorpioLined from "../symbols/scorpio-line.png";
import taurusLined from "../symbols/taurus-line.png";
import virgoLined from "../symbols/virgo-line.png";

const signsMapping = {
  aries: ariesLined,
  taurus: taurusLined,
  gemini: geminiLined,
  cancer: cancerLined,
  leo: leoLined,
  virgo: virgoLined,
  libra: libraLined,
  scorpio: scorpioLined,
  sagittarius: sagittariusLined,
  capricorn: capricornLined,
  aquarius: aquariusLined,
  pisces: piscesLined,
};

const textElaborate = "A colored and filled image of ";

const LinedImgs = (props) => (
  <img
    src={signsMapping[props.sign]}
    className="d-block-center img-thumbnail my-3"
    alt={(textElaborate, props.sign)}
  />
);

export default LinedImgs;
