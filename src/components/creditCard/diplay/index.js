import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PaymentForm from '../card';


const Display = ({ props }) => {
    return (
        <Modal
            animation={false}
            show={props.show}
            onHide={props.handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <PaymentForm />
            </Modal.Body>
            <Modal.Footer>
            <Button href={'/'} variant="outline-primary" >
                    Donate
                </Button>
                <Button variant="outline-secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Display;