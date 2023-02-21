import React, { useEffect } from "react";
import { Carousel } from "bootstrap";

const MyCarousel = () => {
  useEffect(() => {
    // Manually initialize the carousel
    const carousel = document.querySelector("#carouselExampleDark");
    new Carousel(carousel, { interval: 4000 });
  }, []);
  return (
    <div
      id="carouselExampleDark"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "50%",
        maxHeight: "50%",
        width: "auto",
        height: "auto",
      }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="./assets/vue.jpg" className="w-30" alt="Vue.Js" />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Vue.JS</h5> */}
            {/* <p>Some representative placeholder content for the first slide.</p> */}
          </div>
        </div>
        <div
          // styles={{
          //   width: "100%",
          //   height: "100vh",
          //   maxWidth: "100%",
          //   maxHeight: "100vh",
          // }}
          className="carousel-item"
          data-bs-interval="4000"
        >
          <img
            // styles={{
            //   width: "100%",
            //   height: "100%",
            //   maxWidth: "100%",
            //   maxHeight: "100%",
            // }}
            src="./assets/react5.jpg"
            className="w-30"
            alt="React.Js"
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>React.JS</h5> */}
            {/* <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./assets/node.png"
            className="w-30"
            // styles={{
            //   width: "50%",
            //   height: "auto",
            //   maxWidth: "50%",
            //   maxHeight: "auto",
            // }}
            alt="Node.Js"
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Third slide label</h5> */}
            {/* <p>Some representative placeholder content for the third slide.</p> */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;
