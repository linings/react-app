import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import styles from './index.module.css'

const Users = ({ props }) => {
    
    const setButtonToClicked = (e) => {
        const user = props.users.find(user => user.objectId === e.target.id);
        const newState = { clicked: true, user };
        props.setClicked(prevState => newState);
    }
    return (
        <div className={styles['people']}>
            {props.users ? props.users.map(user => {
                return <Button
                    onClick={setButtonToClicked}
                    key={user.objectId} id={user.objectId}
                    className={styles['single-user']}
                >
                    {user.name}
                </Button>
            })
                : <Spinner animation="border" />
            }
        </div>
    )
}
export default Users;