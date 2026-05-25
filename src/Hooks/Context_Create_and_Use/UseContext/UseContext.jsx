
//useContext is used to manage the global data inside the react application
//such as
// 1.global state             2. services
// 3.Themes                    4. userSettings


import ComponentB from "./ComponentB.jsx";
import LoginContextProvider from "../Context/LoginContextProvider.jsx";

//Steps to use context

//**** */ 1.creating the Context
//**** */ 2.providing the context
//**** */ 3.consuming the context

//here i will create a context (global data) and send it to component B and b's clildren can also access this data

export default function UseContext(){

    return(
        <>
       <LoginContextProvider>
        <ComponentB/>
       </LoginContextProvider>
        </>
    )
}