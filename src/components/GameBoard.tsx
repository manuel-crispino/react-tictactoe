import React from "react";
import Player from "./Player";
const initialGameBoard:(string|null)[][] = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export function GameBoard(){
    
    return (
        <ol id="game-board">
          {  initialGameBoard.map((row,rowIndex)=>(
            <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol,colIndex)=>(
                <li key={colIndex}><button type="button">{playerSymbol}</button></li>
            ))}
          </ol>
          </li>
        ))}
        </ol>
    )
}