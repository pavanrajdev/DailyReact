

//useCallback is a hook which is used to return memoize functions
//it also prevents functions from being re-creating or re-rendering

import { useCallback, useState } from "react"
import PrintTable from "./PrintTable";


export default function UseCallback(){
    
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);

    const sty={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }

    const CalculateTable=useCallback((val)=>{
        let newNumber=number+val;
        return [newNumber*1,newNumber*2,newNumber*3,newNumber*4,newNumber*5];
    },[number]);
    return(
        <>
        <div style={sty}>
             <input type="number" onChange={(e)=>{setNumber(Number(e.target.value))}}></input>
        <PrintTable CalculateTable={CalculateTable}/>
        <button onClick={()=>setDark(!dark)}>Toggle</button>
        </div>
       
        </>
    )
}