import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navBar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
        </div>
    );
};

export default Navbar;