import React from "react";
import "../styles/Projects.css";
import Card from "../components/core/Card";

const Projects = () => {
  return (
    <div
      className="container d-flex flex-wrap justify-content-center align-items-center"
      styles={{ marginLeft: 400 }}
    >
      <div className="col-md-4 col-sm-6 px-2 mx-2 py-2 my-2">
        <Card
          title="Project-04"
          demo="https://project-04-ucamp.netlify.app/"
          repository="https://github.com/EdnGG/Ucamp-project-04"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Project-05"
          demo="https://frontend-restapi-ucamp.up.railway.app/login"
          repository="https://github.com/EdnGG/frontend-restAPI-ucamp"
          repositoryFront="https://github.com/EdnGG/frontend-vue-todo"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Dashboard Ucamp"
          demo="https://edngg.github.io/dashboard-ucamp/?classId=39b87aea-01cf-49fd-ba3b-1a6573bc794e&assignmentId=1a36a8eb-1947-48b9-b1e4-53b20d1d0bf3&submissionId=6f143b06-a6b3-9a86-a508-a9ef0f539b38"
          repository="https://github.com/EdnGG/dashboard-ucamp"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Old POrtfolio Node"
          demo="https://node-portfolio.onrender.com/"
          repository="https://github.com/EdnGG/node-portfolio"
        />
      </div>
      <div className="col-md-4 col-sm-6">
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
