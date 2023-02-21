import React from "react";
import "../styles/Projects.css";
import Card from "../components/core/Card";

const Projects = () => {
  return (
    // <div
    //   className="container d-flex flex-wrap justify-content-center align-items-center"
    //   style={{ marginLeft: 500 }}
    // >
    //   <div className="row  ">
    //     <div className="col-lg-4 col-md-4 col-sm-6">
    //       <Card
    //         title="Restaurant app (React + Firebase)"
    //         demo="https://project-04-ucamp.netlify.app/"
    //         repository="https://github.com/EdnGG/Ucamp-project-04"
    //       />
    //     </div>
    //     <div className="col-lg-4 col-md-4 col-sm-6">
    //       <Card
    //         title="MERN Stack E-commerce"
    //         demo="https://frontend-restapi-ucamp.up.railway.app/login"
    //         repository="https://github.com/EdnGG/frontend-restAPI-ucamp"
    //         repositoryFront="https://github.com/EdnGG/frontend-vue-todo"
    //       />
    //     </div>
    //     <div className="col-lg-4 col-md-4 col-sm-6">
    //       <Card
    //         title="Dashboard Ucamp (React + Firebase)"
    //         demo="https://edngg.github.io/dashboard-ucamp/?classId=39b87aea-01cf-49fd-ba3b-1a6573bc794e&assignmentId=1a36a8eb-1947-48b9-b1e4-53b20d1d0bf3&submissionId=6f143b06-a6b3-9a86-a508-a9ef0f539b38"
    //         repository="https://github.com/EdnGG/dashboard-ucamp"
    //       />
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-lg-4 col-md-4 col-sm-6">
    //       <Card
    //         title="Portfolio Node + Express.js + EJS"
    //         demo="https://node-portfolio.onrender.com/"
    //         repository="https://github.com/EdnGG/node-portfolio"
    //       />
    //     </div>
    //     <div className="col-lg-4 col-md-4 col-sm-6">
    //       <Card
    //         title="MEVN Stack - Todo App"
    //         demo="https://todo-vuetify-front.onrender.com/"
    //         repository="https://github.com/EdnGG/vue-vuetify-mevn/tree/railway"
    //         repositoryFront="https://github.com/EdnGG/frontend-vue-todo"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div
      className="container d-flex flex-wrap justify-content-center align-items-center"
      styles={{
        marginLeft: 400,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="col-md-4 col-sm-6">
        <Card
          title="Restaurant app (React + Firebase)"
          demo="https://project-04-ucamp.netlify.app/"
          repository="https://github.com/EdnGG/Ucamp-project-04"
          img="./assets/img/restaurant-app.png"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="E-commerce (MERN Stack + Paypal)"
          demo="https://frontend-restapi-ucamp.up.railway.app/login"
          repository="https://github.com/EdnGG/frontend-restAPI-ucamp"
          img="./assets/img/e-comerce.png"
          repositoryFront="https://github.com/EdnGG/frontend-vue-todo"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Dashboard Ucamp (React + Localstorage)"
          demo="https://edngg.github.io/dashboard-ucamp/?classId=39b87aea-01cf-49fd-ba3b-1a6573bc794e&assignmentId=1a36a8eb-1947-48b9-b1e4-53b20d1d0bf3&submissionId=6f143b06-a6b3-9a86-a508-a9ef0f539b38"
          repository="https://github.com/EdnGG/dashboard-ucamp"
          img="./assets/img/dashboard.png"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Portfolio (Node + Express.js + EJS)"
          demo="https://node-portfolio.onrender.com/"
          repository="https://github.com/EdnGG/node-portfolio"
          img="./assets/img/portfolio-node.png"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Todo App (MEVN Stack + Vuetify + Strapi)"
          demo="https://todo-vuetify-front.onrender.com/"
          repository="https://github.com/EdnGG/vue-vuetify-mevn/tree/railway"
          img="./assets/img/MEVN-stack.png"
          repositoryFront="https://github.com/EdnGG/frontend-vue-todo"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Random quote generator (Treehouse) "
          demo="https://edngg.github.io/project-01/"
          repository="https://github.com/EdnGG/project-01"
          img="./assets/img/random-quote-1.jpeg"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Pagination Filter (Treehouse) "
          demo="https://edngg.github.io/pagination-filter-v2/#"
          repository="https://github.com/EdnGG/pagination-filter-v2"
          img="./assets/img/pagination-2.png"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Interactive Form (Treehouse) "
          demo="https://edngg.github.io/project3-treehouse/"
          repository="https://github.com/EdnGG/project3-treehouse"
          img="./assets/img/form-images-3.png"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="Tic Tac Toe (Treehouse) "
          demo="https://edngg.github.io/project4-treehouse/"
          repository="https://github.com/EdnGG/project4-treehouse"
          img="./assets/img/game-3.png"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="VSI Retrofit Form (JS + Bootstrap + Firebase) "
          demo="https://vsi-project.web.app/"
          repository="https://github.com/EdnGG/VSI-project"
          img="./assets/img/vsi-3.png"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <Card
          title="VSI Inspection Report (Vue.js + Firebase + Vuetify) "
          demo="https://inspection-6c319.web.app/"
          repository="https://github.com/EdnGG/VSI-project"
          img="./assets/img/vsi-inspection.png"
        />
      </div>
    </div>
  );
};

export default Projects;
