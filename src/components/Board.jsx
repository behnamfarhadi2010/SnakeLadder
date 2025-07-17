import React from 'react';

const Board = ({ players, keyPosition, snakes, ladders }) => {
  const board = [];
  for (let row = 9; row >= 0; row--) {
    const rowSquares = [];
    for (let col = 0; col < 10; col++) {
      const squareNum = row % 2 === 0
        ? 100 - (row * 10 + col)
        : 100 - (row * 10 + (9 - col));
      const isPlayer1 = players[0].position === squareNum;
      const isPlayer2 = players[1].position === squareNum;
      const isKey = squareNum === keyPosition;
      const isSnake = squareNum in snakes;
      const isLadder = squareNum in ladders;

      rowSquares.push(
        <div
          key={squareNum}
          className={`square ${isPlayer1 ? 'player1' : ''} ${isPlayer2 ? 'player2' : ''} ${isKey ? 'key' : ''} ${isSnake ? 'snake' : ''} ${isLadder ? 'ladder' : ''}`}
        >
          {squareNum}
          {isPlayer1 && '🚶‍♂️'}
          {isPlayer2 && '🚶‍♀️'}
          {isKey && '🔑'}
          {isSnake && '🐍'}
          {isLadder && '🪜'}
        </div>
      );
    }
    board.push(
      <div key={row} className="row">
        {rowSquares}
      </div>
    );
  }

  return <div className="board">{board}</div>;
};

export default Board;