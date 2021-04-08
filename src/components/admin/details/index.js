import { useEffect, useState } from "react";
import getOne from "../../../utils/getOne";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import getCookie from "../../../utils/cookie";
import post from "../../../utils/postData";
import makeRelationToUser from "../../../utils/makeRelationToUser";

const Details = (props) => {
    const [request, setRequest] = useState({});
    const [requestedAnimal, setRequestedAnimal] = useState({});
    const [text, setText] = useState("");

    const displayCurrentRequest = async () => {
        let result = await getOne('adoptionRequests', props.props.id);

        setRequest(result);
        displayCurrentRequestedAnimal(result.typePet, result.petId);
    }

    const displayCurrentRequestedAnimal = async (typePet, id) => {
        let result = await getOne(typePet, id);

        setRequestedAnimal(result);
    }

    useEffect(() => {
        displayCurrentRequest();
    }, [])

    const sendAnswer = async (e) => {
        e.preventDefault();

        if (text === '') {
            return;
        }

        let currentUserNames = localStorage.getItem('names');

        post('message', {
            'userNAme': currentUserNames,
            'message': text,
            'userId': getCookie('x-auth-token'),
            time: new Date()
        }).then(promise => {

            makeRelationToUser(getCookie('x-auth-token'), 'message', promise.objectId);
            makeRelationToUser(request.requesterId, 'message', promise.objectId);

            setText("");
        }).catch(err => {
            console.log(err);
        });
    }

    if (Object.keys(request).length === 0 && Object.keys(requestedAnimal).length === 0) {
        return <Spinner className={styles.spinner} animation="border" />
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
                <img alt="request" className={styles.request} src={requestedAnimal.url}></img>
            </div>
            <div>
                <h5> Answer to request:</h5>
                <form onSubmit={(e) => sendAnswer(e)}>
                    <input
                        className={styles.answer}
                        name="text"
                        placeholder="Answer here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                    <Button type="submit" className={styles.send} variant="outline-dark">Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Details;