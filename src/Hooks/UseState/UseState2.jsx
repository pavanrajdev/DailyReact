
//example of useState on objects and we can use same for arrays

import { useState } from "react"


export default function UseState2(){

    const[details,setDetails]=useState({counter:0,txt:""});

    function increment(){
        setDetails((prev)=>({
            ...prev,
            counter:details.counter+1
        }))
    }

    return(
        <>
        <input type="text"onChange={(e)=>{setDetails((prev)=>({...prev,txt:e.target.value}))}}/>
        <button onClick={increment}>increment</button>
         <h1>you clicked {details.txt} {details.counter} times</h1>
        </>
    )
}