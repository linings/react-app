import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import getUserData from '../../../utils/getUserData';
import editUserInfo from '../../../utils/editUserInfo';
import { useEffect, useState } from 'react';
import getCookie from '../../../utils/cookie';

const Main = () => {
    let [messages, setMessages] = useState([]);
    let [initialMessage, setInitialMessage] = useState({});
    let [text, setText] = useState([]);
    let [messageWrapper, setMessageWrapper] = useState([]);

    const getMessages = async () => {
        let promise = await getUserData(getCookie('x-auth-token'));
        let messages = promise.messages;

        setMessages(Object.entries(messages));
        setInitialMessage(messages);
    }
    // let d1 = new Date;  
    // console.log(Date.parse(d1) == Date.parse('Fri Apr 02 2021 22:00:45 GMT+0300 (Eastern European Summer Time)'));

    const uniteMessages = () => {
        for (const message of messages) {
            for (const singleMessage of message[1]) {
                let chat = {};
                chat[message[0]] = singleMessage;
                messageWrapper.push(chat);
            }
        }
        console.log(messageWrapper);
        setMessageWrapper(messageWrapper);
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

        console.log(initialMessage);

        editUserInfo(initialMessage, getCookie('x-auth-token'));
    }
    useEffect(() => {
        getMessages();
        uniteMessages();
    }, [])
    return (
        <div className={styles.wrapper}  >

            <Tab.Container id="left-tabs-example" transition={false} defaultActiveKey="first">
                <span className={styles.wr}>
                    {Object.keys(messages).length !== 0 ? messages.map((message, i) => {
                        return <Nav variant="pills" key={i} fill className={styles['tabs']} as="ul">
                            <Nav.Item className={styles['nav-item']} as="li">
                                <Nav.Link className={styles['link-name']} eventKey={i + 1}>{message[0]}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    }) : <h2>You have no messages yet!</h2>}
                </span>

                <Tab.Content className={styles['message-wrapper']} as="span">
                    {messages.map((message, i) => {
                        {console.log(Object.values(messageWrapper))}
                        return <Tab.Pane key={i} eventKey={`${i + 1}`} as="span">
                            <span>
                                <h5 className={styles.name}>{message[0]}</h5>
                                <span className={styles.messages}>
                                    {message[1].map((m, index) => {

                                        return <div className={styles['single-message']}
                                            key={index}>
                                            {message[0]}:{Object.entries(m)[0][0].split('G')[0]}: {Object.entries(m)[0][1]}
                                        </div>
                                    })}
                                </span>
                                <span>
                                    <form onSubmit={(e) => handleSubmit(e, message[0])}>
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
                        </Tab.Pane>
                    })}
                </Tab.Content>



            </Tab.Container>

        </div >
    )
}
export default Main;