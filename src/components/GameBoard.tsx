import React from "react";

  interface Props {
    onSelectSquare: (rowIndex:number,colIndex:number) => void;
    board: (string | null)[][];
  }

export function GameBoard({onSelectSquare,board}:Props) {
 
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=>onSelectSquare(rowIndex,colIndex)}
                                disabled={playerSymbol !== null}
                                 type="button">{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}