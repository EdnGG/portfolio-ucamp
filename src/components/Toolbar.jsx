import React from "react";
import { RiMenuLine } from "react-icons/ri";

const ToolBar = ({ openSidebar }) => {
  return (
    <div className="tool-bar">
      <div className="burger" onClick={openSidebar}>
        <RiMenuLine />
      </div>
      <div className="title">Eden Gomez </div>
    </div>
  );
};

export default ToolBar;
