import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import editUserInfo from '../../../utils/editUserInfo';
import { useEffect, useState } from 'react';
import getCookie from '../../../utils/cookie';
import unite from './unite';
import post from '../../../utils/postData';
import makeRelationToUser from '../../../utils/makeRelationToUser';
import getData from '../../../utils/getData';

const Messages = () => {
    const [messages, setMessages] = useState({});
    const [text, setText] = useState([]);
    const [messageId, setMessageId] = useState('');

    const getMessages = async () => {
        let promise = await getData('message');

        let sortedMessages = promise.sort((a, b) => a.time - b.time);
        setMessages(sortedMessages);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let currentUserNames = localStorage.getItem('names');

        post('message', {
            'userNAme': currentUserNames,
            'message': text,
            'userId': getCookie('x-auth-token'),
            time: new Date()
        }).then(promise => {

            makeRelationToUser(getCookie('x-auth-token'), 'message', promise.objectId);

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
            {Object.keys(messages).length !== 0 ? <span>
                <h5 className={styles.name}>Messages</h5>
                <span className={styles.messages}>

                    {messages.map((message, i) => {

                        return (
                            <div key={i}>
                                <div className={styles['message-time']}>{message.time}</div>
                                <div className={styles['single-message']}>
                                    {message.userName}: {message.message}
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
export default Messages;