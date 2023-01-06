import React, {useState} from "react";
//
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
//
import LinedImgs from "./mapping-imgs/LinedImgs";
import Description from "./Description.js";
//
export default function AllSignsGrid(props) {
  const [openDecription, setOpenDecription] = useState(false);
  const allToday = props.allToday;

  if (props.allToday !== {}) {
    return (
      <div className="container my-5 text-center">
        <div className="row">
          {Object.keys(allToday).map((starSign) => (
            <div key={starSign} className="col-3">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">{starSign}</Tooltip>}
              >
                <a
                  className="py-5"
                  onClick={() => setOpenDecription(!openDecription)}
                  aria-controls="horoscope-text"
                  aria-expanded={openDecription}
                  href="#0"
                >
                  <LinedImgs sign={starSign} />
                </a>
              </OverlayTrigger>

              <div>
                <div id="horoscope-text">
                  <Description horoscope={allToday[starSign]} />
                </div>
              </div>
            </div>
          ))}
        </div>
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