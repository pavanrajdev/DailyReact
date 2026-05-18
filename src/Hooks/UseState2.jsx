
import { useState } from "react";

export default function UseState({count,onClick}){
    return(
        <>
        <button onClick={onClick}>{count}</button>
        </>
    )
}