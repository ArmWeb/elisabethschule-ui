import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import BackForwardNavigation from "../../../components/backForwardNavigation";
import FooterIcons from "../../../components/footerIcons";
import CloseIcon from "../../../assets/images/close.png";
import BurgerIcon from "../../../assets/images/icon_burger.png";
import { ASSETS } from "../../../constants/index.jsx";
import styles from "./singleMedia.module.css";

const SingleMedia = ({ link }) => {
  const history = useHistory();
  const currentMedia = ASSETS.find((asset) => asset.path === link);
  const [menuVisibility, setMenuVisibility] = useState("hidden");

  useEffect(() => {
    if (!link || !currentMedia) {
      history.push("/media");
    }
  }, [currentMedia, history, link]);

  return (
    <>
      <div className={styles.container}>
        <img
          src={BurgerIcon}
          alt="burgerMenu"
          className={styles.burgerMenu}
          onClick={() => setMenuVisibility("visible")}
        />
        <div className={`${styles.items} ${styles[menuVisibility]}`}>
          <img
            src={CloseIcon}
            alt="close"
            className={styles.close}
            onClick={() => setMenuVisibility("hidden")}
          />
          {ASSETS.map((asset) => {
            return (
              <NavLink
                to={`/media/${asset.path}`}
                activeClassName={styles.active}
                key={asset.path}
                className={styles.item}
              >
                {asset.name}
              </NavLink>
            );
          })}
        </div>
        <div className={styles.mediaWrapper}>
          {/* <iframe
            className={styles.video}
            title={currentMedia.name}
            width="100%"
            height="100%"
            src={`${currentMedia.videoLink}?start=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            modestbranding="1"
            rel="0"
          /> */}
          <ReactPlayer
            className={styles.video}
            title={currentMedia.name}
            width="100%"
            height="100%"
            url={`${currentMedia.videoLink}?start=0`}
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
            light={currentMedia.img}
          />
          <BackForwardNavigation backPath="/media" />
        </div>
      </div>
      <div className={styles.footerIcons}>
        <FooterIcons />
      </div>
    </>
  );
};

export default SingleMedia;
