import { useState } from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DisplayOne from '../adoptionComponents/displayOne';
import styles from './index.module.css';

const Grid = ({ path }) => {
    const [show, setShow] = useState({ status: false, id: null });
    const subjects = useFetch(path.split('/')[1], path);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow({ status: true, id });
    }

    return (
        <div className={styles.wrapper}   >
            {subjects.map(subject => {
                return <Link
                    to={path.split('/')[1]}
                    key={subject.objectId} className={styles.petMenu}
                    onClick={() => handleShow(subject.objectId)}>
                    <img alt="pet" className={styles.petImage} src={subject.url} />
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