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
    <div className="flex flex-wrap mt-10">
      {videos.length > 0 &&
        videos.map((item) => <VideoList key={item.id} info={item} />)}
    </div>
  );
}

export default VideoContainer;
