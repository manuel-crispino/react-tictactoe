import React from "react"

interface Turn {
    square: {
      row: number;
      col: number;
    };
    player: string;
  }
  
  interface Props {
    turns: Turn[];
  }

export default function Log ({turns}:Props){
  
return (
    <ol id="log">
    {turns.map((turn) =>
    <li key={`${turn.square.col}${turn.square.row}`}>
        {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
    )}
    </ol>
)
};