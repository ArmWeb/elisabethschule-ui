import React from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../../assets/images/arrow_forwardBack.png";
import styles from "./BackForwardNavigation.module.css";

const BackForwardNavigation = ({ backPath, forwardPath }) => {
  return (
    <>
      {backPath && (
        <NavLink to={backPath}>
          <img
            src={Arrow}
            alt="back"
            className={`${styles.icon} ${styles.backIcon}`}
          />
        </NavLink>
      )}
      {forwardPath && (
        <NavLink to={forwardPath}>
          <img src={Arrow} alt="forward" className={styles.icon} />
        </NavLink>
      )}
    </>
  );
};

export default BackForwardNavigation;
