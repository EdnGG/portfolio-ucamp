import React from "react";
import "../styles/Home.css";
import MyCarousel from "../components/core/MyCarousel";

const Home = () => {
  return (
    <div
      className="home-main row"
      style={{
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <div
        className="contenedor col-md-8 col-sm-12 d-flex flex-wrap col-lg-6 justify-content-center align-items-center"
        style={{ width: "100%" }}
      >
        <h1
          className="text-home fw-bolder pt-4 mt-4 px-5 mx-5 justify-content-start"
          style={{
            fontFamily: "Arial",
            color: "white",
            fontSize: "5rem",
            fontWeight: "bold",
          }}
        >
          Hey Everyone!
        </h1>
        <div className="px-3 py-3 mx-3 my-3 text-center justify-content-center align-items-center">
          <h3
            className="text-home fw-bolder px-4 py-4 mx-3 my-3 text-white"
            style={{
              fontFamily: "CourierNew, monospace",
              fontSize: "3rem",
              color: "#483D8B",
            }}
          >
            My name is Eden Gomez and this is my portfolio. I build it using
            technologies such as React.js and Bootstrap 5. I love all about the
            tech field and I'm open to work and colaborate with amazing people
            helping to build amazing things.
          </h3>

          <div
            className="justify-content-center align-items-center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "35vh",
              maxWidth: "100vw",
              overflow: "auto",
            }}
          >
            <MyCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
