
import Err from "./Err.jsx";
import Interf from "./Interf.jsx"
export default function Conditional(){

let content;
const loggedin=true;
        if(loggedin){
            content=<Interf/>
        }
        else{
            content=<Err/>
        }
    return(<>
    {content}
    {/* other way to do this is */}
    {loggedin ?(<Interf/>):(<Err/>)}
    </>)
}