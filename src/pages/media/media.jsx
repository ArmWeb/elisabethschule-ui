import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "./media.module.css";
import BackForwardNavigation from "../../components/backForwardNavigation";
import FooterIcons from "../../components/footerIcons";
import { ASSETS } from "../../constants/index.jsx";
import SingleMedia from "./singleMedia";

const Media = () => {
  const history = useHistory();
  const params = useParams();

  if (params.link) {
    return <SingleMedia link={params.link} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mediaWrapper}>
        {ASSETS.map((asset) => {
          return (
            <div className={styles.singleMedia} key={asset.id}>
              <div className={styles.imgWrapper}>
                <img
                  src={asset.img}
                  alt={asset.name}
                  className={styles.img}
                  onClick={() => history.push(`/media/${asset.path}`)}
                />
              </div>
              {/* <span className={styles.title}>{asset.name}</span> */}
            </div>
          );
        })}
      </div>
      <div className={styles.navIcons}>
        <BackForwardNavigation
          backPath="/"
          forwardPath={`/media/${ASSETS[0].path}`}
        />
      </div>
      <div className={styles.footerIcons}>
        <FooterIcons />
      </div>
    </div>
  );
};

export default Media;
