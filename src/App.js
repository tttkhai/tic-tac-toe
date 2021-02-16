import { useState } from "react";
import "./index.css";

const Square = ({ value, onClick }) => {
  return <button className="square" onClick={onClick}>{value}</button>;
};

let calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(squares);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default function App() {
  const [isXNext, setIsX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleclick = (i) => {
    console.log("this being clicked");
    let square = squares.slice();
    if (calculateWinner(square) || square[i]) {
      return;
    }
    square[i] = isXNext ? "X" : "O";
    setIsX(!isXNext);
    setSquares(square);
  };

  const renderSquare = (i) => {
    // return <button className="square" onClick={()=>handleclick(i)}>{squares[i]}</button>;
    return <Square value={squares[i]} onClick={()=>handleclick(i)}/>;
  };

  const isWinner = calculateWinner(squares);

  let status = isWinner
    ? "Winner is: " + isWinner
    : "Next player is: " + (isXNext ? "X" : "O");

  return (
    <div>
      <div>{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
