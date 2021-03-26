import React, { useEffect, useState } from "react";

import styles from "./index.module.css";
import { Link } from "react-router-dom";
import getData from "../../../utils/getData";

const LinkMenu = () => {
    let [images, setImages] = useState([]);

    async function getImages() {
        let result = await getData('images');
        setImages(result);
    }

    useEffect(() => {
        getImages()
    }, []);

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