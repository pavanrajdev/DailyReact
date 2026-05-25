
//useReducer is a React Hook used to manage complex state logic in a component.
// Instead of directly updating state like useState, you send actions to a function called a reducer,
//  and it decides how the state should change.

// state → current state
// dispatch → function to send actions
// reducer → function that updates state
// initialState → starting value


// When to use useReducer
// Use it when:
// 1. State logic is complex
// Example:
// multiple actions (add, delete, update, reset)
// dependent state updates

// 2. Multiple related state values
// Instead of:
// const [name, setName]
// const [age, setAge]
// const [email, setEmail]

// const initialState = {
//   name: "",
//   age: "",
//   email: ""
// };

import { useReducer } from "react";

const ACTION={
    INCREASE:"increase",
    DECREASE:"decrease"
}

const initialState={count:0};
function reducer(state,action){
    switch(action.type){
        case ACTION.INCREASE:
            return {count:state.count+1};
        case ACTION.DECREASE:
            return {count:state.count-1};
        return state;
    }
}
export default function UseReducer(){

    const [state,dispatch]=useReducer(reducer,initialState);
    function increase(){
        dispatch({type:ACTION.INCREASE});
    }
    function decrease(){
        dispatch({type:ACTION.DECREASE});
    }


    return(
        <>
        <h1>{state.count}</h1>
        <button onClick={increase}>increase</button>
         <button onClick={decrease}>decrease</button>
        </>
    )
}