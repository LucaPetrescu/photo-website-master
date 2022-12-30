import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/NavbarHome.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="header-home">
        <nav className="navbar-home">
          <a href="/">Luca Petrescu</a>
          <div className="hamburger-home" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu-home active" : "nav-menu-home"}>
            <li className="nav-item-home">
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item-home">
              <Link to="/about" onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li className="nav-item-home">
              <Link to="/gallery" className="nav-item-home" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li className="nav-item-home">
              <Link to="/contact" className="nav-item-home" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
