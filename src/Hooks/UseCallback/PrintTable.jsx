import { useEffect, useState } from "react"





export default function PrintTable({CalculateTable}){
    const[row,setRow]=useState([]);

    useEffect(()=>{
        setRow(CalculateTable(2));
    },[CalculateTable])
    let values=row.map((valu,idx)=>{
        return <p key={idx}>{valu}</p>
    })

    return(
        <>
        <div>
            {values}
        </div>
        </>
    )
}