import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import getCookie from '../../../utils/cookie';
import post from '../../../utils/postData';
import makeRelationToUser from '../../../utils/makeRelationToUser';
import Users from '../users';
import getAllUsersData from "../../../utils/getAllUsersData";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [companionId, setCompanionId] = useState('');
    const [clicked, setClicked] = useState({ clicked: false, user: null });
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        getAllUsersData()
            .then(result => {
                let currentUser = getCookie('x-auth-token');

                const users = result.filter(user => user.objectId !== currentUser);
                setUsers(users);
            });
    };

    const getCompanionIdAndMessages = () => {
        if (clicked.clicked) {
            setCompanionId(clicked.user.objectId);

            const sortedMEssages = clicked.user.message.sort((a, b) => a.time - b.time);
            setMessages(sortedMEssages);
        }
    }

    const handleSubmit = async (e) => {
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
            console.log(companionId);
            makeRelationToUser(companionId, 'message', promise.objectId);

            setText("");
        }).catch(err => {
            console.log(err);
        });

    }
    useEffect(() => {
        getUsers();
        getCompanionIdAndMessages();
    }, [users,messages,companionId]);

    return (
        <div className={styles.wrapper}>
            <Users props={{ users, clicked, setClicked }} />
            { clicked.clicked ? <span>
                <h5 className={styles.name}>{clicked.user.name}</h5>
                {console.log(clicked.user)}
                <span className={styles.messages}>
                    <div className={styles.date}>{Object.keys(messages).length !== 0
                        ? new Date(messages[messages.length - 1].time).toDateString()
                        : null}</div>

                    {Object.keys(messages).length !== 0 ? messages.map((m, i) => {
                        return (
                            <div key={i}>
                                <div className={m.userId === getCookie('x-auth-token') ? styles['message-time-right'] : styles['message-time-left']}>{new Date(m.time).toLocaleTimeString()}</div>
                                <div className={styles['single-message']}>
                                    <span className={m.userId === getCookie('x-auth-token') ? styles['message-name-right'] : styles['message-name-left']}>
                                        {console.log(m)}
                                        {m.message}  </span>
                                </div>
                            </div>
                        )
                    }) : <div className={styles['no-messages']}>You don`t have any massages yet! :(</div>}

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
            </span> : null}
        </div>
    )
}
export default Messages;