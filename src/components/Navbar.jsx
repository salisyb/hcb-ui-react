import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [menu_click, setMenuClick] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const handleMenuClick = () => {
    setMenuClick(!menu_click);
  };

  console.log(isAuthenticated);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-links">
            <h1 className="logo-icon">KANO STATE HCB </h1>
          </Link>
          <div
            className={
              menu_click
                ? "navbar-menu-list navbar-menu-show"
                : "navbar-menu-list"
            }
          >
            <ul className="menu-container">
              <li className="menu-item">
                <Link to="/" className="menu-item-link">
                  HOME
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about" className="menu-item-link">
                  ABOUT US
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="menu-item-link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="navbar-button-group">
              {isAuthenticated ? (
                <div className="__user_icon_style">
                  {/* <span className="_welcome_text">Welcome !</span> */}
                  <i
                    className="fa-solid fa-user _user_icon"
                    onClick={() => setProfileMenu(!profileMenu)}
                  ></i>
                  {profileMenu && (
                    <div className="profile-drop-down">
                      {/* profile dropdown */}
                      <div className="navbar_dropdown_profile">
                        <i className="fa-solid fa-user navbar_profile_icon"></i>
                        <div className="navbar_dropdown_text">
                          <p>Salisu Abubakar</p>
                          <Link>Manage Your Account</Link>
                        </div>
                      </div>
                      <hr style={{ color: "gray" }} />
                      <div className="navbar_dropdown_item">
                        <div className="navbar_dropdown_item_wrapper">
                          <i class="fa-solid fa-square-user"></i>
                          <span className="navbar_dropdown_item_list">
                            Profile
                          </span>
                        </div>
                        <div className="navbar_dropdown_item_wrapper">
                          <span className="navbar_dropdown_item_list">
                            Your Subscription
                          </span>
                        </div>
                        <div className="navbar_dropdown_item_wrapper">
                          <i class="fa-solid fa-arrow-right-from-bracket"></i>
                          <span className="navbar_dropdown_item_list">
                            Sign Out
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* end profile dropdown */}
                </div>
              ) : (
                <span className="sign-up-text">
                  <Link to="/register">Sign up</Link>
                </span>
              )}
              <Link to="/subscription">
                <button className="btn btn-filled">Subscrip...</button>
              </Link>
            </div>
            <div className="menu-register-wrapper">
              <span className="sign-up-text show-mobile">
                {isAuthenticated ? (
                  <span>
                    <i class="fa-solid fa-user"></i>
                  </span>
                ) : (
                  <Link to="/register">Sign up</Link>
                )}
              </span>
              {menu_click ? (
                <i
                  class="fa-solid fa-x navbar-menu"
                  onClick={handleMenuClick}
                ></i>
              ) : (
                <i
                  class="fa-solid fa-bars navbar-menu"
                  onClick={handleMenuClick}
                ></i>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
