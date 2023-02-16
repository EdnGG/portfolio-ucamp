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
      <div styles={{ minHeight: "100vh", width: "100vw" }}>
        <div
          className="d-flex flex-column justify-content-center align-items-center flex-grow-1 mb-5"
          // style={{
          // flexGrow: 1,
          // height: "100vh",
          // width: "100vw",
          // backgroundColor: "white",
          // }}
        >
          <Outlet />
        </div>
        <div className="pt-5 mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
