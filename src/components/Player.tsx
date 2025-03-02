import React from "react";
import { useState } from "react";
interface Props{
  initialName:string;
  symbol:string;
}

export default function Player ({initialName,symbol}:Props){
  const [isEditing,setIsEditing]= React.useState<boolean>(false);
  function handleClick(){
    setIsEditing((editing)=>!editing);
  }
  function handleChangeEvent(e:React.ChangeEvent<HTMLInputElement>){
    const newValue = e.target.value;
    setPlayerName(newValue);
  }
  const [playerName,setPlayerName]= useState<string>(initialName)
  let editablePlayerName= <span className="player-name" >{playerName}</span>;
  if(isEditing){
    editablePlayerName=<input title="name" 
    onChange={handleChangeEvent} 
    placeholder="" value={playerName} type="text" required />
  };

    return(
        <li>
        <span className="player">
          {editablePlayerName}
        <span className="player-symbol" >{symbol}</span>
        </span>
        <button type="button" 
        onClick={handleClick}>
          {isEditing?("Save"):("Edit")}
          </button>
      </li>
    )
}