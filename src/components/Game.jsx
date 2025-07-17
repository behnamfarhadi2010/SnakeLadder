import React, { useState, useEffect } from 'react';
import Board from './Board';
import Controls from './Controls';

const snakes = {
  16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78
};
const ladders = {
  1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100
};

const Game = () => {
  const [players, setPlayers] = useState([
    { id: 1, position: 1, hasKey: false },
    { id: 2, position: 1, hasKey: false },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0); // 0 for Player 1, 1 for Player 2
  const [keyPosition, setKeyPosition] = useState(null);
  const [diceRoll, setDiceRoll] = useState(null);
  const [message, setMessage] = useState('Player 1: Click "Roll Dice" to start!');
  const [turns, setTurns] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Initialize key position
  useEffect(() => {
    const possibleKeyPositions = Array.from({ length: 100 }, (_, i) => i + 1).filter(
      (i) => !(i in snakes) && !(i in ladders)
    );
    const randomKeyPosition = possibleKeyPositions[Math.floor(Math.random() * possibleKeyPositions.length)];
    setKeyPosition(randomKeyPosition);
  }, []);

  const rollDice = () => {
    if (gameOver) return;
    const dice = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(dice);
    setTurns((prev) => prev + 1);

    const player = players[currentPlayer];
    let newPosition = player.position + dice;
    if (newPosition > 100) newPosition = 100;

    // Check for key
    let newHasKey = player.hasKey;
    if (newPosition === keyPosition && !players.some((p) => p.hasKey)) {
      newHasKey = true;
      setMessage(`🎉 Player ${player.id} found the key!`);
    }

    // Check for snakes or ladders
    if (newPosition in snakes) {
      setMessage(`🐍 Player ${player.id} landed on a snake! Sliding to ${snakes[newPosition]}.`);
      newPosition = snakes[newPosition];
    } else if (newPosition in ladders) {
      setMessage(`🪜 Player ${player.id} landed on a ladder! Climbing to ${ladders[newPosition]}.`);
      newPosition = ladders[newPosition];
    } else {
      setMessage(`Player ${player.id} moved to square ${newPosition}.`);
    }

    // Check win condition
    if (newPosition === 100) {
      if (newHasKey) {
        setMessage(`🏆 Player ${player.id} won in ${turns + 1} turns!`);
        setGameOver(true);
      } else {
        setMessage(`❌ Player ${player.id} reached square 100 but no key! Back to start!`);
        newPosition = 1;
        newHasKey = false;
      }
    }

    // Update player state
    setPlayers((prev) =>
      prev.map((p, index) =>
        index === currentPlayer ? { ...p, position: newPosition, hasKey: newHasKey } : p
      )
    );

    // Switch to next player
    if (!gameOver) {
      setCurrentPlayer((prev) => (prev + 1) % 2);
      setTimeout(() => {
        setMessage(`Player ${players[(currentPlayer + 1) % 2].id}: Roll the dice!`);
      }, 1000);
    }
  };

  const resetGame = () => {
    setPlayers([
      { id: 1, position: 1, hasKey: false },
      { id: 2, position: 1, hasKey: false },
    ]);
    setCurrentPlayer(0);
    setDiceRoll(null);
    setTurns(0);
    setGameOver(false);
    setMessage('Player 1: Click "Roll Dice" to start!');
    const possibleKeyPositions = Array.from({ length: 100 }, (_, i) => i + 1).filter(
      (i) => !(i in snakes) && !(i in ladders)
    );
    setKeyPosition(possibleKeyPositions[Math.floor(Math.random() * possibleKeyPositions.length)]);
  };

  return (
    <div className="game">
      <div className="game-info">
        <Controls
          rollDice={rollDice}
          resetGame={resetGame}
          diceRoll={diceRoll}
          message={message}
          players={players}
          currentPlayer={currentPlayer}
          turns={turns}
          gameOver={gameOver}
          snakes={snakes}
          ladders={ladders}
        />
      </div>
      <div className="game-board">
        <Board
          players={players}
          keyPosition={players.some((p) => p.hasKey) ? null : keyPosition}
          snakes={snakes}
          ladders={ladders}
        />
      </div>
    </div>
  );
};

export default Game;