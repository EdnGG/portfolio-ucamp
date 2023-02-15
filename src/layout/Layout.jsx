import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        style={{
          // backgroundColor: "green",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Outlet />
      </div>
      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
