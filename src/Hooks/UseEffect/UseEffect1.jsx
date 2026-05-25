
//useEffect is a React Hook used to perform side effects in functional components.

import { useEffect, useState } from "react";

//It runs code when:

// component mounts
// component updates
// component unmounts.


//mounts-->[]-->empty array dependancy 
//unmount-->useing cleanup functions for timers etc
//rendering when component re-renders(mount+compnent re-render)-->no dependancy array
//rendering when specific state or multiple states  chananges -->[state1,state2]

// use for:

// fetching data
// timers
// API calls
// event listeners


//1.without dependancy array

export default function UseEffect1(){
    const[count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`${count} new Messages!`
    })
    return(
        <>
        <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </>
    )
}