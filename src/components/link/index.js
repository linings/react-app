import React from "react";

import { Link } from "react-router-dom";
import styles from "./index.module.css";

const LinkComponent = ({ style, title, href, image }) => {

  return (
    <div className={styles[`list-item-${style}`]}>
      <Link className={styles[style]} to={href}>
        {image ? <img className={styles.icon} alt="icon" src={image} /> : null}
        {title}
      </Link>
    </div>
  );
};

export default LinkComponent;
