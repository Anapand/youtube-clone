import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCards from "./VideoCards";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    console.log(data);
    const json = await data.json();

    setVideos(json.items);
  };

  return (
    <div>
      <VideoCards info={videos} />
    </div>
  );
};

export default VideoContainer;
