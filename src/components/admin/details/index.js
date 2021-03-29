import { useEffect, useState } from "react";
import getOne from "../../../utils/getOne";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import edit from '../../../utils/editUserInfo';
import { useHistory } from "react-router";

const Details = (props) => {
    let [request, getRequest] = useState({});
    let [requestedAnimal, getRequestedAnimal] = useState({});

    let history = useHistory();

    const displayCurrentRequest = async () => {
        let result = await getOne('adoptionRequests', props.props.id);

        getRequest(result);
        displayCurrentRequestedAnimal(result.typePet, result.petId);
    }

    const displayCurrentRequestedAnimal = async (typePet, id) => {
        let result = await getOne(typePet, id);

        getRequestedAnimal(result);
    }

    useEffect(() => {
        displayCurrentRequest();
    }, [])

    if (Object.keys(request).length === 0 && Object.keys(requestedAnimal).length === 0) {
        return <Spinner className={styles.spinner} animation="border" />
    }

    const sendAnswer = async (e) => {
        let response = e.target.parentNode.children[1].value;
        edit(response, request.requesterId);
        history.push('/');
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <span className={styles.title}>Request Information</span>
                <h5>Names of requester:</h5>
                <span className={styles.information}>- {request.name}</span>
                <h5>Email:</h5>
                <span className={styles.information}>- {request.email}</span>
                <h5>Permission to have a pet:</h5>
                <span className={styles.information}>- {request.permission}</span>
                <h5>Is there another pet in the household?</h5>
                <span className={styles.information}>- {request.currently}</span>
                <h5>Motivation for getting pet:</h5>
                <span className={styles.information}> {request.description}</span>
            </div>
            <div className={styles['requested-animal']}>
                <h5 className={styles.last}>Requested animal:</h5>
                <div>name: <b>{requestedAnimal.name}</b></div>
                <div>age: <b>{requestedAnimal.age} years</b></div>
                <img className={styles.request} src={requestedAnimal.url}></img>
            </div>
            <div>
                <h5> Answer to request:</h5>
                <input className={styles.answer} placeholder="Answer here..." />
                <Button onClick={(e) => sendAnswer(e)} className={styles.send} variant="outline-dark">Send</Button>
            </div>
        </div>
    )
}

export default Details;