import React from "react";

function Header(props) {
  return (
    <header>
      <div>
        <ul>
          <li>Rock</li>
          <li>Paper</li>
          <li>Scissors</li>
          <li>Lizard</li>
          <li>Spock</li>
        </ul>
      </div>
      <div>
        <div>Score</div>
        <div>11</div>
      </div>
    </header>
  );
}

export default Header;
