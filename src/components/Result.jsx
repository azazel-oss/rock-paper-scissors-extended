import React, { useEffect, useState } from "react";

function Result(props) {
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const choices = ["rock", "paper", "scissors", "spock", "lizard"];
  useEffect(() => {
    let timer = setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setResult(decideResult(props.choice, randomChoice));
      setComputerChoice(randomChoice);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  function decideResult(playerChoice, botChoice) {
    const playerIndex = choices.findIndex(
      (element) => element === playerChoice
    );
    const computerIndex = choices.findIndex((element) => element === botChoice);
    const difference = playerIndex - computerIndex;
    switch (Math.abs(difference)) {
      case 1:
      case 3:
        if (difference > 0) {
          props.setScore((prevState) => prevState + 1);
          return "won";
        } else {
          props.setScore((prevState) => prevState - 1);
          return "lost";
        }
      case 2:
      case 4:
        if (difference > 0) {
          props.setScore((prevState) => prevState - 1);
          return "lost";
        } else {
          props.setScore((prevState) => prevState + 1);
          return "won";
        }
      default:
        return "drew";
    }
  }

  return (
    <div>
      <div>You chose {props.choice}</div>
      <div>Computer chose {computerChoice}</div>
      {computerChoice && result && (
        <>
          <div>You {result}</div>
          <div onClick={props.onGameReset}>Play again?</div>
        </>
      )}
    </div>
  );
}

export default Result;
