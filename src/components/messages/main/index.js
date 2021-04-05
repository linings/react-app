import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import getUserData from '../../../utils/getUserData';
import editUserInfo from '../../../utils/editUserInfo';
import { useEffect, useState } from 'react';
import getCookie from '../../../utils/cookie';
import unite from './unite';
// import getNames from './getNames';

const Main = () => {
    let [initialMessage, setInitialMessage] = useState({});
    let [text, setText] = useState([]);
    let [wrappedMessages, setWrappedMessages] = useState([]);
    // let [users, setUsers] = useState([]);

    const getMessages = async () => {
        let promise = await getUserData(getCookie('x-auth-token'));
        let messages = promise.messages;

        setInitialMessage(messages);

        setWrappedMessages(unite(Object.entries(messages)));

        // let result = await getNames(initialMessage);
        // setUsers(result);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let currentUserNames = localStorage.getItem('names');
        let newMessage = {};
        newMessage[new Date()] = text;

        if (!initialMessage.hasOwnProperty(currentUserNames)) {
            initialMessage[currentUserNames] = [];
        }
        initialMessage[currentUserNames].push(newMessage);

        editUserInfo(initialMessage, getCookie('x-auth-token'));
        // editUserInfo(initialMessage, getCookie('x-auth-token')); // Save comment on other user!
    }
    useEffect(() => {
        getMessages();
    }, [])
    return (
        <div className={styles.wrapper}>
            {wrappedMessages.length !== 0 ? <span>
                <h5 className={styles.name}>Petya Pavlova</h5>
                <span className={styles.messages}>
                    {wrappedMessages.map((message, i) => {
                        return (
                            <div key={i}>
                                <div className={styles['message-time']}>{Object.entries(Object.entries(message)[0][1])[0][0].split('G')[0]}</div>
                                <div className={styles['single-message']}>
                                    {Object.entries(message)[0][0]}: {Object.entries(Object.entries(message)[0][1])[0][1]}
                                </div>
                            </div>
                        )
                    })}
                </span>
                <span>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            type="text"
                            name="message"
                            className={styles['chat-input']}
                            placeholder="Message..."
                            value={text}
                            onChange={(e) => setText(e.target.value)} />
                        <Button type="Submit" className={styles['message-btn']} variant="primary">Send</Button>
                    </form>
                </span>
            </span>
                : <div className={styles['no-messages']}>You don`t have any massages yet! :(</div>}
        </div>
    )
}
export default Main;