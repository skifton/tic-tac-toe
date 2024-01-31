import React, { useState } from "react";
import GameOver from "./GameOver";
import { calculateWinner } from "../../utils/calculateWinner";
import Board from "../../components/Board";
import Button from "../../components/Button";

const Game: React.FC = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<string>("");
  const [winner, setWinner] = useState<string>("");
  const [xScore, setXScore] = useState<number>(0);
  const [oScore, setOScore] = useState<number>(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    if (nextSquares?.every((square: any) => square !== null)) {
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
      setIsGameOver("DRAW");
    }

    const winner = calculateWinner(nextSquares);

    if (winner) {
      setWinner(winner);

      if (winner === "X") {
        setXScore(xScore + 1);
      } else {
        setOScore(oScore + 1);
      }

      setIsGameOver("WIN");
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
    }
  }

  const restartHandler = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setIsGameOver("");
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="">
        <div className="">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <Button className="absolute top-10 left-10" onClick={restartHandler}>
          Restart
        </Button>
        <div className="absolute top-10 right-10 space-y-4">
          <div className="text-white text-4xl">X: {xScore}</div>
          <div className="text-white text-4xl">O: {oScore}</div>
        </div>
      </div>

      <GameOver
        isEnd={Boolean(isGameOver)}
        restartHandler={restartHandler}
        title={
          isGameOver === "DRAW"
            ? "Draw, try again!"
            : `Congratulations to the player ${winner}!`
        }
      />
    </main>
  );
};

export default Game;
