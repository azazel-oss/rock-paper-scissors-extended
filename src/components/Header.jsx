import React from "react";
import logo from "../assets/images/logo-bonus.svg";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <div>
        <img src={logo} alt={"rock paper scissors logo"} />
      </div>
      <div className={"scorecard"}>
        <div className={"scorecard__title"}>Score</div>
        <div className={"scorecard__score"}>{props.score}</div>
      </div>
    </header>
  );
}

export default Header;
