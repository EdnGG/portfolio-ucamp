import React from "react";
import "../styles/Home.css";
import MyCarousel from "../components/core/MyCarousel";

const Home = () => {
  return (
    <div
      className="d-flex col-md-4 col-sm-6"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="d-flex flex-wrap col-md-4 col-sm-6"
        style={{ height: "100vh", width: "100%" }}
      >
        <h1
          className="fw-bolder pt-4 mt-4 px-5 mx-5 justify-content-start"
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
            className="fw-bolder px-4 py-4 mx-3 my-3 text-white"
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
              // left: "50%",
            }}
            // hidden
          >
            <MyCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
