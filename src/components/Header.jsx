import React, { useState } from "react";
import Toolbar from "./Toolbar";
import SideBar from "./Sidebar";
import Backdrop from "./Backdrop";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSideBar = () => {
    setSidebar((prevSate) => !prevSate);
  };

  return (
    <div>
      <Toolbar openSidebar={toggleSideBar} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSideBar} />
      <SideBar sidebar={sidebar} />
    </div>
  );
};

export default Header;
