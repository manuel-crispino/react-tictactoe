import React from "react";
interface Props{
  name:string;
  symbol:string;
}

export default function Player ({name,symbol}:Props){
  const [isEditing,setIsEditing]= React.useState<boolean>(false);
  function handleClick(){
    setIsEditing((editing)=>!editing);
  }

  let playerName= <span className="player-name" >{name}</span>;
  if(isEditing){
    playerName=<input title="name" placeholder="" value={name} type="text" required />
  };

    return(
        <li>
        <span className="player">
          {playerName}
        <span className="player-symbol" >{symbol}</span>
        </span>
        <button type="button" 
        onClick={handleClick}>
          {isEditing?("Save"):("Edit")}
          </button>
      </li>
    )
}