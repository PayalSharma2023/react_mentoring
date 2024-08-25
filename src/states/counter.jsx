import React from 'react'
function Counter(){
    const [count, setstate] = React.useState(0);
    function increase() {
        setstate(count + 1)
    }
    function Decrease() {
        setstate (count - 1)
    }
    function reset() {
        setstate (0)
    }

    return(
        <div>
             <h2>Counter:{count}</h2>
             <button className='btn-1' onClick={increase}>Increase</button>
             <button className='btn-1' onClick={Decrease}>Decrease</button>
             <button className='btn-1' onClick={reset}>reset</button>
        </div>
       
    )
}
export default Counter;