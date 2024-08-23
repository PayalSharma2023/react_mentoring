import './App.css'
import logo from './logo.svg'

function Navbar({text, link}) {

    return(
        <div>
            <li>{text}</li>
        </div>
    //    <div className="nav">
    //     <div className="logo">
    //             <img src={logo} className='App-logo' width='60px' alt="Logo" />
    //             <h2>React Tutes</h2>
    //     </div>
    //     <ul>
    //         <li>
    //             <a href="#">Home</a>
    //         </li>
    //         <li>
    //             <a href="#">About Us</a>
    //         </li>
    //         <li>
    //             <a href="#">Articles</a>
    //         </li>
    //         <li>
    //             <a href="#">Contact</a>
    //         </li>
    //     </ul>
    //     <button className="btn-1">Sign up</button>
    //    </div>
    )
}

export default Navbar;