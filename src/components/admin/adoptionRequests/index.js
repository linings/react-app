import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router';
import getData from '../../../utils/getData';
import styles from './index.module.css';


const AdoptionRequestsList = () => {
    const [requests, setRequests] = useState([]);
    const location = useLocation();

    let typeAnimal = location.pathname.split('/')[2];

    const getRequests = async () => {
        let requests = await getData('adoptionRequests');
        let animals = requests.filter(a => a.typePet === typeAnimal);

        setRequests(animals);
    }

    useEffect(() => {
        getRequests();
    }, [])

    return (
        <Table striped bordered hover size="sm" className={styles.table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First and Last Name</th>
                    <th>Does fosterer has another pet</th>
                    <th>Does fosterer has permission for pet</th>
                    <th>Pet ID</th>
                    <th>Description</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {requests.map((request, i) => {
                    return <tr key={request.objectId}>
                        <td>{i + 1}</td>
                        <td>{request.name}</td>
                        <td>{request.currently}</td>
                        <td>{request.permission}</td>
                        <td>{request.petId}</td>
                        <td>{request.description}</td>
                        <td>{request.email}</td>
                    </tr>
                })}
            </tbody>
        </Table>
    )
}
export default AdoptionRequestsList;