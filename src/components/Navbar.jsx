import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";
import logo from "../assets/image/logo.png";
import profile from "../assets/image/profile.png";
import { useHistory } from "react-router-dom";
import { logOutUser } from "../redux/actions/auth";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [menu_click, setMenuClick] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const handleMenuClick = () => {
    setMenuClick(!menu_click);
  };

  const handleLogut = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      <nav className="navbar">
        {/* Navigation Container  */}
        <div className="navbar-container">
          {/* Logo Wrapper  */}
          <Link to="/" className="navbar_home_link">
            <img src={logo} alt="logo" />
          </Link>

          <div className="navbar_left_item">
            {/* Navbar Link List */}
            <ul className="navbar_link_list_wrapper">
              <li className="navbar_link_list_item">
                <Link to="/" className="navbar_link_list_link">
                  Home
                </Link>
              </li>
              <li className="navbar_link_list_item">
                <Link to="/explore" className="navbar_link_list_link">
                  Explore
                </Link>
              </li>
              <li className="navbar_link_list_item">
                <Link to="#" className="navbar_link_list_link">
                  Virtual Reality
                </Link>
              </li>
            </ul>
            <Button
              to="/subscription"
              buttonSize={"btn--medium"}
              buttonStyle={"btn--primary"}
              children="Subscription"
              type={{ marginLeft: "20px" }}
            />
            {isAuthenticated ? (
              // User Profile Container
              <div className="navbar_user_profile">
                <img
                  src={profile}
                  alt="profile-image"
                  className="navbar_profile_image"
                  onClick={() => setMenuClick(!menu_click)}
                />
                {/* Profile Wrapper */}
                {menu_click && (
                  <div className="navbar_profile_wrapper">
                    <div className="navbar_profile_menu_container">
                      <div className="navbar_profile_container">
                        <img
                          src={profile}
                          alt="profile-image"
                          className="navbar_profile_container_image"
                        />
                        <div className="navbar_profile_container_text">
                          <p>
                            {user.first_name} {user.last_name}
                          </p>
                          <Link to="/profile">Manage Your Profile</Link>
                        </div>
                      </div>
                      <Link
                        className="navbar_logout_button"
                        onClick={handleLogut}
                      >
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <p>Log Out</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button
                buttonSize={"btn--medium"}
                buttonStyle={"btn--primary"}
                children="Sign In"
                type={{ marginLeft: "10px" }}
                to="/login"
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
