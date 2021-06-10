import logo from './img/btm-logo.gif';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return ( 
        <div className="nav-header">

            <div className="nav-header-breadcrumb">
                <p>Brandon Morton</p>
            </div>

            <img className="nav-header-img" src= { logo } alt="btm logo" />

            <nav className="nav-header-container">
                <ul className="nav-header-ul">
                    <li className="nav-header-li">
                        <Link to="/" className="navLink">Home</Link>
                    </li>
                    <li className="nav-header-li">
                        <Link to="/work" className="navLink">Projects</Link>
                    </li>
                    <li className="nav-header-li">
                        <Link to="/about" className="navLink">About Me</Link>
                    </li>
                    <li className="nav-header-li">
                        <Link to="/contact" className="navLink">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;