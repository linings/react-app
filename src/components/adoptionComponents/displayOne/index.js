import { Link } from "react-router-dom";

const DisplayOne = () => {
    return (
        <div>
            <div className={styles.name}></div>
            <div className={styles.url}></div>
            <div className={styles.breed}></div>
            <div className={styles.age}></div>
            <div className={styles.sex}></div>
            <div className={styles.story}></div>
            <Link to={'/donate'}>Donate for my care</Link>
            <Link to={'/adopt'}>Adopt me</Link>
        </div>
    )
}

export default DisplayOne;