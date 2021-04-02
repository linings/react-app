import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import styles from './index.module.css';
import getUserData from '../../../utils/getUserData';
import editUserInfo from '../../../utils/editUserInfo';
import { useEffect, useState } from 'react';
import getCookie from '../../../utils/cookie';

const Main = () => {
    let [sameUser, setSameUser] = useState(false);
    let [messages, setMessages] = useState([]);
    let [initialMessage, setInitialMessage] = useState({});
    let [text, setText] = useState([]);

    const getMessages = async () => {
        let promise = await getUserData(getCookie('x-auth-token'));
        let messages = promise.messages;

        let same = Object.entries(messages).some(u => u[0] === localStorage.getItem('username'));
        console.log(same, 'IS SAME?');

        setSameUser(same);
        setMessages(Object.entries(messages));
        setInitialMessage(messages);
    }
    // let d1 = new Date;  
    // console.log(Date.parse(d1) == Date.parse('Fri Apr 02 2021 22:00:45 GMT+0300 (Eastern European Summer Time)'));

    const handleSubmit = (e, nameOfPersonYouWriteWith) => {
        e.preventDefault();

        let currentUsername = localStorage.getItem('username');
        let newMessage = {};
        newMessage[new Date()] = text;
        console.log(sameUser);
        console.log(initialMessage);

        if (sameUser) {
            initialMessage[nameOfPersonYouWriteWith].push({'you':newMessage}); // Pushvash, no ot imeto na sushtiq user...
        } else {
            if (!initialMessage.hasOwnProperty(currentUsername)) {
                initialMessage[currentUsername] = [];
            }
            initialMessage[currentUsername].push(newMessage);
        }
        editUserInfo({ 'messages': initialMessage }, getCookie('x-auth-token'));
    }
    useEffect(() => {
        getMessages();
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
                        return <Tab.Pane key={i} eventKey={`${i + 1}`} as="span">
                            <span>
                                <h5 className={styles.name}>{message[0]}</h5>
                                <span className={styles.messages}>
                                    {message[1].map((m, index) => {

                                        return <div className={styles['single-message']}
                                            key={index}>
                                            {Object.entries(m)[0][0].split('G')[0]}: {Object.entries(m)[0][1]}
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