import './App.css'
import logo from './logo.svg'

function Navbar({text, link}) {

    return(
       <div className="nav">
        {/* <div className="logo">
                <img src={logo} className='App-logo' width='60px' alt="Logo" />
                <h2>React Tutes</h2>
        </div> */}
        <ul>
            <li>
                <a href={link}>{text}</a>
            </li>
        </ul>
        {/* <button className="btn-1">Sign up</button> */}
       </div>
    )
}

export default Navbar;