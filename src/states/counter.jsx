import React from "react";
function Counter() {
    const [first, setfirst] = React.useState(0);
    function increase(){
        setfirst(first + 1);
    }
    function decrease(){
        setfirst(first - 1);
    }
    function reset(){
        setfirst(0);
    }
    return(
        <div>
            <h2>Clicked: {first}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter;