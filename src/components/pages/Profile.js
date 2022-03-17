import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import "./Profile.css";
import profile from "../../assets/image/profile.png";
import { useSelector } from "react-redux";

function Profile() {
  const inputFile = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {}, []);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const handleSetProfileChage = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <Navbar />
      <div className="profile_container">
        <div className="profile_page_wrapper">
          <div className="profile_icon_wrapper">
            <img
              src={profileImage}
              className="profile_icon_image"
              alt="profile"
            />
            <input
              type="file"
              id="file"
              accept="image/*"
              ref={inputFile}
              onChange={(e) => handleSetProfileChage(e)}
              style={{ display: "none" }}
            />
          </div>
          <div>
            <button class="profile_btn" onClick={onButtonClick}>
              Change profile
            </button>
            <button class="profile_btn">View profile</button>
          </div>

          <h1 className="profile_name_text">
            {user && `${user.first_name} ${user.last_name}`}
          </h1>
          <div className="profile_settings_list">
            <i class="fa-solid fa-user"></i>
            <p>Profile Settings</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="profile_settings_list">
            <i class="fa-solid fa-treasure-chest"></i>
            <p>Manage Subscription</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
