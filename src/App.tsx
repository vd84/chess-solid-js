import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';
import "./index.css";

type PieceType = "king" | "queen" | "rook" | "bishop" | "pawn" | "knight"

type Piece = Readonly<{
  svg: SVGElement,
  type: PieceType
}>

const App: Component = () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']

  const [playingAsColor, setPlayingAsColor] = createSignal("white")
  const [board, setBoard] = createSignal([
    // Array representing the chessboard and its pieces
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    [], [], [], [], [],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
  ]);


  const getLetters = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    return playingAsColor() === "white" ? letters : letters.reverse()
  }

  const getNumbers = () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']
    return playingAsColor() === "white" ? numbers : numbers.reverse()
  }

  const generateBoard = () => {
    const board = [];

    for (let i = 0; i < 9; i++) {
      for (let j = -1; j < 8; j++) {
        if (j === -1) {
          board.push(renderNumberSquare(7 - i));
          continue;
        }
        if (i === 8) {
          board.push(renderLetterSquare(j));

          continue;
        }
        board.push(renderChessSquare(8 - i, j));
      }
    }

    return board;
  };

  const renderLetterSquare = (index: number) => (
    <div class="letter-square" id={getLetters()[index]}>
      {getLetters()[index]}
    </div>
  );

  const renderNumberSquare = (index: number) => (
    <div class="number-square" id={getNumbers()[index]}>
      {getNumbers()[index]}
    </div>
  );

  const renderChessSquare = (i: number, j: number) => (
    <div
      class={`chess-square ${playingAsColor() === "white"
        ? (i % 2) === (j % 2)
          ? 'bg-white'
          : 'bg-black'
        : (i % 2) === (j % 2)
          ? 'bg-black'
          : 'bg-white'
        }`}
      id={letters[i - 1] + getNumbers()[j]}
    ></div>
  );

  return (
    <div class={styles.App}>
      <header>
        A simple chess engine
      </header>
      <div class='chess-container'>
        <div class="chess-board">
          {
            generateBoard()
          }
        </div>
      </div>
      <button onClick={() => setPlayingAsColor(playingAsColor() === "white" ? "black" : "white")}>
        Play as  {playingAsColor() === "white" ? "black" : "white"}
      </button>
    </div>
  );
};

export default App;
