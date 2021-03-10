import React from "react";

import { Link } from "react-router-dom";
import styles from "./index.module.css";

const LinkComponent = ({ title, href, image }) => {
    
  return (
    <div className={styles["list-item"]}>
      <Link className={styles.link} to={href}>
        <img className={styles.icon} alt="icon" src={image} />
        {title}
      </Link>
    </div>
  );
};

export default LinkComponent;
