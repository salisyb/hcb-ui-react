import React, { useEffect } from "react";
import Button from "./Button";
import "./Herocard.css";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import { useState, useRef } from "react";
import { clear } from "@testing-library/user-event/dist/clear";

const ComingSoon = ({ closeOverLay }) => {
  window.addEventListener("scroll", closeOverLay);
  return (
    <>
      <div className="coming_soon_container" onClick={() => closeOverLay()}>
        <div className="coming_soon_wrapper">
          <h1>Coming Soon</h1>
        </div>
      </div>
    </>
  );
};

function Herocard() {
  const [coming_soon, setComingSoon] = useState(false);
  console.log(coming_soon);
  useEffect(() => {}, []);

  const handleOnClick = () => {
    setComingSoon(false);
  };
  return (
    <>
      {coming_soon && <ComingSoon closeOverLay={handleOnClick} />}
      <div className="hero_card_container">
        {/* <img src="./images/hero-image.png" className="hero_card_image" /> */}
        <div className="hero_card_information_container">
          <h1>Welcome To The Kano State History and Culture Bureau</h1>
          <p>
            Sometimes referred to as Kano State Museum, this is a major tourist
            attraction given its historic importance as where Western education
            in the North started.
          </p>
          <button
            type="button"
            className="hero-section-button"
            onClick={() => setComingSoon(true)}
          >
            Plan A Visit
          </button>
        </div>
      </div>
    </>
  );
}

export default Herocard;
