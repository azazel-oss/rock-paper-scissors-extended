import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Elements from "./components/Elements.jsx";
import Result from "./components/Result.jsx";
import Rules from "./components/Rules.jsx";
import "./App.css";

function App() {
  const [canSelect, setCanSelect] = useState(true);
  const [selectedMove, setSelectedMove] = useState("");
  const [score, setScore] = useState(
    JSON.parse(window.localStorage.getItem("score"))?.score || 0
  );
  function elementSelectHandler(move) {
    setCanSelect(false);
    setSelectedMove(move);
  }
  function gameResetHandler() {
    setCanSelect(true);
    setSelectedMove("");
  }
  return (
    <React.Fragment>
      <Header score={score} />
      <main>
        {canSelect ? (
          <Elements onSelect={elementSelectHandler} />
        ) : (
          <Result
            choice={selectedMove}
            onGameReset={gameResetHandler}
            setScore={setScore}
          />
        )}
      </main>
      <Rules />
    </React.Fragment>
  );
}

export default App;
