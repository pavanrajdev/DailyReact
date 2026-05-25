//useMemo is used to perform memoization
//memoization is a technique to imporove the performance of code
//simply it is used to avoid expense calculations on every-render when the returned value is not changed
//so we can stop running unwanted function on re-rendering


//the main diffrance between useEffect and useMemo is that useMemo can return a value
import { useMemo, useState } from "react"


export default function UseMemo(){
    const[dark,setDark]=useState(false);
    const[number,setNumber]=useState(0);

const mode={
    backgroundColor:dark?"black":"white",
    color:dark?"white":"black"
}

let Calculation=useMemo(()=>{
    return expensive(number);
},[number]);

    return(
        <>
        <div style={mode}>
            <input type="number" onChange={(e)=>{setNumber(e.target.value)}}></input>
            <h2>{Calculation}</h2>
            <button onClick={()=>setDark(!dark)}>Toggle</button>
        </div>
        </>
    )
}

function expensive(num){
    for(let i=0;i<=1000000000;i++){}
    return num;
}