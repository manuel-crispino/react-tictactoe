import React, { useState } from "react"
import Player from "./components/Player.tsx"
import { GameBoard } from "./components/GameBoard.tsx"

export default function App() {
  const [activePlayer,SetActivePlayer]=useState<string>('X')
 function handleSquare (){

  SetActivePlayer((curActivePlayer)=>curActivePlayer === "X" ? "O":"X");

 }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
      </ol>
    <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSquare}/>
    LOG
    </div>
  )
};

