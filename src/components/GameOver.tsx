import React from "react";
interface Props{
    winner: string | null;
    restart:()=>void;
}
export default function GameOver({winner,restart}:Props){

    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner ?(<p>{winner} won</p>):(<p>It's a draw</p>)  }
            <p>
                <button type="button" onClick={restart}>Rematch!</button>
            </p>
        </div>
    )
}