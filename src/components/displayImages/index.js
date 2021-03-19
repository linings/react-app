import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import RESTAPI from '../../REST API';
import styles from './index.module.css';

const Grid = ({path}) => {
    let [subjects, setSubjects] = useState([]);

    const getCats = async () => {
        let data = await fetch(RESTAPI.name + path);
        let result = await data.json();

        setSubjects(result);
    }

    useEffect(() => {
        getCats();
    }, [subjects]);
    return (
        <div className={styles.wrapper}>
            {subjects.map(subject => {
                return <Link to={subject.url} key={subject.objectId} className={styles.petMenu}>
                    <img className={styles.petImage} src={subject.url} />
                    <div className={styles.petText}>{subject.name} </div>
                </Link>
            }
            )}
        </div>
    )
}
export default Grid;