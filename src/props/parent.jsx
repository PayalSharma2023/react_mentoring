import React from "react";
import ChildComponent from "./child";
function ParentComponent() {
    const user = {
        name :" Payal Sharma",
        age: 12
    }
  return (
    <div>
      <h2>Parent Component</h2>
      <p>Hai</p>
      <ChildComponent name={user.name} age={user.age} />
    </div>
  );
}
export default ParentComponent;