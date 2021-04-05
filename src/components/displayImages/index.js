import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import RESTAPI from '../../REST API';
import getData from '../../utils/getData';
import DisplayOne from '../adoptionComponents/displayOne';
import styles from './index.module.css';

const Grid = ({ path }) => {
    const [show, setShow] = useState({ status: false, id: null });
    const  [subjects, setSubjects] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow({ status: true, id });
    }

    const getCats = async () => {
        let result = await getData(path.split('/')[1])

        setSubjects(result);
    }

    useEffect(() => {
        getCats();
    }, [path]);

    return (
        <div className={styles.wrapper}   >
            {subjects.map(subject => {
                return <Link
                    to={path.split('/')[1]}
                    key={subject.objectId} className={styles.petMenu}
                    onClick={() => handleShow(subject.objectId)}>
                    <img className={styles.petImage} src={subject.url} />
                    <div className={styles['subject-details']}>
                        <div className={styles.name}>{subject.name} </div>
                        <div className={styles.sex}>{subject.sex}, </div>
                        <div className={styles.age}>{subject.age} years</div>
                    </div>
                </Link>
            }
            )}
            {show.status ? <DisplayOne props={{ show, handleClose, subjects }} /> : null}
        </div>
    )
}
export default Grid;