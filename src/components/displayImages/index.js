import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import RESTAPI from '../../REST API';
import PopUpComponent from '../popUp';
import styles from './index.module.css';

const Grid = ({ path }) => {
    let [subjects, setSubjects] = useState([]);
    // let [isOpen, setIsOpen] = useState(false);

    const getCats = async () => {
        let data = await fetch(RESTAPI.name + path);
        let result = await data.json();

        setSubjects(result);
    }

    // const togglePopUp = (id) => {
    //     let currentItem = subjects.find(item => item.objectId === id);
    //     console.log(currentItem);
    //     console.log(isOpen);
    //     setIsOpen(true);
    // }

    useEffect(() => {
        getCats();
    }, [path]);
    return (
        <div className={styles.wrapper}>
            {subjects.map(subject => {
                return <Link
                    to={path.split('/')[1]}
                    key={subject.objectId} className={styles.petMenu}>
                    {/* // onClick={(e) => togglePopUp(subject.objectId)}> */}
                    <img className={styles.petImage} src={subject.url} />
                    <div className={styles['subject-details']}>
                        <div className={styles.name}>{subject.name} </div>
                        <div className={styles.sex}>{subject.sex}, </div>
                        <div className={styles.age}>{subject.age} years</div>
                    </div>
                </Link>
            }
            )}

            {/* {isOpen && 
             <div >
            <div>POPUP!</div>
            <button onClick={() => isOpen == false}></button> */}
        {/* </div>} */}
        </div>
    )
}
export default Grid;