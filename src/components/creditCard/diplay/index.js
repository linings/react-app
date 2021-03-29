import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PaymentForm from '../card';
import AdoptionForm from '../../adoptionComponents/adoptionForm';
import Details from '../../admin/details';


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
                {props.subject === 'card' ? <PaymentForm />
                    : props.subject === 'form' ? <AdoptionForm id={props.id} />
                        : props.subject === 'requestDetails' ? <Details props={props} />
                            : null}
            </Modal.Body>
            <Modal.Footer>
                {props.subject === 'card' ?
                    <Button href={'/'} variant="outline-info" >
                        Donate
                    </Button>
                    : null}
                <Button variant="outline-secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    )
}
export default Display;