import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';
import "./index.css";
import { STARTING_POS } from './chess/engine';
import LetterSquare from './components/letterSquare';
import NumberSquare from './components/numberSquare';
import WebSocketConnection from './components/websocketConnection';

type PieceType = "king" | "queen" | "rook" | "bishop" | "pawn" | "knight"

type Piece = Readonly<{
  svg?: string,
  type?: PieceType
}>

export type Tile = {
  piece?: Piece,
  x: number,
  y: number
}

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']

const App: Component = () => {


  const [playingAsColor, setPlayingAsColor] = createSignal("white")
  const [selectedTile, setSelectedTile] = createSignal<Tile>()

  const [board, setBoard] = createSignal<Tile[][]>(STARTING_POS);

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

    for (let i = -1; i < 9; i++) {
      for (let j = -1; j < 9; j++) {
        if (j === -1 || j === 8) {
          board.push(renderNumberSquare(7 - i));
          continue;
        }
        if (i === 8 || i === -1) {
          board.push(renderLetterSquare(j));
          continue;
        }
        board.push(renderChessSquare(7 - i, j));
      }
    }

    return board;
  };

  const renderLetterSquare = (index: number) => (
    <LetterSquare getLetters={getLetters()} index={index} playingAsColor={playingAsColor()} />
  );

  const renderNumberSquare = (index: number) => (
    <NumberSquare getNumbers={getNumbers()} index={index} playingAsColor={playingAsColor()} />
  );

  const renderChessSquare = (i: number, j: number) => {
    const handleClick = () => {
      if (selectedTile()) {
        const selectedX = selectedTile()?.x;
        const selectedY = selectedTile()?.y;

        if (selectedX === undefined || selectedY === undefined) {
          console.log("Something went really wrong...")
          return
        }

        const boardCopy = [...board()];

        boardCopy[i][j].piece = boardCopy[selectedY][selectedX].piece;
        boardCopy[selectedY][selectedX].piece = undefined;

        setSelectedTile(undefined);
        setBoard(boardCopy);
      } else if (board()[i][j].piece) {
        setSelectedTile(board()[i][j]);
      }
    };

    const isTileSelected = () => {
      return selectedTile() === board()[i][j];
    };

    return (
      <div
        class={`chess-square ${(i % 2) === (j % 2) ? 'bg-black' : 'bg-white'} ${playingAsColor() === "white" ? '' : 'flipped'} ${isTileSelected() ? 'selected' : ''}`}
        id={getLetters()[j] + getNumbers()[i]}
        onClick={handleClick}
      >
        {board()[i] && board()[i][j] && (
          <img src={board()[i][j]?.piece?.svg} alt="" />
        )}
      </div>
    );
  };

  return (
    <div class={styles.App}>
      <header>
        A simple chess engine
      </header>
      <div class='chess-container'>
        <div class={playingAsColor() === "white" ? "chess-board" : "chess-board flipped"}>
          {
            generateBoard()
          }
        </div>
      </div>
      <button onClick={() => setPlayingAsColor(playingAsColor() === "white" ? "black" : "white")}>
        Play as  {playingAsColor() === "white" ? "black" : "white"}
      </button>
      <WebSocketConnection />
    </div>
  );
};

export default App;
