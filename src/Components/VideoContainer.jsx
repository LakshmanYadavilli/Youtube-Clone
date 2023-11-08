import React, { useEffect, useState } from "react";
import { youtubeApi } from "../utils/constants";
import VideoList from "./VideoList";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const res = await fetch(youtubeApi);
    const data = await res.json();
    setVideos(data.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 && videos.map((item) => <VideoList info={item} />)}
    </div>
  );
}

export default VideoContainer;
