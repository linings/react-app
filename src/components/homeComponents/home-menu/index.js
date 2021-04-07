import React from "react";

import styles from "./index.module.css";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const LinkMenu = () => {
    const images = useFetch('images');

    return (
        <div className={styles["wrapper"]}>
            {images.map((image) => {
                return <Link to={image.href} key={image.objectId} className={styles.petMenu}>
                    <img className={styles.petImage} src={image.url} />
                    <div className={styles.petText}>{image.text} </div>
                </Link>
            }
            )}
        </div>
    )
}

export default LinkMenu;