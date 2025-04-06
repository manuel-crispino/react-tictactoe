import React from "react";
const initialGameBoard : (string | null)[][] = [
    [
        null, null, null
    ],
    [
        null, null, null
    ],
    [null, null, null]
];

interface Square {
    row: number;
    col: number;
  }
  
  interface Turn {
    square: Square;
    player: string;
  }
  
  interface Props {
    onSelectSquare: (rowIndex:number,colIndex:number) => void;
    turns: Turn[];
  }

export function GameBoard({onSelectSquare,turns}:Props) {
    let gameBoard = initialGameBoard;
    for(const turn of turns){
        const {square,player} =turn;
        const {row,col} = square; 
        gameBoard[row][col]= player;
    }

 /*    const [gameBoard,
        setGameBoard] = React.useState(initialGameBoard);

    function handleSelectSquare(rowIndex : number, colIndex : number) {
        console.log("clicked");
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
        onSelectSquare();
    } */
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=>onSelectSquare(rowIndex,colIndex)}
                                 type="button">{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}