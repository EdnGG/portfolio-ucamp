import React from "react";

const Home = () => {
  return (
    <div
      className="d-flex col-md-4 col-sm-6"
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        style={{ height: "100vh", width: "100%" }}
      >
        <h1 className="py3 my-3 px-3 mx-3">Hello Everyone!</h1>
        <div className="px-3 py-3 mx-3 my-3 text-center">
          <h3>
            Hello everyone, my name is Eden Gomez and this is my portfolio. I
            build it using technologies such as React.js and Bootstrap 5. I love
            all about the tech field and I'm open to work and colaborate with
            amazing people helping to build amazing things.
          </h3>
          <div className="justify-content-center align-items-center">
            <img
              className="mx-auto rounded"
              src="https://picsum.photos/325/325"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
