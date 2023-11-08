import React from "react";
import { BiMenu } from "react-icons/bi";
import shortsIcon from "../assets/shorts-logo.png";
import subscriptionIcon from "../assets/subscription_icon.png";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

import YoutubeIcon from "../assets/YouTubeLogo.png";

const SideBar = ({ sidebarHandler }) => {
  return (
    <div className="w-[16vw]  fixed top-0 h-screen bg-white z-20 shadow-2xl">
      <div className="flex justify-evenly items-center">
        <BiMenu
          className="text-2xl mr-6 text-gray-500 cursor-pointer"
          onClick={sidebarHandler}
        />
        <img src={YoutubeIcon} alt="YoutubeIcon" className="w-32" />
      </div>
      <div className="p-4">
        <Link to="/">
          <div className="flex items-center" onClick={sidebarHandler}>
            <GoHomeFill className="text-lg " />
            <span className="pl-3">Home</span>
          </div>
        </Link>
        <div className="flex items-center">
          <img src={shortsIcon} alt="shortsIcon" className="w-5" />
          <span className="pl-3">Shorts</span>
        </div>
        <div className="flex items-center">
          <img src={subscriptionIcon} alt="subscriptionIcon" className="w-5" />
          <span className="pl-3">Subscription</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
