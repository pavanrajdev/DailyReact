
import { useState } from "react";
import Square from "./Square.jsx";

export default function Board({square,isXNext,onPlay}){

let win=winner(square);
function handleClick(i){
    if(square[i]||win){
        return;
    }
    let nextsquare=square.slice();
    if(isXNext){
        nextsquare[i]=`X`;
    }
    else{
        nextsquare[i]=`O`;
    }
    onPlay(nextsquare);
}
let display;
if(win){
    display=`${win} wonn the match`;
}
else{
    if(isXNext){
        display=`X turn`;
    }
    else{
        display=`O turn`;
    }
}
    return(
        <>
        <div>{display}</div>
         <div>
            <Square value={square[0]} handleClick={()=>handleClick(0)}/>
                <Square value={square[1]} handleClick={()=>handleClick(1)}/>
                    <Square value={square[2]} handleClick={()=>handleClick(2)}/>

         </div>
         <div>
            <Square value={square[3]} handleClick={()=>handleClick(3)}/>
            <Square value={square[4]} handleClick={()=>handleClick(4)}/>
                <Square value={square[5]} handleClick={()=>handleClick(5)}/>
                    
         </div>
         <div>
            <Square value={square[6]} handleClick={()=>handleClick(6)}/>
                <Square value={square[7]} handleClick={()=>handleClick(7)}/>
                    <Square value={square[8]} handleClick={()=>handleClick(8)}/>
         </div>
        </>
       
    )
}

function winner (square){
    let list=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0;i<list.length;i++){
        let [a,b,c]=list[i];
        if(square[a]&&square[a]===square[b]&&square[a]===square[c]){
            return square[a];
        }
    }
    return null;
}