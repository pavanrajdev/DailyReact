import { useContext } from "react"
import {LoginContext} from "../Context/LoginContextProvider.jsx"

export default function ComponentC(){
    const login=useContext(LoginContext);
    return(<>
    <h1>hi i am component C</h1>
    <h2>i have LoginContext value it is {login}</h2>
    </>)
}