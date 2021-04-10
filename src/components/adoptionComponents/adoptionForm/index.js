import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory, useLocation } from 'react-router';
import getCookie from '../../../utils/cookie';
import post from '../../../utils/postData';
import AlertComponent from '../../alert';

const AdoptionForm = ({ id }) => {
    const [alert, setAlert] = useState('');

    const history = useHistory();
    const location = useLocation();

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, permission, currently, description } = e.target;

        if (name.value === '' || permission.value === '' || currently.value === '' || description.value === '') {
            return setAlert(`All Fields must be filled!`);
        }
        post('adoptionRequests', {
            name: name.value,
            permission: permission.value,
            currently: currently.value,
            description: description.value,
            email: localStorage.getItem('username'),
            requesterId: getCookie('x-auth-token'),
            petId: id,
            typePet: location.pathname.split('/')[2]
        });
        history.push('/adopt/adoption-info');
    }

    return (
        <>
            <Form onSubmit={onSubmit} >
                {alert ? <AlertComponent text={alert} /> : null}
                <Form.Group controlId="exampleForm.ControlInput1" >
                    <Form.Label>Names</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="First Name and Family Name"
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1" >
                    <Form.Label>Do you have permission that you can have a pet where you live?</Form.Label>
                    <Form.Control
                        as="select"
                        type="text"
                        name='permission'
                    >
                        <option></option>
                        <option>yes</option>
                        <option>no</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Do you currently have pet?</Form.Label>
                    <Form.Control as="select" name='currently'>
                        <option></option>
                        <option>yes</option>
                        <option>no</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Brief Description of your motiovation to adopt:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={10}
                        placeholder='Description'
                        name='description' />
                </Form.Group>
                <Button type='submit' size="lg" variant="outline-info" block >
                    Submit
           </Button>
            </Form>
        </>
    )
}
export default AdoptionForm;