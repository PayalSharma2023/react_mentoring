import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../App.css'

function Navbar() {
    
    return(
    //    <div className="nav">
    //     {/* <div className="logo">
    //             <img src={logo} className='App-logo' width='60px' alt="Logo" />
    //             <h2>React Tutes</h2>
    //     </div> */}
    //     <ul>
    //         <li>
    //             <a href={link}>{text}</a>
    //         </li>
    //     </ul>
    //     {/* <button className="btn-1">Sign up</button> */}
    //    </div>
    <div>
        <nav className="nav">
            <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/about"><li>About</li></NavLink>
            <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/login"><li>Login</li></NavLink>
          
        </nav>
    </div>
    )
}

export default Navbar;