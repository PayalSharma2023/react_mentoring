// useState() = RE-renders the component when the state value changes

//useRef() = "use Refernce" Does not cause re-renders when its value changes.
            //  when you want a component to "remember" some clientInformation,
            //  but you don't want that information to trigger new renders.
             
            //  1. Accessing / Interacting with DOM elements
            //  2. Handling Focus, Animations, and Transitions 
            //  3. Managing Timers and Intervals

import React, { useEffect, useRef, useState } from "react";

function UseRef(){
    // let [number, setnumber] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2= useRef(null);
    const inputRef3= useRef(null);

    console.log(inputRef1);
    console.log(inputRef2);
    console.log(inputRef3);

    useEffect(()=>{
        console.log("COMPNENT RENDERED");
    })

    function handleClick1(){
        // setnumber(n => n + 1);
        inputRef1.current.focus();
        inputRef1.current.style.background = "yellow"
        inputRef2.current.style.background = ""
        inputRef3.current.style.background = ""
    }
    function handleClick2(){
        // setnumber(n => n + 1);
        inputRef2.current.focus();
        inputRef1.current.style.background = ""
        inputRef2.current.style.background = "yellow"
        inputRef3.current.style.background = ""
    }
    function handleClick3(){
        // setnumber(n => n + 1);
        inputRef3.current.focus();
        inputRef1.current.style.background = ""
        inputRef2.current.style.background = ""
        inputRef3.current.style.background = "yellow"
    }

    return(
        <div>
            <button onClick={handleClick1}>
            Click Me 1!
        </button>
        <input ref={inputRef1}/>

            <button onClick={handleClick2}>
            Click Me 2!
        </button>
        <input ref={inputRef2}/>

            <button onClick={handleClick3}>
            Click Me 3!
        </button>
        <input ref={inputRef3}/>

        </div>
        
    )

}

export default UseRef;