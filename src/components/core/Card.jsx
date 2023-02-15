import React from "react";

const Card = () => {
  return (
    <div
      className="card py-4 px-4 my-4 mx-4 justify-content-center align-items-center d-flex col-md-4 col-sm-6"
      style={{
        width: "10rem",
        height: "15rem",
      }}
    >
      <img
        src="https://picsum.photos/300/300"
        alt="placeholder"
        className="card-img-top"
        height={125}
      />
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <div className="d-grid gap-2">
          <a
            href="https://www.example.com/live-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>
          <a
            href="https://www.example.com/repository"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
