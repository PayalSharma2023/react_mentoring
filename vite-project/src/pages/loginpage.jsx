import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "../App.css";
//add conditional rendering: if it is email then print else write enter right email
function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;
  const isEmailValid = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email)
  }

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  function login(e) {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both email and password");
      console.log(error);
      //  setLoggedIn(false);
    }else if(!isEmailValid(username)){
      setError("Please enter a valid email address");
    }
     else {
      setError(null);
      console.log("Logged in successfully");
      console.log(data);
      setLoggedIn(true);
      setData({
        username: "",
        password: "",
      });
    }
  }

  return (
    <div>
      <div className="container">
        <center>
          <form onSubmit={submitHandler} className="element">
            <h1 htmlFor="">Login</h1>
            <label htmlFor="">{error && <p style={{ color: 'red', width: "90%", fontSize: "8px", margin:"-10px"}}>{error}</p>}</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="email address"
              onChange={changeHandler}
            />

            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={changeHandler}
            />

            <button
              type="submit"
              name="submit"
              onClick={login}
              className="login-btn"
            >
              login
            </button>

            <button className="signup-btn">Sign up</button>
          </form>

          {/* Conditional Rendering */}
          {/* {loggedIn && <h2>Welcome, {username}</h2>} */}
        </center>
      </div>
    </div>
  );
}

//console update nhi ho raha aur value store nhi horhi
//local storage ?
//

export default Login;
