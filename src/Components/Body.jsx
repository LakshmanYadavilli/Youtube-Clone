import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import Head from "./Head";
import { context } from "../App";
import SideBar from "./SideBar";

const Body = () => {
  const appContext = useContext(context);
  console.log({ context });
  const { sidebarHandler, isSidebar } = appContext;
  return (
    <div>
      <Head sidebarHandler={sidebarHandler} />

      {isSidebar && <SideBar sidebarHandler={sidebarHandler} />}
      <Outlet />
    </div>
  );
};

export default Body;
