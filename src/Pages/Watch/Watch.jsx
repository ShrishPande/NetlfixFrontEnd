import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import "./Watch.scss";
import video from './video.mp4'

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src={video}
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
};

export default Watch;
