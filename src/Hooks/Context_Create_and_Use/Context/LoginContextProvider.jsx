
import { Children, createContext, useState } from "react"

export const LoginContext=createContext();

export default function LoginContextProvider({ children }){
    const [count,setCount]=useState(0);

    return(
        <>
        <LoginContext.Provider value={count}>
            {children}
        </LoginContext.Provider>
        </>
    )
}