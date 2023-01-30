import React from "react";
//
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
//
import LinedImgs from "../mapping-imgs/LinedImgs";
import Description from "./Description.js";
//
export default function AllSignsGrid(props) {
  const allToday = props.allToday;

  if (props.allToday !== {}) {
    return (
      <div className="container text-center grid-text">
        <div className="row">
          {Object.keys(allToday).map((starSign) => (
            <div key={starSign} className="col-sm-4">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip className="hover-text">{starSign}</Tooltip>}
              >
                <div>
                  <LinedImgs sign={starSign} />
                </div>
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
