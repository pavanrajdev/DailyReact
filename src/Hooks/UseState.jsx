
import { useState } from "react";

export default function UseState(){

    const [count,setCount]=useState(0);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }


    return(
        <>
        <button onClick={increment}>{count} increment</button>
        <button onClick={decrement}>{count} decrement</button>
        </>
    )
}