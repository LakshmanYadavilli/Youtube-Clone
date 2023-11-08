import React, { useContext } from "react";
import Head from "./Head";
import { context } from "../App";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";

const Watch = () => {
  const appContext = useContext(context);
  const location = useLocation();
  console.log({ location });
  const { sidebarHandler, isSidebar } = appContext;
  return (
    <div>
      <Head sidebarHandler={sidebarHandler} />
      <div>{isSidebar && <SideBar sidebarHandler={sidebarHandler} />}</div>
      <div className="absolute top-32">
        <iframe
          width="560"
          height="315"
          src={
            "https://www.youtube.com/embed/" +
            location.state.id +
            "?si=YBKBwUTfO-mFdEYL"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;
