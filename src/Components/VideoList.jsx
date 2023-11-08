import React from "react";
import { useNavigate } from "react-router-dom";

const VideoList = ({ info }) => {
  //   console.log({ info });
  //   console.log({ snippet: info.snippet });
  const navigate = useNavigate();
  const { snippet, statistics, id } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div
      className="w-[24%] m-[.5%] rounded-lg shadow-md p-2 cursor-pointer"
      onClick={() => navigate("/watch?v=" + id, { state: { id } })}
    >
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <h1 className="font-bold">{title}</h1>
      <p className="font-bold">{channelTitle}</p>
      <p className="font-bold">{statistics.viewCount} views</p>
    </div>
  );
};

export default VideoList;
