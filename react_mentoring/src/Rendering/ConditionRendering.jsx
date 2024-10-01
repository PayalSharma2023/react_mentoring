import { useState } from "react";

function DD() {
  const [showbtn, setshowbtn] = useState(false);
  const [todos, settodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo",
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo todo",
    },
    {
      title: "Hey you",
      desc: "I am a good todo high figh",
    },
    {
      title: "Hey 8",
      desc: "I am a good todo",
    },
  ]);

  // const Todo = ({ todo }) => {
  //   return (
  //     <>
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </>
  //   );
  // };

  return (
    <>
    {/* render list through map */}
      {todos.map((todo) => {
        // return <Todo key={todo.title} todo={todo}/>
        return (
          <div key={todo.title}>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );

      })}

      {/* {showbtn ? <button>
      I will be shown when second button is clicked
    </button> : "thenga"} */}
      {/* //andperson */}
      {showbtn && <button>show btn is true</button>}
      {/* //ternary operator */}
      {/* {showbtn ?<button>
      show btn is true
    </button> : <button>
      show btn is false
    </button>} */}
      <br></br>
      <button
        onClick={() => {
          setshowbtn(!showbtn);
        }}
      >
        Toggle showbtn
      </button>
    </>
  );
}

export default DD;
