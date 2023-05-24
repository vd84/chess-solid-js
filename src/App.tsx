import { Component, createSignal } from 'solid-js';
import bdt from './assets/pieces/bdt45.svg'
import blt from './assets/pieces/blt45.svg'
import kdt from './assets/pieces/kdt45.svg'
import klt from './assets/pieces/klt45.svg'
import ndt from './assets/pieces/ndt45.svg'
import nlt from './assets/pieces/nlt45.svg'
import pdt from './assets/pieces/pdt45.svg'
import plt from './assets/pieces/plt45.svg'
import qdt from './assets/pieces/qdt45.svg'
import qlt from './assets/pieces/qlt45.svg'
import rdt from './assets/pieces/rdt45.svg'
import rlt from './assets/pieces/rlt45.svg'

import styles from './App.module.css';
import "./index.css";

type PieceType = "king" | "queen" | "rook" | "bishop" | "pawn" | "knight"

type Piece = Readonly<{
  svg?: string,
  type?: PieceType
}>

type Tile = Readonly<{
  piece?: Piece,
  x: number,
  y: number
}>

const App: Component = () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']

  const [playingAsColor, setPlayingAsColor] = createSignal("white")
  const [selectedTile, setSelectedTile] = createSignal<Tile>()

  const [board, setBoard] = createSignal<Tile[][]>([
    [
      { piece: { svg: rlt, type: "rook" }, x: 0, y: 0 },
      { piece: { svg: nlt, type: "knight" }, x: 1, y: 0 },
      { piece: { svg: blt, type: "bishop" }, x: 2, y: 0 },
      { piece: { svg: qlt, type: "queen" }, x: 3, y: 0 },
      { piece: { svg: klt, type: "king" }, x: 4, y: 0 },
      { piece: { svg: blt, type: "bishop" }, x: 5, y: 0 },
      { piece: { svg: nlt, type: "knight" }, x: 6, y: 0 },
      { piece: { svg: rlt, type: "rook" }, x: 7, y: 0 }
    ],
    [
      { piece: { svg: plt, type: "pawn" }, x: 0, y: 1 },
      { piece: { svg: plt, type: "pawn" }, x: 1, y: 1 },
      { piece: { svg: plt, type: "pawn" }, x: 2, y: 1 },
      { piece: { svg: plt, type: "pawn" }, x: 3, y: 1 },
      { piece: { svg: plt, type: "pawn" }, x: 4, y: 1 },
      { piece: { svg: plt, type: "pawn" }, x: 5, y: 1 },
      { piece: { svg: plt, type: "pawn" }, x: 6, y: 1 },
      { piece: { svg: plt, type: "pawn" }, x: 7, y: 1 }
    ],
    [
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 4, y: 2 },
      { x: 5, y: 2 },
      { x: 6, y: 2 },
      { x: 7, y: 2 }
    ],
    [
      { x: 0, y: 3 },
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 5, y: 3 },
      { x: 6, y: 3 },
      { x: 7, y: 3 }
    ],
    [
      { x: 0, y: 4 },
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 5, y: 4 },
      { x: 6, y: 4 },
      { x: 7, y: 4 }
    ],
    [
      { x: 0, y: 5 },
      { x: 1, y: 5 },
      { x: 2, y: 5 },
      { x: 3, y: 5 },
      { x: 4, y: 5 },
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5 }
    ],
    [
      { piece: { svg: pdt, type: "pawn" }, x: 0, y: 6 },
      { piece: { svg: pdt, type: "pawn" }, x: 1, y: 6 },
      { piece: { svg: pdt, type: "pawn" }, x: 2, y: 6 },
      { piece: { svg: pdt, type: "pawn" }, x: 3, y: 6 },
      { piece: { svg: pdt, type: "pawn" }, x: 4, y: 6 },
      { piece: { svg: pdt, type: "pawn" }, x: 5, y: 6 },
      { piece: { svg: pdt, type: "pawn" }, x: 6, y: 6 },
      { piece: { svg: pdt, type: "pawn" }, x: 7, y: 6 }
    ],
    [
      { piece: { svg: rdt, type: "rook" }, x: 0, y: 7 },
      { piece: { svg: ndt, type: "knight" }, x: 1, y: 7 },
      { piece: { svg: bdt, type: "bishop" }, x: 2, y: 7 },
      { piece: { svg: qdt, type: "queen" }, x: 3, y: 7 },
      { piece: { svg: kdt, type: "king" }, x: 4, y: 7 },
      { piece: { svg: bdt, type: "bishop" }, x: 5, y: 7 },
      { piece: { svg: ndt, type: "knight" }, x: 6, y: 7 },
      { piece: { svg: rdt, type: "rook" }, x: 7, y: 7 }
    ]
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
    <div class={`letter-square ${playingAsColor() === "white" ? '' : 'flipped'}`} id={getLetters()[index]}>
      {getLetters()[index]}
    </div>
  );

  const renderNumberSquare = (index: number) => (
    <div class={`number-square ${playingAsColor() === "white" ? '' : 'flipped'}`} id={getNumbers()[index]}>
      {getNumbers()[index]}
    </div>
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
        boardCopy[i][j] = boardCopy[selectedY][selectedX];
        boardCopy[selectedY][selectedX] = { x: selectedX, y: selectedY };

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
    </div>
  );
};

export default App;
