import React from "react";
import Navbar from "../Navbar";
import "./Gallery.css";

function Gallery() {
  const gallery = [
    { id: 1, image: "https://picsum.photos/201/300" },
    { id: 2, image: "https://picsum.photos/202/300" },
    { id: 3, image: "https://picsum.photos/203/300" },
    { id: 4, image: "https://picsum.photos/204/300" },
    { id: 5, image: "https://picsum.photos/205/300" },
    { id: 6, image: "https://picsum.photos/206/300" },
    { id: 7, image: "https://picsum.photos/207/300" },
    { id: 8, image: "https://picsum.photos/208/300" },
  ];
  return (
    <>
      <Navbar />
      <div className="gallery_container">
        <h1 className="gallery_title_text">Historical Images</h1>
        <hr style={{ width: "50%", marginTop: "20px" }} />
        <div className="gallery_item_wrapper">
          <ul className="gallery_list_wrapper">
            {gallery.map((item) => (
              <li key={item.id}>
                <div className="gallery_wrapper">
                  <img src={item.image} className="gallery_image_cover" />
                </div>
                <h2 className="gallery_title_name">Whatever</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Gallery;
