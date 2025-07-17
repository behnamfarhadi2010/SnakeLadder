import React from 'react';

const Controls = ({ rollDice, resetGame, diceRoll, message, players, currentPlayer, turns, gameOver, snakes, ladders }) => {
  return (
    <div className="controls">
      <p><strong>Turn:</strong> {turns}</p>
      <p><strong>Current Player:</strong> Player {currentPlayer + 1}</p>
      <p><strong>Dice:</strong> {diceRoll || '-'}</p>
      <p><strong>Player 1:</strong> Square {players[0].position}, Key: {players[0].hasKey ? 'Yes 🖐️' : 'No'}</p>
      <p><strong>Player 2:</strong> Square {players[1].position}, Key: {players[1].hasKey ? 'Yes 🖐️' : 'No'}</p>
      <p><strong>Status:</strong> {message}</p>
      <div className="snakes-ladders">
        <h3>Snakes</h3>
        <ul>
          {Object.entries(snakes).map(([start, end]) => (
            <li key={start}>Snake: {start} → {end}</li>
          ))}
        </ul>
        <h3>Ladders</h3>
        <ul>
          {Object.entries(ladders).map(([start, end]) => (
            <li key={start}>Ladder: {start} → {end}</li>
          ))}
        </ul>
      </div>
      <button onClick={rollDice} disabled={gameOver}>Roll Dice</button>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Controls;