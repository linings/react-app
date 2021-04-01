import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import styles from './index.module.css';

const Main = () => {

    const insides = [
        {
            name: 'Pavlina Ivaylova',
            message: 'Hello its me!'
        },
        {
            name: 'Iliana Ivaylova',
            message: 'Hello its not it you me!'
        },
        {
            name: 'Pavlina Daskalova Ivilova',
            message: 'Not hello!'
        }, {
            name: 'yordan Daskalova Ivilova',
            message: 'Not hello!'
        }, {
            name: 'yordan Daskalova Ivilova',
            message: 'Not hello!'
        }, {
            name: 'yordan Daskalova Ivilova',
            message: 'Not hello!'
        }, {
            name: 'yordan Daskalova Ivilova',
            message: 'Not hello!'
        }, {
            name: 'yordan Daskalova Ivilova',
            message: 'Not hello!'
        }
    ];

    return (
        <div className={styles.wrapper}  >
            <Tab.Container id="left-tabs-example" transition={false} defaultActiveKey="first">


                {insides.map((inside, i) => {

                    return <div key={i}>
                        <Nav variant="pills" fill className={styles['tabs']} as="ul">
                            <Nav.Item as="li">
                                <Nav.Link eventKey={i + 1}>{inside.name}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className={styles['message-wrapper']}>
                            <Tab.Pane eventKey={`${i + 1}`}>
                                <div>
                                    <h5 className={styles.name}>{inside.name}</h5>
                                    <div className={styles.messages}>{inside.message}</div>
                                    <div >
                                        <input className={styles['chat-input']} />
                                        <Button className={styles['message-btn']} variant="primary">Send</Button>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>

                })}



            </Tab.Container>

        </div >
    )
}
export default Main;