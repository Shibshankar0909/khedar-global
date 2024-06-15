import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./A_Khedar.png"

function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="title">
      <img src={logo} className="logo"/>
        {/* A Khedar Global */}
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/ourBusiness">Our Business</Link>
        </li>
        
        <li>
        <Link to="/products">Our Products</Link>
        </li>


        {/* <li>
        <Link to="/copper">Copper</Link>
        </li>
        <li>
        <Link to="/aluminum">Aluminum</Link>
        </li>
        <li>
        <Link to="/strips">Copper Strips</Link>
        </li> */}


        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;