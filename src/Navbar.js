import logo from "./img/btm-logo.gif";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Navbar = () => {
  return (
    <div className="nav-header">
      <nav className="nav-header-container">
        <Link to="/" className="navLink">
        {" "}
          <HomeIcon fontSize="large"/>{" "}
        </Link>

        <Link to="/work" className="navLink">
        {" "}
          <WorkIcon fontSize="large"/>{" "}
        </Link>

        <Link to="/about" className="navLink">
        {" "}
          <PersonIcon fontSize="large"/>{" "}
        </Link>

        <Link to="/contact" className="navLink">
        {" "}
          <ContactPageIcon fontSize="large"/>{" "}
        </Link>

        <img className="nav-header-img" src={logo} alt="btm logo" />
      </nav>
    </div>
  );
};

export default Navbar;
