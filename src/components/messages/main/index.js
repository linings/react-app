import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import getCookie from '../../../utils/cookie';
import post from '../../../utils/postData';
import makeRelationToUser from '../../../utils/makeRelationToUser';
import Users from '../users';
import getAllUsersData from "../../../utils/getAllUsersData";
import getMessagesData from '../../../utils/getMessages';
import getData from '../../../utils/getData';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [companion, setCompanion] = useState({});
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

    const getCompanion = () => {
        if (clicked.clicked) {
            setCompanion(clicked.user);
            getMessages();
        }
    }

    const getMessages = () => {
        getMessagesData('message', 0, 20).then(result => {
            const filteredMessages = result.filter(m => {
                return (m.userFromId === getCookie('x-auth-token') && m.userToId === companion.objectId) || (m.userToId === getCookie('x-auth-token') && m.userFromId === companion.objectId)
            });
            const sortedMessages = filteredMessages.sort((a, b) => a.time - b.time);
            setMessages(sortedMessages);
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (text === '') {
            return;
        }

        let currentUserNames = localStorage.getItem('names');

        post('message', {
            'userName': currentUserNames,
            'message': text,
            'userFromId': getCookie('x-auth-token'),
            'userToId': companion.objectId,
            time: new Date()
        }).then(promise => {
            makeRelationToUser(getCookie('x-auth-token'), 'message', promise.objectId);
            makeRelationToUser(companion.objectId, 'message', promise.objectId);

            setText("");

            getUsers();
            getCompanion();
        }).catch(err => {
            console.log(err);
        });

    }

    // const updateMessages = () => {
    //     getAllUsersData().then(result => {
    //         const currentMessages = result.filter(m => m.objectId === (companion.objectId || getCookie('x-auth-token')))
    //         console.log(currentMessages);
    //     });
    // }

    useEffect(() => {
        getUsers();
        getCompanion();
    }, [clicked, companion]);

    return (
        <div className={styles.wrapper}>
            <Users props={{ users, clicked, setClicked }} />
            {clicked.clicked ? <span>
                <h5 className={styles.name}>{clicked.user.name}</h5>
                <span className={styles.messages}>
                    <div className={styles.date}>{Object.keys(messages).length !== 0
                        ? new Date(messages[messages.length - 1].time).toDateString()
                        : null}</div>
                    {Object.keys(messages).length !== 0 ? messages.map((m, i) => {
                        return (
                            <div key={i}>
                                <div className={m.userFromId === getCookie('x-auth-token') ? styles['message-time-right'] : styles['message-time-left']}>{new Date(m.time).toLocaleTimeString()}</div>
                                <div className={styles['single-message']}>
                                    <span className={m.userFromId === getCookie('x-auth-token') ? styles['message-name-right'] : styles['message-name-left']}>
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