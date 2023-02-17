import React from "react";
import "../styles/Sidebar.css";
import { RiHome2Fill, Ri24HoursFill, RiMore2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="py-3  my-3">
        <img
          src="./assets/profile.jpg"
          alt="profile"
          className="rounded-circle profile-image mx-auto d-block"
        />
      </div>
      <Link className="nav-link sidebar-li" to="/">
        <RiHome2Fill />
        Home
      </Link>
      <Link className="nav-link sidebar-li" to="/projects">
        <Ri24HoursFill />
        Projects
      </Link>
      <Link className="nav-link sidebar-li" to="/about">
        <RiMore2Fill />
        About
      </Link>
    </div>
  );
};

export default Sidebar;
