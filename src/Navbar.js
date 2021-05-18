import logo from './img/btm-logo.gif';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <Link to="/">Home</Link>
            <Link to="/work">Projects</Link>
            <img src= { logo } alt="btm logo" />
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
        </nav>
     );
}
 
export default Navbar;