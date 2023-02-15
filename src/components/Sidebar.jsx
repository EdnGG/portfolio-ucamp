import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600 && isNavOpen) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);
  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span class="material-symbols-outlined">
          {isNavOpen ? "toggle_on" : "toggle_off"}
        </span>
      </button>
      <nav
        className={`nav ${
          isNavOpen ? "nav-open d-flex flex-wrap flex-column" : "nav-closed"
        }`}
      >
        <div classname="logo">
          <img className="img" src="https://picsum.photos/200/200" alt="logo" />
        </div>
        <ul>
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="links" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
