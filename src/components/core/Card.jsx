import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/150"
        alt="placeholder"
        className="card-img-top"
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
