import React, { useState } from "react"
import Player from "./components/Player.tsx"
import { GameBoard } from "./components/GameBoard.tsx"
import Log from "./components/Log.tsx";
import { WINNING_COMBINATIONS } from "./winningCombinations.js";
import GameOver from "./components/gameOver.tsx";

const PLAYERS={
  X: "Player 1",
  O: "Player 2"
}

const INITIAL_GAME_BOARD : (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

type GameTurn = {
  square: {
    row: number;
    col: number;
  };
  player: string;
};


export default function App() {

  const [gameTurns,setGameTurns] = useState<GameTurn[]>([]);
  const [players,setPlayers]=useState( PLAYERS );
  const gameBoard = deriveGameBoard(gameTurns);

  function deriveGameBoard(gameTurns){
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array]) ];
    for(const turn of gameTurns){
      const {square,player} =turn;
      const {row,col} = square; 
      gameBoard[row][col]= player;
  }
  return gameBoard;
  }

  function deriveActivePlayer(gameTurns:GameTurn[]){
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
      currentPlayer = 'O'
    };
    return currentPlayer;
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  function deriveWinner(gameBoard,players){
  let winner:any;
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol= gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol &&
       firstSquareSymbol === thirdSquareSymbol)
       {
       winner = players[firstSquareSymbol];
       console.log("you win",winner)
       };
  };
  return winner;
}
const winner = deriveWinner(gameBoard,players)
const hasDraw = gameTurns.length === 9 && !winner;

 function handleSquare (rowIndex:number,colIndex:number){
  setGameTurns(prevTurns => {
    const currentPlayer = deriveActivePlayer(prevTurns);
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

 function handleRematch(){
 setGameTurns([]);
 };

 function handlePlayersName(symbol:string,newName){
  setPlayers(prevPlayers => {
    return{
      ...prevPlayers,
      [symbol]:newName
    };
  })
 }

  return (
    <>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player onChangeName={handlePlayersName} initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"}/>
        <Player onChangeName={handlePlayersName} initialName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"}/>
      </ol>
    {(winner || hasDraw) && <GameOver restart={handleRematch} winner={winner}/>}
    <GameBoard board={gameBoard} onSelectSquare={handleSquare}/>
    </div>
    <Log turns={gameTurns}/>
    </>
  )
};

