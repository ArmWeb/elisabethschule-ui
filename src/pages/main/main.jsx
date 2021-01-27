import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useHistory } from "react-router-dom";
import BackForwardNavigation from "../../components/backForwardNavigation";
import Logo from "../../assets/images/logo-elizabethschulle.png";
import MainPic from "../../assets/images/director.jpg";
import PlayIcon from "../../assets/images/icon_play.svg";
// import Logo from "../../assets/images/briefkopf3.jpg";
import Closeicon from "../../assets/images/close.png";
import styles from "./main.module.css";

const Main = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const history = useHistory();

  const closeVideo = () => {
    history.push("/media");
  };

  return (
    <>
      <div className={styles.container}>
        <img
          src={Logo}
          alt="Elisabethsculle Malburg Logo"
          className={styles.logo}
        />
        <div className={styles.aligner}>
          {!playVideo ? (
            <div className={styles.imgWrapper}>
              <img src={MainPic} alt="director" className={styles.mainImg} />
              <img
                src={PlayIcon}
                alt="play"
                className={styles.play}
                onClick={() => setPlayVideo(true)}
              />
            </div>
          ) : (
            <>
              <img
                src={Closeicon}
                alt="close icon"
                className={styles.close}
                onClick={closeVideo}
              />
              {/* <iframe
                className={styles.video}
                title="Elisabethsculle Malburg Intro"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Aijz85tAa2w?autoplay=1&mute=1"
                frameBorder="0"
                allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                modestbranding="1"
                rel="0"
                showinfo="0"
                onReady={(e) => e.target.playVideo()}
              /> */}
            </>
          )}
          <ReactPlayer
            className={styles.video}
            title="Elisabethsculle Malburg Intro"
            width="100%"
            height="100%"
            url="https://www.youtube.com/embed/Aijz85tAa2w"
            fileConfig={{
              attributes: {
                // muted: "true",
                autoPlay: "true",
                playing: "true",
              },
            }}
            muted
            controls
            playinline
            playsinline
            playing
            autoplay
            light={MainPic}
          />
        </div>
        <div className={styles.forwardIcon}>
          <BackForwardNavigation forwardPath="/media" />
        </div>
      </div>
    </>
  );
};

export default Main;
