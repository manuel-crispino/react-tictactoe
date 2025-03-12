import React from "react";
const initialGameBoard:(string|null)[][] = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export function GameBoard(){
    const [gameBoard,setGameBoard]= React.useState(initialGameBoard);

    function handleSelectSquare(rowIndex:number,colIndex:number){
      console.log("clicked");
      setGameBoard((prevGameBoard)=>{
        const updatedBoard = [...prevGameBoard.map(innerArray =>[...innerArray])]
        updatedBoard[rowIndex][colIndex] = "X";
        return updatedBoard;
      });
    }
    return (
        <ol id="game-board">
          {  gameBoard.map((row,rowIndex)=>(
            <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol,colIndex)=>(
                <li key={colIndex}>
                  <button onClick={()=>handleSelectSquare(rowIndex,colIndex)} type="button">{playerSymbol}</button>
                  </li>
            ))}
          </ol>
          </li>
        ))}
        </ol>
    )
}