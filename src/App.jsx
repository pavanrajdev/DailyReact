
import "./App.css"
import { useState } from "react"
// import Scientist from "./Scientist.jsx"
// import Conditional from "./Conditionalrendering/Conditional.jsx"
// import RenderingList from "./RenderingList.jsx"
// import Eventhandling from "./Eventhandling.jsx"
// import UseState from "./Hooks/UseState.jsx"
// import UseState2 from "./Hooks/UseState2.jsx"
// import Game from "./Tic-Tac-toe/Game.jsx";
//  import UseState from "./Hooks/UseState.jsx";
// import UseState2 from "./Hooks/UseState2.jsx";
// // import UseEffect2 from "./Hooks/UseEffect2.jsx";
// import UseEffect3 from "./Hooks/UseEffect/UseEffect3";
// import UnMount_CleanUp from "./Hooks/UseEffect/UnMount_CleanUp";
// import ComponentA from "./Hooks/UseContext/ComponentA";
// import UseContext from "./Hooks/Context_Create_and_Use/UseContext/UseContext";
// import UseRef1 from "./Hooks/UseRef/UseRef1";
// import UseRef2 from "./Hooks/UseRef/UseRef2";
// import UseReducer from "./Hooks/UseReducer/UseReducer";
import UseLayout from "./Hooks/UseLayout/UseLayout";
import UseMemo from "./Hooks/UseMemo/UseMemo";
import UseCallback from "./Hooks/UseCallback/UseCallback";
import Usingchook from "./Hooks/CustomeHook/Usingchook.jsx"
import UseContext from "./Hooks/Context_Create_and_Use/UseContext/UseContext.jsx";
import Food_Search from "./Think_in_React/Food_Search.jsx";
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

    
   <Food_Search />
    </>

  )
  
}
