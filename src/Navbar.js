import logo from "./img/btm-logo.gif";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-header">
      <nav className="nav-header-container">
        <Link to="/" className="navLink">
          Home
        </Link>

        <Link to="/work" className="navLink">
          Projects
        </Link>

        <Link to="/about" className="navLink">
          About Me
        </Link>

        <Link to="/contact" className="navLink">
          Contact
        </Link>

        <img className="nav-header-img" src={logo} alt="btm logo" />
      </nav>
    </div>
  );
};

export default Navbar;
