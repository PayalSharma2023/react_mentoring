// memo memorizes the return values of functions whereas usecallback memorizes the entire function
import React, { useCallback, useEffect, useState } from "react";


const todos = [
    {id: 0, content: 'lorem12 opdhfusg grkjg'},
    {id: 1, content: 'lorem12 opdhfusg grkjg'},
    {id: 2, content: 'lorem12 opdhfusg grkjg'},
    {id: 3, content: 'lorem12 opdhfusg grkjg'},
    {id: 4, content: 'lorem12 opdhfusg grkjg'}
]

function UseCallback(){

    const [count, setCount] = useState(0);
    const [reversecount, setReverseCount] = useState(100);

    // const getTodos = () => {
    //     return todos[count]
    // }

    const getTodos = useCallback(() => {
        return todos[count]
    }, [count])

    return(
        <div className="App">
            <p>{reversecount}</p>
            <button onClick={() => setReverseCount(reversecount -1)}>-1</button>

            <button onClick={() => setCount(count +1)}>+1</button>
            <TodoSection getTodos={getTodos}/>
        </div>
    )
}

function TodoSection({getTodos}){
 const [todos, setTodos] = useState([])

    useEffect(()=>{
        setTodos([...todos, getTodos()])
        console.log(`getTodos function called`)
    }, [getTodos])

    return(
        <div>
            {todos.map(todo => <p key={todo?.id}>{todo?.content}</p>)}
        </div>
    )
}

export default UseCallback;