import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory, useLocation } from 'react-router';
import post from '../../../utils/postData';

const AdoptionForm = ({ id }) => {
    const [name, setName] = useState('');
    const [permission, setPermission] = useState('');
    const [currently, setCurrently] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();
    const location = useLocation();
    
    const onSubmit = () => {
        post('adoptionRequests', {
            name,
            permission,
            currently,
            currently,
            description,
            email: localStorage.getItem('username'),
            petId: id,
            typePet: location.pathname.split('/')[2]
        });
        history.push('/adopt/adoption-info');
    }

    return (
        <>
            <Form >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Names</Form.Label>
                    <Form.Control type="email" placeholder="First Name and Family Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Do you have permission that you can have a pet where you live?</Form.Label>
                    <Form.Control as="select" value={permission} onChange={(e) => setPermission(e.target.value)}>
                        <option></option>
                        <option>yes</option>
                        <option>no</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Do you currently have pet?</Form.Label>
                    <Form.Control as="select" value={currently} onChange={(e) => setCurrently(e.target.value)}>
                        <option></option>
                        <option>yes</option>
                        <option>no</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Brief Description of your motiovation to adopt:</Form.Label>
                    <Form.Control as="textarea" rows={10} value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
            </Form>
            <Button onClick={onSubmit} size="lg" variant="outline-info" block>
                Submit
           </Button>
        </>
    )
}
export default AdoptionForm;