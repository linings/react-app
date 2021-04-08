import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import editUserInfo from '../../../utils/editUserInfo';
import { useEffect, useState } from 'react';
import getCookie from '../../../utils/cookie';
import post from '../../../utils/postData';
import makeRelationToUser from '../../../utils/makeRelationToUser';
import getData from '../../../utils/getData';

const Messages = () => {
    const [messages, setMessages] = useState({});
    const [text, setText] = useState([]);
    const [messageId, setMessageId] = useState('');
    const [companionId, setCompanionId] = useState('');

    const getMessages = async () => {
        let promise = await getData('message');
        let sortedMessages = promise.sort((a, b) => a.time - b.time);

        setMessages(sortedMessages);

        if (Object.keys(messages).length !== 0) {
            const companion = messages.find(m => m.userName !== localStorage.getItem('names'));

            if (companion) {
                setCompanionId(companion.userId);
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(text === ''){
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

            if (companionId) {
                makeRelationToUser(companionId, 'message', promise.objectId);
            }

            setMessageId(promise.objectId);
            setText("");
        }).catch(err => {
            console.log(err);
        });

    }
    useEffect(() => {
        getMessages();
    }, [messageId])

    return (
        <div className={styles.wrapper}>
            <span>
                <h5 className={styles.name}>Admin</h5>
                <span className={styles.messages}>
                    <div className={styles.date}>{Object.keys(messages).length !== 0
                        ? new Date(messages[messages.length - 1].time).toDateString()
                        : null}</div>

                    {Object.keys(messages).length !== 0 ? messages.map((message, i) => {
                        return (
                            <div key={i}>
                                <div className={message.userId === getCookie('x-auth-token') ? styles['message-time-right'] : styles['message-time-left']}>{new Date(message.time).toLocaleTimeString()}</div>
                                <div className={styles['single-message']}>
                                    <span className={message.userId === getCookie('x-auth-token') ? styles['message-name-right'] : styles['message-name-left']}>
                                        {message.message}  </span>
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
            </span>
        </div>
    )
}
export default Messages;