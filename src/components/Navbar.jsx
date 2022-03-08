import React, { useState,  } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import TopNavBar from "./TopNavBar";


function Navbar() {
  const [menu_click, setMenuClick] = useState(false)
  const handleMenuClick = () => {
    setMenuClick(!menu_click)
  }

  return( <>
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-links">
       <h1 className="logo-icon" >KANO STATE HCB</h1>
      </Link>
        <div className={menu_click ? "navbar-menu-list navbar-menu-show" : "navbar-menu-list"}>
          <ul className="menu-container">
             <li className="menu-item"><Link to={"/"} className="menu-item-link">HOME</Link></li>
             <li className="menu-item"><Link to="#" className="menu-item-link">ABOUT US</Link></li>
             <li className="menu-item"><Link to="#" className="menu-item-link">CONTACT</Link></li>
          </ul>
        </div>
        <div>
      <div className="navbar-button-group"><span className="sign-up-text"><Link to="/register">Sign up</Link></span><button className="btn btn-filled">Get started</button></div>
      <div className="menu-register-wrapper">
      <span className="sign-up-text show-mobile"><Link to="/register">Sign up</Link></span>
      {menu_click ? <i class="fa-solid fa-x navbar-menu"  onClick={handleMenuClick}></i> : <i class="fa-solid fa-bars navbar-menu" onClick={handleMenuClick}></i> }
      </div>
      </div>
    </div>
  </nav>
</>
)
}

export default Navbar;
