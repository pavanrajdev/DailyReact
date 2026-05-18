
import "./App.css"
import { useState } from "react"
// import Scientist from "./Scientist.jsx"
// import Conditional from "./Conditionalrendering/Conditional.jsx"
// import RenderingList from "./RenderingList.jsx"
// import Eventhandling from "./Eventhandling.jsx"
// import UseState from "./Hooks/UseState.jsx"
// import UseState2 from "./Hooks/UseState2.jsx"
import Game from "./Tic-Tac-toe/Game.jsx";


export default function App() {
  const [count,setCount]=useState(0);
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }
  return (
    <>
    {/* <h1>welcome to my app</h1>
    <Scientist/>
    <Conditional/>
    {/* <RenderingList/>
    <Eventhandling/>
    <UseState/>
    <UseState/>{/* If you render the same component multiple times, each will get its own state.  */}
    
    {/* below is the example of buttons sharing same data this can achivable by moving state up to nearest common parent*/}
    {/* <UseState2 count={count} onClick={increment}/>
    <UseState2 count={count} onClick={decrement}/>  */}

    
    <Game/>
    </>

  )
  
}
