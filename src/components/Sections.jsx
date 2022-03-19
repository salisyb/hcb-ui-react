import React from "react";
import Cards from "./Cards";
import "./Sections.css";
import { Link } from "react-router-dom";
import Post from "./Post";

function Sections() {
  const books = [
    {
      id: 1,
      image:
        "https://cdn.asaha.com/assets/thumbs/26d/26d5391ee9de370250de3bc599d3fad9.jpg",
      title: "When The Moon Split",
    },
    {
      id: 2,
      image:
        "https://cdn.asaha.com/assets/thumbs/9e9/9e919830ba386a52df770cda31a6bf28.jpg",
      title: "Qur'an in English",
    },
    {
      id: 3,
      image:
        "https://cdn.asaha.com/assets/thumbs/fe4/fe4ad25d94fc443816da8400a25debab.jpg",
      title: "No God But Allah",
    },
  ];

  const images = [
    {
      id: 1,
      image: "https://picsum.photos/200/201",
      title: "When The Moon Split",
      color: "yellow",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/202",
      title: "Qur'an in English",
      color: "black",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/203",
      title: "No God But Allah",
      color: "red",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/204",
      title: "No God But Allah",
      color: "lightyellow",
    },
  ];

  return (
    <>
      <div className="section_container">
        <div className="section-container">
          {/* Books sections */}
          <div className="section-book-header-text">
            <h1 className="section-book-header-title">
              Explore Historical Books
            </h1>
            <Link to="/category/books" className="section-book-header-link">
              View All
            </Link>
          </div>
          <div className="section-book-wrapper">
            <ul>
              {books.map((book) => (
                <li key={book.id} className="section_book_item">
                  <Link
                    to={`/category/books/${book.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="section_book_wrapper">
                      <div className="section_book_cover_wrapper">
                        <img src={book.image} className="section_book_cover" />
                      </div>
                      <div className="section_book_title_wrapper">
                        <h1 className="section_book_title">{book.title}</h1>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-picture-header-text">
            <h1 className="section-picture-header-title">
              Every Picture Tell A Story
            </h1>
            <Link
              to="/category/gallery"
              className="section-picture-header-link"
            >
              Explore
            </Link>
          </div>
          <div className="picture_container">
            <div className="picture_item_left">
              <div className="picture_cover_wrapper">
                <img
                  src="https://picsum.photos/200/304"
                  className="picture_cover"
                />
              </div>
              <div className="picture_cover_information">
                <h1 className="picture_cover_title">Kano State HCB</h1>
                <p className="picture_cover_subtitle">
                  The First thing that most programmer say.
                </p>
              </div>
            </div>
            <div className="picture_item_right">
              <ul className="picture_item_wrapper">
                {images.map((image) => (
                  <li
                    key={image.id}
                    className="picture_item_group"
                    style={{ backgroundColor: image.color }}
                  >
                    <div className="picture_item_group_wrapper">
                      <img src={image.image} className="picture_image_group" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Location */}
        {/* <div className="location__wrapper">
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
        </div> */}
        {/* Articles */}
        <div className="post__wrapper">
          <ul className="post_article_container">
            <li className="post_article_wrapper">
              <div className="post_article_">
                <div className="post_image_container">
                  <img
                    className="post_image"
                    src="./images/house/inside-1.jpg"
                    alt="post-image"
                  />
                </div>
                <div className="post__article">
                  <h1 className="post__article_title">Gidan Dan Hausa Kano</h1>
                  <p className="post__article_subtitle">
                    some lorem ipsum text here and some button and links some
                    lorem ipsum text here and some bu
                  </p>
                  <Link to="/" className="post__article_link">
                    Read More
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* end */}
      </div>
    </>
  );
}

export default Sections;
