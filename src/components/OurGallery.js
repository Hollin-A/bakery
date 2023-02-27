import React from "react";
import galleryBakery01 from "../assets/gallery-bakery-01.jpg";
import galleryBakery02 from "../assets/gallery-bakery-02.jpg";
import galleryBakery03 from "../assets/gallery-bakery-03.jpg";

export const OurGallery = () => {
  return (
    <section className="p-5">
      <div className="container">
        <h2 className="text-center mb-4 font-serif">Our Gallery</h2>
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-interval="false"
        >
          <div className="carousel-inner" style={{ height: "75vh" }}>
            <div className="carousel-item active">
              <img
                src={galleryBakery01}
                className="d-block "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={galleryBakery02}
                className="d-block "
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={galleryBakery03}
                className="d-block "
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};
