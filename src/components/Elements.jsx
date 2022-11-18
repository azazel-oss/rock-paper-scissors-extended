import React from "react";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";

function Elements(props) {
  return (
    <div>
      <div className={"chasis"}></div>
      <div
        onClick={() => props.onSelect("rock")}
        className="element element-rock"
      >
        <img src={rock} alt={"rock"} />
      </div>
      <div
        onClick={() => props.onSelect("paper")}
        className="element element-paper"
      >
        <img src={paper} alt={"paper"} />
      </div>
      <div
        onClick={() => props.onSelect("scissors")}
        className="element element-scissors"
      >
        <img src={scissors} alt={"scissors"} />
      </div>
      <div
        onClick={() => props.onSelect("lizard")}
        className="element element-lizard"
      >
        <img src={lizard} alt={"lizard"} />
      </div>
      <div
        onClick={() => props.onSelect("spock")}
        className="element element-spock"
      >
        <img src={spock} alt={"spock"} />
      </div>
    </div>
  );
}

export default Elements;
