import React from "react";

const Card = (props) => {
  return (
    <div
      className="card py-4 px-4 my-4 mx-4 justify-content-center align-items-center d-flex col-md-4 col-sm-6"
      style={{
        width: "15rem",
        height: "auto",
        backgroundColor: "#f0ad4e",
      }}
    >
      <img
        src="https://picsum.photos/300/300"
        alt="placeholder"
        className="card-img-top img-fluid"
        height="auto"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="d-grid gap-2">
          <a
            href={props.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-success text-white"
            // styles={{ backgroundColor: "#f0ad4e", color: "#fff" }}
          >
            Live Demo
          </a>
          <a
            href={props.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light text-dark"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
