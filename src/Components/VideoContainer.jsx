import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../utils/videosSlice";

import VideoList from "./VideoList";

function VideoContainer() {
  //   const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videoData.videos);
  console.log({ videos });
  

  return (
    <div className="flex flex-wrap mt-10">
      {Object.keys(videos).length > 0 &&
        Object.keys(videos).map((item) => (
          <VideoList key={videos[item].id} info={videos[item]} />
        ))}
    </div>
  );
}

export default VideoContainer;
