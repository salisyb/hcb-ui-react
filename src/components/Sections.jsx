import React from "react";
import Cards from "./Cards";
import "./Sections.css";
import { Link } from "react-router-dom";
import Post from "./Post";



function Sections() {

  const bookArchive = [
    {id: 1, image: 'Name'},
    {id: 2, image: 'Name'},
    {id: 3, image: 'Name'},
    {id: 4, image: 'Name'},

  ]

  const imageArchive = [
    {id: 1, image: './images/house/khcb/pic1.JPG'},
    {id: 2, image: './images/house/khcb/pic.JPG'},
    {id: 3, image: './images/house/khcb/pic3.JPG'},
    {id: 4, image: './images/house/khcb/pic4.JPG'},
  ]


  return (
    <>
      <div className="section-container">
        <div className="section-header">
          <div>
            <h1 className="section-header-title">Feature's Books</h1>
            {/* <p className="section-header-subtitle">
              Explore exhibition gallery guides, videos, articles, and more.
            </p> */}
          </div>
          <div>
            <h3 className="section-header-left-title">
              <u>View All Books</u>
            </h3>
            <div className="section-underline"></div>
          </div>
        </div>
        <div className="parent-container">
        {/* {imageArchive.map((book) => 
            <div key={book.id} className="child-container">
            <img
              className="post-images"
              src={book.image}
              alt="whatever"
            />

            <div className="post-info-container">
              <h4 className="post-info-header">
                Nyprere politopi och nutrerade att DALL·E post
              </h4>
              <p className="post-info-subheader">
                Bebel spemisat våss benenade. Astrolig speligen att ass chatbots
                dill.{" "}
              </p>
            </div>
          </div>)} */}
        </div>

            {/* Books sections */}
        <div className="section-header-book">
          <div>
            <h1 className="section-header-title"> Archive Image </h1>
          </div>
          <div>
            <h3 className="section-header-left-title">
              <u>Explore Archive Image</u>
            </h3>
            <div className="section-underline"></div>
          </div>
        </div>
        <div className="parent-container">
          {imageArchive.map((book) => 
            <div key={book.id} className="child-container">
            <img
              className="post-images"
              src={book.image}
              alt="whatever"
            />

            <div className="post-info-container">
              <h4 className="post-info-header">
                Nyprere politopi och nutrerade att DALL·E post
              </h4>
              <p className="post-info-subheader">
                Bebel spemisat våss benenade. Astrolig speligen att ass chatbots
                dill.{" "}
              </p>
            </div>
          </div>)}

        </div>
        {/* Location */}
        <div className="location__wrapper">
          <h3>Visit Us At</h3>
          <div className="location__container">
            <div className="location__item">
              <img
                className="location-image"
                src="./images/house/two.jpeg"
                alt="location"
              />
              <div className="location_info_wrapper">
                <h2 className="location__header">
                  Eupren sall tills metatopi som avinvestera
                </h2>
              </div>
            </div>
            <div className="location__item">
              <img
                className="location-image"
                src="./images/house/one.jpeg"
                alt="location"
              />
              <div className="location_info_wrapper">
                <h2 className="location__header">
                  Anette Hermansson geovis obelt huruvida diasoren pömuv
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Post */}
        <div className="post__wrapper">
          <div className="post_image_container">
            <img
              className="post_image"
              src="./images/house/inside-1.jpg"
              rel="post-image"
            />
          </div>
          <div className="post__article">
            <h1>Gidan Dan Hausa Kano</h1>
            <p>some lorem ipsum text here and some button and links</p>
          </div>
        </div>
        {/* end */}

        {/* Post */}
        <div className="post__wrapper reversed">
          <div className="post_image_container">
            <img
              className="post_image"
              src="./images/house/door-1.jpg"
              rel="post-image"
            />
          </div>
          <div className="post__article">
            <h1>Kano State History and culture bureau</h1>
            <p>some lorem ipsum text here and some button and links</p>
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
}

export default Sections;
