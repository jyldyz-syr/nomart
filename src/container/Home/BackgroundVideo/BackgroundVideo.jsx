import React, { useState } from "react";
import classes from "./BackgroundVideoStyle.module.css";
import Header from "../Header";
import video from "../../../video/video3.mp4";

const BackgroundVideo = () => {
  const videoSource = { video };
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={video} type="video/mp4" />
      </video>

      <div className={classes.Content}>
        <Header />
      </div>
    </div>
  );
};

export default BackgroundVideo;
