// dispatch action to reducer
// a reducer is a function that communictes directly to a local database inside of your browser
// this locat database is called a store and it should be able to store the entire state of your application
// and the beauty of it is that it exists outside of a component redux? 
import React, { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            throw new Error('not an action')
    }
}

function UseReducer(){

    const [state, dispatch] = useReducer(reducer, 0)

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}

export default UseReducer;