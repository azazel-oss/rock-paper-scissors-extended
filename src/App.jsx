import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Elements from "./components/Elements.jsx";
import Result from "./components/Result.jsx";
import "./App.css";

function App() {
  const [canSelect, setCanSelect] = useState(true);
  const [selectedMove, setSelectedMove] = useState("");
  const [score, setScore] = useState(0);
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
    </React.Fragment>
  );
}

export default App;
