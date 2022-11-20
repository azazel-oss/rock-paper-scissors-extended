import React, { useState } from "react";
import rules from "../assets/images/image-rules-bonus.svg";
import close from "../assets/images/icon-close.svg";
import "./Rules.css";

function Rules() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className={"rules"}>
      <button className={"btn-rules"} onClick={() => setIsHidden(false)}>
        Rules
      </button>
      <div className={`modal ${isHidden ? "hidden" : ""}`}>
        <div className={"rules__head"}>Rules</div>
        <div className={"rules-img-container"}>
          <img src={rules} alt={"rules"} />
        </div>
        <div className={"close-icon-container"}>
          <span onClick={() => setIsHidden(true)}>
            <img src={close} alt={"close icon"} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Rules;
