import React from "react"
import Player from "./components/Player.tsx"
import { GameBoard } from "./components/GameBoard.tsx"

export default function App() {
 
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X"/>
        <Player initialName="Player 2" symbol="O"/>
      </ol>
    <GameBoard/>
    LOG
    </div>
  )
};

