
import "./App.css"
import Scientist from "./Scientist.jsx"
import Conditional from "./Conditionalrendering/Conditional.jsx"
import RenderingList from "./RenderingList.jsx"

function MyButton(){
  return(
     <button className="btn">I'm a button</button>
  )
}
function App() {
  return (
    <>
    <h1>welcome to my app</h1>
    <MyButton/>
    <Scientist/>
    <Conditional/>
    <RenderingList/>
    </>
  )
}

export default App
