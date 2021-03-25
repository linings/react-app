import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './index.module.css';
import paws from '../../../public/paws.png';
import weddingCake from '../../../public/wedding-cake.png';
import sex from '../../../public/sex.png';
import Display from '../../creditCard/diplay';

const DisplayOne = ({ props }) => {
    const [showCard, setShowCard] = useState(false);

    const handleCloseCard = () => {
        handleClose();
        setShowCard(false);
    };
    const handleShowCard = () => setShowCard(true);


    const { show, handleClose, subjects } = props;

    const currentSubject = subjects.find(s => s.objectId === show.id);

    return (
        <>
            <Modal
                animation={false}
                show={show.status}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className={styles['card']}>
                    <Card className={styles['pet-wrapper']} >
                        <Card.Header>
                            <Card.Title className={styles['pet-name']}>{currentSubject.name}</Card.Title>
                        </Card.Header>
                        <Card.Img src={currentSubject.url} />
                        <Card.Body>
                            <ListGroup horizontal className={styles.horizontal}>
                                <ListGroup.Item className={styles['icon']} >
                                    <div><img className={styles['icon-image']} src={paws} /></div>
                                    <span className={styles['icon-text']}>{currentSubject.breed}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className={styles['icon']} >
                                    <div><img className={styles['icon-image']} src={weddingCake} /></div>
                                    <span className={styles['icon-text']}>{currentSubject.age} Years</span>
                                </ListGroup.Item>
                                <ListGroup.Item className={styles['icon']} >
                                    <div><img className={styles['icon-image']} src={sex} /></div>
                                    <span className={styles['icon-text']}>{currentSubject.sex}</span>
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Text className={styles['paragraph']}>{currentSubject.story}</Card.Text>
                            <Button onClick={handleShowCard} variant="outline-info" className={styles['pop-up-btn']}>Donate to my care &gt;</Button>
                            {showCard && <Display props={{ show: showCard, handleClose: handleCloseCard }} />}
                            <Button href={'/adopt'} variant="outline-info">Adopt me &gt;</Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>

            );
        </>
    )
}

export default DisplayOne;