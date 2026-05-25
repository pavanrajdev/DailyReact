

//useLayout it is simiar to useEffect  but the diffrance is useEffect() runs after dom prints
//but useLayout prints before dom prits

import { useEffect, useLayoutEffect, useRef, useState } from "react"

//example
//1.measeure height of element/width  
//helps measure anything related layout

//**and it runs synchronously */


export default function UseLayout(){
    const[toggle,setToggle]=useState(false);
    const textRef=useRef();

    useLayoutEffect(()=>{
        if(textRef.current!=null){
        const dymentions=textRef.current.getBoundingClientRect();
        console.log(dymentions);
        textRef.current.style.paddingTop=`${dymentions.height}px`;
        }
    },[toggle])
    return(
        <>
        <button onClick={()=>{setToggle(!toggle)}}>getdymentions</button>
        {toggle&&<h1 ref={textRef}>this is pavan</h1>}
        </>
    )
}