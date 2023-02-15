import React, { useState, useEffect } from "react";
import {
  // RiMenuLine,
  RiHome2Fill,
  // RiProjectorFill,
  Ri24HoursFill,
  RiMore2Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
// import Backdrop from "../components/Backdrop";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
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
