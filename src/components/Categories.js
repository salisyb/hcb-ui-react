import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories_container">
      <h1 className="categories_header">Categories</h1>
      <div className="categories_card_wrapper">
        <Link to="/category/books">
          <div className="categories_card_item">
            <div className="categories_card">
              <img
                src="./images/categories/book-cover.jpg"
                alt="where"
                className="categories_image"
              />
            </div>
            <h2>Historical Books</h2>
            <p>700 books and counting</p>
          </div>
        </Link>
        <Link to="/category/gallery">
          <div className="categories_card_item">
            <div className="categories_card">
              <img
                src="./images/categories/gallery-category.jpeg"
                alt="where"
                className="categories_image"
              />
            </div>
            <h2>Historical Images</h2>
            <p>View Places that are 300 years old</p>
          </div>
        </Link>
        <Link to="/category/books">
          <div className="categories_card_item">
            <div className="categories_card">
              <img
                src="./images/categories/book-cover.jpg"
                alt="where"
                className="categories_image"
              />
            </div>
            <h2>Amazing Videos</h2>
            <p>700 books and counting</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
