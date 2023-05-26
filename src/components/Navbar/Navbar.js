import { memo } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={require('../../assets/images/goats/white-horned-goat.png')} />
        <h3>TechnologyGoat</h3>
      </Link>
    </nav>
  )
}

export default memo(Navbar);
