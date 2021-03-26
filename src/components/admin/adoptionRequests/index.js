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
        <Table  size="sm" className={styles.table}>
            <thead className={styles['table-head']}>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Has pet</th>
                    <th>Has permit</th>
                    <th>Pet ID</th>
                    <th>Description</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {requests.map((request, i) => {
                    return <tr key={request.objectId}>
                        <td>{i + 1}</td>
                        <td className={styles['pet-name']}>{request.name}</td>
                        <td className={styles['pet-current']}>{request.currently}</td>
                        <td className={styles['pet-permit']}>{request.permission}</td>
                        <td className={styles['pet-id']}>{request.petId}</td>
                        <td className={styles.description}>{request.description}</td>
                        <td>{request.email}</td>
                    </tr>
                })}
            </tbody>
        </Table>
    )
}
export default AdoptionRequestsList;