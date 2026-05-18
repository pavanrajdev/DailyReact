
export default function Eventhandling(){
    function Handleclick(){
        console.log("clicked the button");
    }
    return(<>
    <button onClick={Handleclick}>ClickMe</button>
    </>)
}