import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router';
import styles from './index.module.css';
import Display from '../../creditCard/diplay';
import deleteItem from '../../../utils/deleteData';
import { useHistory } from "react-router";
import useFetch from '../../../hooks/useFetch';


const AdoptionRequestsList = () => {
    const [showCard, setShowCard] = useState({ id: '', show: false });
    const result = useFetch('adoptionRequests');

    const location = useLocation();
    const history = useHistory();

    const typeAnimal = location.pathname.split('/')[2];
    const requests = result.filter(a => a.typePet === typeAnimal);

    const handleCloseCard = () => setShowCard(false);
    const handleShowCard = (e) => {
        setShowCard({ id: e.target.parentNode.parentNode.id, show: true });
    }

    const deleteCard = (e) => {
        let id = e.target.parentNode.parentNode.id;
        deleteItem(id, 'adoptionRequests').then(() => {
            history.push('/upload');
        });
    }

    return (
        <>
            <h2>Adoption Requests</h2>
            {requests.length !== 0 ?
                <Table size="sm" className={styles.table}>
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
                            return <tr key={request.objectId} id={request.objectId}>
                                <td>{i + 1}</td>
                                <td className={styles['pet-name']}>{request.name}</td>
                                <td className={styles['pet-current']}>{request.currently}</td>
                                <td className={styles['pet-permit']}>{request.permission}</td>
                                <td className={styles['pet-id']}>{request.petId}</td>
                                <td className={styles.description}>{request.description}</td>
                                <td>{request.email}</td>
                                <td>{<Button size="lg" variant="outline-info" size="sm" onClick={(e) => handleShowCard(e)}>
                                    View
                                </Button>}</td>
                                <td>{<Button size="lg" variant="outline-danger" size="sm" onClick={(e) => deleteCard(e)}>
                                    Delete
                                </Button>}</td>
                                {showCard ? <Display props={{
                                    id: showCard.id,
                                    show: showCard.show,
                                    handleClose: handleCloseCard,
                                    subject: 'requestDetails'
                                }} /> : null}
                            </tr>
                        })}
                    </tbody>
                </Table>
                : <h2 className={styles['no-requests']}>NO REQUESTS :(</h2>
            }
        </>
    )
}
export default AdoptionRequestsList;