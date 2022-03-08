import React from "react";
import Cards from "../Cards";
import Herocard from "../Herocard";
import Footer from "../Footer"
import Navbar from "../Navbar";


import { Link } from "react-router-dom";
import TopNavBar from "../TopNavBar";
import Sections from "../Sections";

function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <Herocard />
    <Sections />
    <Footer />
    </>
  )
}

export default Home;
