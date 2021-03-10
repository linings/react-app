import React from "react";

import styles from "./index.module.css";
import instagram from "../../public/instagram.png";
import facebook from "../../public/facebook.png";
import twitter from "../../public/twitter.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <span className={styles.follow}>
            Follow us on:
            <img
              alt="twitter"
              className={styles["social-network-image"]}
              src={twitter}
            />
            <img
              alt="facebook"
              className={styles["social-network-image"]}
              src={facebook}
            />
            <img
              alt="instagram"
              className={styles["social-network-image"]}
              src={instagram}
            />
            <p> © 2021 Animal Shelter </p>
          </span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
