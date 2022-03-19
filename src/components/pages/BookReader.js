import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import Navbar from "../Navbar";
import "./BookReader.css";

function BookReader() {
  const { bookId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [selected_book, setSelectedBook] = useState("");
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

  useEffect(() => {
    const book = books.filter((book) => book.id === Number(bookId))[0];
    setSelectedBook(book);
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="book_details_container">
        <div className="book_details_cover">
          <img src={selected_book.image} className="book_details_image" />
        </div>
        <div className="book_details_info">
          <h1 className="book_title">{selected_book.title}</h1>
          <p className="book_author">
            By <span className="book_author">Salisu Abubakar</span>, Year
            Release: 2080
          </p>
          <p className="book_description_title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="book_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            porta ex. In consequat pulvinar nunc sit amet gravida. Quisque
            dignissim porta tortor a pellentesque. Vestibulum congue eleifend
            erat, eu elementum ipsum euismod sit amet. Nulla a nibh vel massa
            sodales hendrerit at venenatis diam. Mauris nec auctor eros. Ut quis
            blandit ipsum, eu condimentum ipsum. Integer placerat egestas ipsum
            non placerat. Maecenas eleifend augue vel elit malesuada lobortis ut
          </p>
          <div className="book_details_group">
            <button className="book_btn">Add to library</button>
            <Link to={`/category/books/read/${selected_book.title}`}>
              <button className="book_btn">Read Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookReader;
