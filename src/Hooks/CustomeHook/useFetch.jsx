
//

import { useEffect, useState } from "react";


export default function useFetch(url){
    const [responses,setResponses]=useState([]);


    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setResponses(data));

    },[]);
    
    return responses; 
};
