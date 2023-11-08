import React from "react";
import Head from "./Head";
import SideBar from "./SideBar";
import { useState, useRef, useContext } from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import shortsIcon from "../assets/shorts-logo.png";
import subscriptionIcon from "../assets/subscription_icon.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { PiVideo } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { context } from "../App";

const MainContainer = () => {
  const appContext = useContext(context);
  console.log({ context });
  const { sidebarHandler, isSidebar } = appContext;
  const [isBegin, setIsBegin] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const btnList = [
    "All",
    "Mixes",
    "Live",
    "BigBoss",
    "Movie",
    "WebSeries",
    "Cricket",
    "PubG",

    "Comedy Show",
    "Music",
    "Chess",

    "Sports",
    "News",
    "JavaScript",
    "Poltics",
    "Watched",
    "Recently Uploaded",
    "New to You",
  ];
  const scrollBar = useRef(null);
  const leftBtn = () => {
    if (scrollBar.current) {
      scrollBar.current.scrollLeft -= 30;
      setScrollLeft(scrollBar.current.scrollLeft);
      if (scrollBar.current.scrollLeft > 0) setIsBegin(false);
      if (scrollBar.current.scrollLeft === 0) setIsBegin(true);
    }
  };
  const RightBtn = () => {
    if (scrollBar.current) {
      scrollBar.current.scrollLeft += 30;
      if (scrollLeft === scrollBar.current.scrollLeft) {
        setIsEnd(true);
      }
      setScrollLeft(scrollBar.current.scrollLeft);
      if (scrollBar.current.scrollLeft > 0) setIsBegin(false);
    }
  };

  return (
    <div>
      <Head sidebarHandler={sidebarHandler} />

      {isSidebar && <SideBar sidebarHandler={sidebarHandler} />}

      <div className="mt-32">
        <div className=" relative flex flex-row">
          <div className=" fixed top-32  w-[10vw] h-screen  flex flex-col justify-start p-2 items-center">
            <GoHomeFill className="text-xl" />
            <p>Home</p>
            <br />

            <img src={shortsIcon} alt="shortsIcon" className="w-5" />
            <p>Shorts</p>
            <br />

            <img
              src={subscriptionIcon}
              alt="subscriptionIcon"
              className="w-5"
            />
            <p>Subscription</p>
            <br />

            <PiVideo className="text-xl" />
            <p>You</p>
          </div>
          <div className=" relative w-[90vw] ml-[10vw]  ">
            <div className=" flex  overflow-hidden">
              {!isBegin && (
                <div className="w-[5vw] flex items-center justify-center text-2xl font-bold cursor-pointer">
                  <AiOutlineLeft onClick={leftBtn} />
                </div>
              )}
              <div
                ref={scrollBar}
                className=" w-[80vw] overflow-hidden flex whitespace-nowrap"
              >
                {btnList.map((item, index) => (
                  <ButtonList text={item} key={index} />
                ))}
              </div>
              {!isEnd && (
                <div className="w-[5vw] flex items-center justify-center  text-2xl font-bold cursor-pointer">
                  <AiOutlineRight onClick={RightBtn} />
                </div>
              )}
            </div>

            <VideoContainer className="absolute top-56" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
