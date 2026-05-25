

//Hooks help functional components use features that were previously available only in class components.


//State is just a variable that React keeps track of. 
// When the state changes, React automatically re-renders the component to update the UI.

//useState is a React Hook used to create and manage state in a functional component.
//  It stores data that can change and updates the UI whenever the data changes.


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