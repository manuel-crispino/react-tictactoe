import React, { useState } from "react"
import Player from "./components/Player.tsx"
import { GameBoard } from "./components/GameBoard.tsx"
import Log from "./components/Log.tsx";



type GameTurn = {
  square: {
    row: number;
    col: number;
  };
  player: string;
};


export default function App() {

  const [gameTurns,setGameTurns] = useState<GameTurn[]>([]);
  const [activePlayer,setActivePlayer]=useState<string>('X');

 function handleSquare (rowIndex:number,colIndex:number){
  setActivePlayer((curActivePlayer)=>curActivePlayer === "X" ? "O":"X");
  setGameTurns(prevTurns => {
    let currentPlayer = 'X';
    if (prevTurns.length > 0 && prevTurns[0].player === 'X'){
      currentPlayer = 'O'
    };
    const updateTurns = [
      {
        square: {row:rowIndex ,col : colIndex}, 
        player:currentPlayer
      }
      ,...prevTurns
    ];
    return updateTurns;
  });
 }
  return (
    <>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
      </ol>
    <GameBoard turns={gameTurns} onSelectSquare={handleSquare}/>
    </div>
    <Log turns={gameTurns}/>
    </>
  )
};

