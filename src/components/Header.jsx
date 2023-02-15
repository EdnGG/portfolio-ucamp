// import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Link className="px-2 navbar-brand" to="/">
        GUITARWORLD
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link p-3" to="/guitars">
            Catalog
          </Link>
        </Nav>

        <Nav>
          <Link className="nav-link p-3" to="/profile">
            Profile
          </Link>
          <Nav
            className="nav-icons d-flex justify-content-end"
            // style={{ padding: "0 60vw" }}
          >
            <Link className="nav-link p-3" to="/paypal">
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="1x"
                className="mx-3 text-black"
              />
            </Link>
            <Link className="nav-link p-3" to="/">
              Logout
            </Link>
          </Nav>
        </Nav>

        <Nav>
          <Link className="nav-link p-3" to="/signin">
            Sign In
          </Link>
          <Link className="nav-link p-3" to="/login">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
