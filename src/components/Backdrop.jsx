import React from "react";

const Backdrop = ({ sidebar, closeSidebar }) => {
  return (
    <div
      onClick={closeSidebar}
      className={sidebar ? "backdrop backdrop--open" : "backdrop"}
    ></div>
  );
};

export default Backdrop;
