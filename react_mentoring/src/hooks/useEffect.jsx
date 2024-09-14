import React, { useState, useEffect } from "react";

// useEffect() is of 4 types = React Hook that tells React Do SOME CODE WHEN (pick one):
// This component re-render
// this component mounts
// The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {}) Runs after every re-render
// 2. useEffect(() => {}, []) Runs only on mount
// 3. useEffect(() => {}, [value]) Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [color, setcolor] = useState("green");
  const [width, setwidth] = useState(window.innerWidth)
  const [height, setheight] = useState(window.innerHeight)

  

  useEffect(()=> {
    window.addEventListener("resize", handleResize);
   console.log("Event Listener Added");

   return () => {
    window.removeEventListener("resize", handleResize);
    console.log("event listener removed")
   }
  }, [])

  useEffect(()=> {
    document.title = `Size: ${width} x ${height}`
  }, [width, height])

//   useEffect(() => {
//     document.title = `Count: ${count} ${color}`;

//     return () => {
//         //Some cleanup code
//     }
//   }, [count, color]);
  //empty array is used to update it only once 
  
  function addCount() {
    setCount(c => c + 1);
  }
  function subtractCount() {
    setCount(c => c - 1);
  }
  function changeColor() {
    setcolor(c => c === "green" ? "red" : "green");
  }
  function handleResize(){
    setheight(window.innerHeight);
    setwidth(window.innerWidth);
  }

  return (
    <>
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}px</p>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button><br />
      <button onClick = {changeColor}>Change color</button>
    </>
  );
};

export default UseEffect;
