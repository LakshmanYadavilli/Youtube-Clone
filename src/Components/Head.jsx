import React, { useState, useEffect, useRef } from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { addToCache } from "../utils/suggestionSlice";
import { addData } from "../utils/videosSlice";
import { youtubeApi } from "../utils/constants";
import YoutubeIcon from "../assets/YouTubeLogo.png";
import { suggestionUrl } from "../utils/constants";
import { v4 } from "uuid";

const Head = ({ sidebarHandler }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const res = await fetch(youtubeApi);

    const data = await res.json();
    const obj = {};
    data.items.map((item) => {
      obj[item.id] = item;
      obj[item.id] = {
        ...obj[item.id],
        comments: {
          [v4()]: {
            name: "Lakshman Yadavilli",
            comment: "Great Work",
            replies: [],
          },
        },
      };
    });
    console.log({ obj });
    dispatch(addData(obj));
    // setVideos(data.items);
  };
  const [value, setValue] = useState("");
  const suggestionCache = useSelector((state) => state.suggestion_cache);

  const [showSuggestion, setShowSuggestion] = useState(false);

  const [suggestionData, setSuggestionData] = useState([]);

  const suggestion = async () => {
    if (suggestionCache[value]) {
      // console.log("if");
      setSuggestionData(suggestionCache[value]);
    } else {
      // console.log("else");
      const res = await fetch(suggestionUrl + value);
      const data = await res.json();
      setSuggestionData(data[1]);
      let obj = { value };

      value !== "" && dispatch(addToCache({ value, data: data[1] }));
    }
  };
  useEffect(() => {
    let timerId = setTimeout(suggestion, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);
  return (
    <div className="fixed top-0 z-30 flex  justify-around items-center p-4 bg-white">
      {showSuggestion && suggestionData.length !== 0 && (
        <div className=" fixed top-20 w-[40vw] left-[30vw] bg-white p-4 rounded-lg shadow-lg">
          {suggestionData.map((item) => (
            <div key={item} className="flex">
              <BiSearch className="text-3xl p-1 cursor-pointer" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
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
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
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
