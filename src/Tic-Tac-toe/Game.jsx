

import { useState } from "react";
import Board from './Board.jsx';
export default function Game(){
const[history,setHistory]=useState([Array(9).fill(null)]);
const[currentMove,setCurrentMove]=useState(0);
const isXNext=currentMove%2==0;
const squares=history[currentMove];

function onPlay(nextSquares){
  let nexthistory=[...history.slice(0,currentMove+1),nextSquares];
  setHistory(nexthistory);
  setCurrentMove(nexthistory.length-1);
}

function goTo(move){
  setCurrentMove(move);
}
let display;
let moves=history.map((squares,move)=>{
  if(move>0){
    display=`move to step#${move}`;
  }
  else{
    display=`Game start`;
  }
  return <li key={move}><button onClick={()=>goTo(move)}>{display}</button></li>
})
return(<>
<div>
  {moves}
</div>
  <div>
    <div>
      <Board square={squares} isXNext={isXNext} onPlay={onPlay}/>
    </div>
  </div>
  </>)
}