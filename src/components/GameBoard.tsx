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
interface Props{
  onSelectSquare: ()=>void;
  activePlayerSymbol:string;
}

export function GameBoard({onSelectSquare,activePlayerSymbol}:Props) {
    const [gameBoard,
        setGameBoard] = React.useState(initialGameBoard);

    function handleSelectSquare(rowIndex : number, colIndex : number) {
        console.log("clicked");
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
        onSelectSquare();
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}
                                 type="button">{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}