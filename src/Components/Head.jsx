import React from "react";
import { BiMenu, BiSearch } from "react-icons/bi";

import YoutubeIcon from "../assets/YouTubeLogo.png";

const Head = ({ sidebarHandler }) => {
  return (
    <div className="fixed top-0 z-20 flex shadow-lg justify-around items-center p-4 bg-white">
      <div className="flex justify-start items-center w-[30vw]">
        <BiMenu
          className="text-2xl ml-8 mr-6 text-gray-400 cursor-pointer"
          onClick={sidebarHandler}
        />
        <img
          className="w-[100px]  h-[60px]"
          src={YoutubeIcon}
          alt={YoutubeIcon}
        />
      </div>
      <div className="w-[40vw] flex items-center justify-center">
        <input
          type="search"
          placeholder="search"
          className=" outline-none p-2  border-gray-500 border-2 border-solid h-8 w-[80%]  rounded-l-full"
        />
        <p className="border-r-2 border-y-2 rounded-r-full h-8 border-gray-500 bg-gray-400 ">
          <BiSearch className="text-3xl p-1 cursor-pointer" />
        </p>
      </div>
      <div className="w-[30vw] flex justify-center items-center relative">
        <p className=" absolute right-10 w-10 h-10 rounded-[50%] bg-gray-600 flex justify-center items-center text-lg font-bold">
          L
        </p>
      </div>
    </div>
  );
};

export default Head;
