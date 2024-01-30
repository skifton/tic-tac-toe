import React from "react";
import Square from "../Square";
import { calculateWinner } from "../../utils/calculateWinner";

interface IProps {
  xIsNext: boolean;
  squares: any;
  onPlay: any;
  winner?: string;
}

const Board: React.FC<IProps> = ({ xIsNext, squares, onPlay, winner }) => {
  function handleClick(i: any) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <p
        className={`${
          xIsNext ? "text-[#ff0055]" : "text-[#00cc88]"
        } text-5xl font-semibold pb-20 text-center`}
      >
        {winner ? `Winner: ${winner}` : `Player: ${xIsNext ? "X" : "O"}`}
      </p>
      <div className="">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
