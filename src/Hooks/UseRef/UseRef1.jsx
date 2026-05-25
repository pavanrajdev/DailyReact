
//useRef is used to access dom elements and 
// also help create mutable variable without causing re-renders

import { useEffect, useRef, useState } from "react"


export default function UseRef1(){
const[count,setCount]=useState(0);
const[name,setName]=useState("");
const rendercount=useRef(0);


useEffect(()=>{
    //setCount(prev=>prev+1);-->this again trigers the component to renrender endup infinite re-renders
    rendercount.current=rendercount.current+1;
})

    return(
        <>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
        {/*<h1>Renders:{count}</h1> --> this causes infinite renders*/ }
        <h1>Renders:{rendercount.current}</h1>
        </>
    )
}