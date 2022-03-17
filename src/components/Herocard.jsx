import React, { useEffect } from "react";
import Button from "./Button";
import "./Herocard.css";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import { useState, useRef } from "react";
import { clear } from "@testing-library/user-event/dist/clear";

function Herocard() {
  return (
    <div className="hero_card_container">
      <img src="./images/hero-image.png" className="hero_card_image" />
      <div className="hero_card_information_container">
        <h1>Welcome To The Kano State History and Culture Bureau</h1>
        <p>
          Popoktigt klimatflykting. Ina jåskap. Anasm. Deng UX. Debeda digisk.
          Kassa hideling. Dibirat red. Svenna sitt liv bäl. Pseudokrati
          intryckssanera. Chatbots nyre.
        </p>
        <Button children={"Plan A Visit"} buttonStyle={"btn--outline"} />
      </div>
    </div>
  );
}

export default Herocard;
