import React, { useState, useContext, useEffect } from "react";
import Head from "./Head";
import { context } from "../App";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";

import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { generateEmoji, generateName, generateText } from "../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../utils/chatSlice";

const Watch = () => {
  const appContext = useContext(context);
  const location = useLocation();
  const { state } = location;
  const { id } = state;
  const chatData = useSelector((state) => state.chatData.chatArr);
  const dispatch = useDispatch();
  const [liveChatText, setLiveChatText] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      dispatch(
        addChat({
          name: generateName(),
          comment: generateText(20) + generateEmoji(),
        })
      );
    }, 600);
    return () => clearInterval(id);
  }, []);
  const { sidebarHandler, isSidebar } = appContext;
  return (
    <div>
      <Head sidebarHandler={sidebarHandler} />
      <div>{isSidebar && <SideBar sidebarHandler={sidebarHandler} />}</div>
      <div className="mt-32 flex w-screen ">
        <div className="w-[60%]">
          <iframe
            width="100%"
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
        <div className="w-[40%] h-[315px] flex-col justify-center items-center  fixed right-0 ">
          <div className="overflow-y-scroll flex flex-col-reverse h-[80%] w-[80%] mx-[10%]">
            {chatData?.map((item, index) => (
              <LiveChat key={index} data={item} />
            ))}
          </div>
          <div className="h-[20%] flex justify-center items-center">
            <input
              type="text"
              className=" h-8 w-[60%] border-b-2 outline-none border-gray-600"
              value={liveChatText}
              onChange={(e) => setLiveChatText(e.target.value)}
            />
            <button
              className="border-2 bg-blue-400 w-20 h-8 font-bold"
              onClick={() => {
                liveChatText !== "" &&
                  dispatch(
                    addChat({
                      name: "Lakshman",
                      comment: liveChatText,
                    })
                  );
                setLiveChatText("");
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <Comments id={id} />
    </div>
  );
};

export default Watch;
