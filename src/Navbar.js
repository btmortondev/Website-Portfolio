import logo from './img/btm-logo.gif';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return ( 
        <nav>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/work" className="navLink">Projects</Link>
            <img src= { logo } alt="btm logo" />
            <Link to="/about" className="navLink">About Me</Link>
            <Link to="/contact" className="navLink">Contact</Link>
        </nav>
     );
}
 
export default Navbar;