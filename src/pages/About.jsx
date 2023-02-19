import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div
      className="contenedor row"
      style={{
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <div
        // style={{ paddingLeft: "17rem", paddingRight: "2rem" }}
        className="secondary-div col-md-8 col-sm-12 col-lg-6 d-flex flex-wrap justify-content-center align-items-center"
      >
        <div className="text-center">
          <h1
            style={{
              fontSize: "3rem",
              fontFamily: "CourierNew, monospace",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Hi! I'm Eden Gomez and I'm a Fullstack Javascript Developer.
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            I am passionate about technology and I love programming and creating
            amazing products with software.
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            In my spare time, I also enjoy spending time with my family and
            friends.
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            I have studied on platforms such as
            <a
              style={{
                fontSize: "2rem",
              }}
              href="https://teamtreehouse.com/edengomez"
              target="_blank"
              rel="noreferrer"
            >
              Teamtreehouse
            </a>
            ,{" "}
            <a
              style={{
                fontSize: "2rem",
              }}
              href="https://platzi.com/@EdenGg/"
              target="_blank"
              rel="noreferrer"
            >
              Platzi{" "}
            </a>
            and{" "}
            <a
              style={{
                fontSize: "2rem",
                // fontWeight: ,
              }}
              href="https://ucamp.io/"
              target="_blank"
              rel="noreferrer"
            >
              Ucamp{" "}
            </a>
            as a Javascript Developer
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            I currently work as a Technician at Valve Solutions Inc and I like
            to develop freelance projects for them.
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            Thanks for Visiting my Page!
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
        <aside
          className="d-flex flex-wrap justify-content-center align-items-center"
          style={{
            fontSize: "1.5rem",
            fontFamily: "CourierNew, monospace",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontFamily: "CourierNew, monospace",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            SKILLS
          </h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>Vuetify</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default About;
