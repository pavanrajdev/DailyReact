
//with states inside dependancy array

import { useEffect, useState } from "react"

export default function UseEffect3(){
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);
    const[count3,setCount3]=useState(0);
    const[count,setCount]=useState(0);
    useEffect(()=>{
        setCount(prev => prev + 1);
        document.title=`${count} times render happended`
    },[count2,count3]);
    return(
        <>
        <button onClick={()=>{setCount1(count1+1)}}>{count1}</button> 
        <button onClick={()=>{setCount2(count2+2)}}>{count2}</button> 
        <button onClick={()=>{setCount3(count3+3)}}>{count3}</button> 
        </>
    )
}
