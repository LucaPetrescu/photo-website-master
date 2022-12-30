import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >=90 ){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const closeMenu = () => setClick(false);

  return (
    <>
      <div className={color ? 'header bg-header':'header'}>
        <nav className="navbar">
          <a href="/" className="logo">Luca Petrescu</a>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link to='/about'>
                About Me
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/gallery" className="nav-item" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-item" onClick={closeMenu}>
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
