import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="mt-auto d-flex flex-column bg-black py-4 my-4 justify-content-center align-items-center"
      style={{ height: "40vh", width: "100%" }}
    >
      <div
      // style={{ height: "20vh", width: "100%" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <a href="https://www.facebook.com/liledn.mexikn/" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="mx-3 text-white"
            />
          </a>
          <a href="https://node-portfolio.onrender.com/" target="_blank">
            <FontAwesomeIcon
              icon={faBriefcase}
              size="2x"
              className="mx-3 text-white"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/eden-gomez-5002a386/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="mx-3 text-white"
            />
          </a>
          <a href="https://github.com/EdnGG" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="mx-3 text-white"
            />
          </a>
        </div>
        <div className="my-1 py-1">
          <p className="text-center text-base leading-6 text-white">
            &copy; 2023{" "}
            <Link
              href="/"
              className=" nav-link text-gray-500 hover:text-gray-900"
            >
              Project 05 Ucamp. All rights reserved.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
