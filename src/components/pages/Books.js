import React, { useState } from "react";
import Button from "../Button";
import Navbar from "../Navbar";
import "./Books.css";

function Books() {
  const [book_click, setBookClick] = useState(false);
  const [book, setBook] = useState({});
  const books = [
    {
      id: 1,
      cover:
        "https://cdn.asaha.com/assets/thumbs/26d/26d5391ee9de370250de3bc599d3fad9.jpg",
      title: "When the Moon Split",
      author: "Kabir Ibn Bappi",
      genre: "Islamic",
      date: "14 Jan 2002",
    },
    {
      id: 2,
      cover:
        "https://cdn.asaha.com/assets/thumbs/fe4/fe4ad25d94fc443816da8400a25debab.jpg",
      title: "No God But Allah",
      author: "Salis Ibn Abubakar",
      genre: "Islamic",
      date: "14 Jan 19BC",
    },
  ];

  const handleSetBook = (id) => {
    const book = books.filter((book) => book.id === id)[0];
    setBook(book);
    setBookClick(true);
  };

  const BookViewer = () => {
    return (
      <>
        <div className="book_viewer_container">
          <div className="book_viewer_wrapper">
            <Button
              children={"X"}
              onClick={() => setBookClick(false)}
              type={{ position: "absolute", right: "0", color: "red" }}
            />
            <div className="book_viewer_image_cover">
              <img src={book.cover} className="book_viewer_image" />
            </div>
            <div className="book_viewer_image_info">
              <h1>Book Title:</h1>
              <h1>{book.title}</h1>
              <h4>Author: {book.author}</h4>
              <h4>Genre: {book.genre}</h4>
              <h4>Date: {book.date}</h4>
              <div className="book_viewer_button">
                <Button children={"Add To Your Library"} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {book_click && <BookViewer />}
      <Navbar />
      <div className="book_container">
        <h1 className="books_title">Books Archive</h1>
        {/* <ul className="books_categories_wrapper">
          <li className="books_category_filter">All</li>
          <li className="books_category_filter">A - Z</li>
          <li className="books_category_filter">Year</li>
        </ul> */}
        <ul className="books_list_wrapper">
          {books.map((book) => (
            <>
              <li key={book.id} onClick={() => handleSetBook(book.id)}>
                <div className="books_wrapper">
                  <img src={book.cover} className="books_image_cover" />
                </div>
                <h2 className="books_title_name">{book.title}</h2>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Books;
