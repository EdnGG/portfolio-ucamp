import React from "react";

const About = () => {
  return (
    <div className="row" style={{ height: "100vh", width: "100vw" }}>
      <div className="col-md-8 col-sm-12 d-flex flex-wrap justify-content-center align-items-center">
        <div className="text-center">
          <h1
            style={{
              fontSize: "3rem",
              fontFamily: "CourierNew, monospace",
              fontWeight: "bold",
              color: "white",
            }}
          >
            My name is Eden Gomez
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            Soy un apasionado de [tu área de interés] y me encanta [tu
            pasatiempo o actividad favorita relacionada con tu área de interés].
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            En mi tiempo libre, también disfruto [tu otro pasatiempo o actividad
            favorita relacionada con tu área de interés].
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            Me gradué de [tu universidad o escuela] con una licenciatura en [tu
            campo de estudio].
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            Actualmente trabajo como [tu trabajo o profesión] y me gusta [lo que
            te gusta de tu trabajo o profesión].
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "CourierNew, monospace",
              lineHeight: "2rem",
              color: "white",
            }}
          >
            ¡Gracias por visitar mi página de "Acerca de"!
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
        <aside
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
            Habilidades (Skills)
          </h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>Habilidad 1</li>
            <li>Habilidad 2</li>
            <li>Habilidad 3</li>
            <li>Habilidad 4</li>
            <li>Habilidad 5</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default About;
