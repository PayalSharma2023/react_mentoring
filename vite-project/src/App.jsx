import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//add conditional rendering: if it is email then print else write enter right email
function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [data,setData] = useState({
    username:"",
    password:""
  })
  
  const {username,password} = data;
  
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }

  function login(e){
    e.preventDefault();
    setLoggedIn(true);
    console.log(data);

    // setLoggedIn(false);
  }

  return (
    <div>
     
        <div className="container">
        <center>
         
            <form onSubmit={submitHandler} className="element">
             <label htmlFor="">Login</label>
             <input type="text" name="username" value={username} placeholder='email address' onChange={changeHandler}/>
             <input type="password" name="password" value={password} placeholder='password'  onChange={changeHandler}/>
             <button type='submit' name="submit" onClick={login} className='login-btn'>login</button>
             <button className='signup-btn'>Sign up</button>

            </form>
        
         {
          loggedIn 
         }
         </center>

        </div>
    </div>
  )
}

//console update nhi ho raha aur value store nhi horhi 
//local storage ?

export default App
