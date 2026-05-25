//clean ups will done when the component is about to unmount
//if we are setting state with setintervel and sideeffect is not cleaned up 
//and when unmount the state is destroid but the state interval function keep running 
//to stop that from happening we can use cleanup(return())
import { useState } from "react";
import { useEffect } from "react";
export default function UnMount_CleanUp(){
    const[time,setTime]=useState(0);

    useEffect(()=>{
       const clear= setInterval(()=>{
            setTime(prev=>prev+1);
        },1000);

        return()=>clearInterval(clear);
    })

    return(
        <>
        <div><h1>{time}</h1></div>
        </>
    )
}