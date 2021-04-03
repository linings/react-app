import { useEffect, useState } from "react";
import getOne from "../../../utils/getOne";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import edit from '../../../utils/editUserInfo';
import { useHistory, useLocation } from "react-router";
import getUserData from "../../../utils/getUserData";
import getCookie from "../../../utils/cookie";

const Details = (props) => {
    let [request, setRequest] = useState({});
    let [requestedAnimal, setRequestedAnimal] = useState({});
    let [requesterMessages, setRequesterMessages] = useState({});

    let history = useHistory();
    const location = useLocation();

    const displayCurrentRequest = async () => {
        let result = await getOne('adoptionRequests', props.props.id);

        setRequest(result);
        displayCurrentRequestedAnimal(result.typePet, result.petId);
    }

    const displayCurrentRequestedAnimal = async (typePet, id) => {
        let result = await getOne(typePet, id);

        setRequestedAnimal(result);
    }

    const getRequesterMessages = async (id) => {
        let result = await getUserData(id);
        return result.messages;
    }

    useEffect(() => {
        displayCurrentRequest();
    }, [location])

    if (Object.keys(request).length === 0 && Object.keys(requestedAnimal).length === 0) {
        return <Spinner className={styles.spinner} animation="border" />
    }

    const sendAnswer = async (e) => {
        e.preventDefault();

        let initialMessage = await getRequesterMessages(request.requesterId);

        console.log(initialMessage);

        let text = e.target.answer.value;

        let currentUserNames = localStorage.getItem('names');
        let newMessage = {};
        newMessage[new Date()] = text;

        if (!initialMessage.hasOwnProperty(currentUserNames)) {
            initialMessage[currentUserNames] = [];
        }
        initialMessage[currentUserNames].push(newMessage);

        edit( initialMessage, request.requesterId);  // to oposite messages
        edit(initialMessage , getCookie('x-auth-token'));  // to your messages
        history.push(`/upload/${location.pathname.split('/')[2]}`);
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
                <form onSubmit={(e) => sendAnswer(e)}>
                    <input className={styles.answer} name="answer" placeholder="Answer here..." />
                    <Button type="submit" className={styles.send} variant="outline-dark">Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Details;