
//useEffect with empty dependancy array
//it will only renders when the component mounts

import { useEffect, useState } from "react"

export default function UseEffect(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`  ${count} title renders only once when mount`//hence the count will be 0 only 
    },[])
    return(<>
    <button onClick={()=>{setCount(count+1)}}>{count}</button>
    </>)
}