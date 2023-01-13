import React, {useState} from "react";

import FetchData from "./FetchData";

export default function UserSelects() {
  const [dayButton, setDayButton] = useState("today");
  const [isClicked, setIsClicked] = useState();

  function newDate(event) {
    event.preventDefault();
    setDayButton(event.target.value);
    setIsClicked(true);
  }

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
      <FetchData userDay={dayButton} isClicked={isClicked} />
    </div>
  );
}
