

//here we are accessing the dom elements and perform the styling

import { useRef } from "react"

export default function UseRef2(){
const inputele=useRef();

function handleClick(){
    console.log(inputele);//here we can see all the properties assigned to the dom elemetn with ref
    inputele.current.style.width="300px";
    inputele.current.focus();
}
    return(
        <><div>
     <input type="text" ref={inputele}></input>
        </div>
   
        <button onClick={handleClick}>ClicktoREsize</button>
        </>
    )
}