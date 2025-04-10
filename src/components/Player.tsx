import React from "react";
import { useState } from "react";
interface Props{
  initialName:string;
  symbol:string;
  isActive: boolean;
  onChangeName:(symbol:string , playerName:string)=>void;
}

export default function Player ({initialName,symbol,isActive,onChangeName}:Props){
  const [isEditing,setIsEditing]= React.useState<boolean>(false);
  function handleClick(){
    setIsEditing((editing)=>!editing);
    if (isEditing){
    onChangeName(symbol,playerName)};
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
        <li className={isActive ? "active":undefined}>
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