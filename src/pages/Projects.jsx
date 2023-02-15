import React from "react";
import Card from "../components/core/Card";

const Projects = () => {
  return (
    <div
      className="d-flex col-md-4 col-sm-6"
      style={{
        backgroundColor: "lightgrey",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        style={{ height: "100vh", width: "100%" }}
      >
        <Card
          title="Project-04"
          demo="https://project-04-ucamp.netlify.app/"
          repository="https://github.com/EdnGG/Ucamp-project-04"
        />
        <Card
          title="Project-05"
          demo="https://frontend-restapi-ucamp.up.railway.app/login"
          repository="https://github.com/EdnGG/frontend-restAPI-ucamp"
          repositoryFront="https://github.com/EdnGG/frontend-vue-todo"
        />
        <Card
          title="Dashboard Ucamp"
          demo="https://edngg.github.io/dashboard-ucamp/?classId=39b87aea-01cf-49fd-ba3b-1a6573bc794e&assignmentId=1a36a8eb-1947-48b9-b1e4-53b20d1d0bf3&submissionId=6f143b06-a6b3-9a86-a508-a9ef0f539b38"
          repository="https://github.com/EdnGG/dashboard-ucamp"
        />
        <Card
          title="Old POrtfolio Node"
          demo="https://node-portfolio.onrender.com/"
          repository="https://github.com/EdnGG/node-portfolio"
        />
        <Card
          title="MEVN Stack"
          demo="https://todo-vuetify-front.onrender.com/"
          repository="https://github.com/EdnGG/vue-vuetify-mevn/tree/railway"
          repositoryFront="https://github.com/EdnGG/frontend-vue-todo"
        />
      </div>
    </div>
  );
};

export default Projects;
