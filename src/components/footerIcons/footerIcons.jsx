import React from "react";
import { NavLink } from "react-router-dom";
import FooterOne from "../../assets/images/Elisabeth_Siegel.jpg";
import FooterTwo from "../../assets/images/elizabetschule_small.gif";
import styles from "./FooterIcons.module.css";

const FooterIcons = () => (
  <>
    {/* TODO uncomment when link is ready */}
    {/* <NavLink to="#">
      <img
        src={FooterOne}
        alt="Elisabeth_Siegel"
        className={`${styles.icon}`}
      />
    </NavLink> */}
    <a href="https://elisabethschule.de/">
      <img
        src={FooterTwo}
        alt="Schulrundgang"
        className={styles.icon}
        title="Schulrundgang"
      />
    </a>
  </>
);

export default FooterIcons;
