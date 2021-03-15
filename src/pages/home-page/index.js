import React from "react";
import styles from "./index.module.css";
import getHomePageImages from '../../utils/getHomePageImages'

const HomePage = () => {
  let images = getHomePageImages();
  console.log(images);
  return (
    <div className={styles["wrapper"]}>
      <div className={`${styles["box"]}`}></div>
    </div>
  );
};
export default HomePage;
