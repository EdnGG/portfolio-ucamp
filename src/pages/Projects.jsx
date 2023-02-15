import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/core/Card";

const Projects = () => {
  return (
    <div
      className="d-flex col-md-4 col-sm-6"
      style={{
        backgroundColor: "lightgrey",
        height: "80vh",
        width: "100vw",
      }}
    >
      {/* <div
        className="d-flex flex-column col-md-4 col-sm-6"
        style={{
          height: "80vh",
          width: "20vw",
          backgroundColor: "white",
        }}
      >
        <Sidebar />
      </div> */}
      <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        style={{ height: "80vh", width: "100%" }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
