import React, { useEffect, useState } from "react";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import spock from "../assets/images/icon-spock.svg";
import lizard from "../assets/images/icon-lizard.svg";
import "./Result.css";

function Result(props) {
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const choices = ["rock", "paper", "scissors", "spock", "lizard"];
  const icons = {
    rock: rock,
    paper: paper,
    scissors: scissors,
    spock: spock,
    lizard: lizard,
  };
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
          props.setScore((prevState) => {
            window.localStorage.setItem(
              "score",
              JSON.stringify({
                score: prevState + 1,
              })
            );
            return prevState + 1;
          });
          return "won";
        } else {
          props.setScore((prevState) => {
            window.localStorage.setItem(
              "score",
              JSON.stringify({
                score: prevState - 1,
              })
            );
            return prevState - 1;
          });
          return "lost";
        }
      case 2:
      case 4:
        if (difference > 0) {
          props.setScore((prevState) => {
            window.localStorage.setItem(
              "score",
              JSON.stringify({
                score: prevState - 1,
              })
            );
            return prevState - 1;
          });
          return "lost";
        } else {
          props.setScore((prevState) => {
            window.localStorage.setItem(
              "score",
              JSON.stringify({
                score: prevState + 1,
              })
            );
            return prevState + 1;
          });
          return "won";
        }
      default:
        return "drew";
    }
  }

  return (
    <div>
      <div className={"choices"}>
        <div className={"choice__result"}>
          <div className={`element element-${props.choice}`}>
            <img src={icons[props.choice]} alt={`${props.choice} icon`} />
          </div>
          <div>You picked</div>
        </div>
        <div className={"choice__result"}>
          {computerChoice ? (
            <div className={`element element-${computerChoice}`}>
              <img src={icons[computerChoice]} alt={`${computerChoice} icon`} />
            </div>
          ) : (
            <div className={"blank-icon"}></div>
          )}
          <div>The bot picked</div>
        </div>
      </div>
      {computerChoice && result && (
        <div className={"result"}>
          <div className={"result__text"}>You {result}</div>
          <div className={"btn-reset"} onClick={props.onGameReset}>
            Play again?
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
