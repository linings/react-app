import React, { useEffect, useState } from "react";

import styles from "./index.module.css";
import RESTAPI from '../../REST API'
import { Link } from "react-router-dom";

const LinkMenu = () => {
    let [images, setImages] = useState([]);

    async function getImages() {
        let images = await fetch(RESTAPI.name + `data/images`);
        let result = await images.json();

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