// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
import React, { useMemo, useState } from "react";



function Demo(){
    const [num, setNum] = useState(1);
    const [value, setValue] = useState(1);
    const [double, setDouble] = useState(1);

    // const getDouble = slowFunction(value)
    const getDouble = useMemo(() => slowFunction(value), [value])
    return(
        <div>
            <h1>Add Number</h1>
            <h1>{num}</h1>
            <button onClick={()=>setNum(num + 1)}>add number</button>

            <h1>Add double</h1>
            <h1>{value}</h1>
            <button onClick={()=>setValue(value + 1)}>add number</button>
            
            <h1>Get Double</h1>
            <h1>{double}</h1>
            <button onClick={()=>setDouble(getDouble)}>add number</button>
        </div>
    );
}

function slowFunction(num){
    console.log("show function called");

    for(let i =0; i< 10000000; i++ ){}
    const double = num * 2

    return double
}
export default Demo;