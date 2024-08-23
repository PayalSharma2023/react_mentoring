import React from "react";

function childComponent({ name, age }) {
  return (
    <div>
      <h2>Child component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default childComponent;
