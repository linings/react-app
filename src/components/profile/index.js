import React, { useContext, useEffect, useState } from 'react';

import Popover from 'react-bootstrap/Popover'
import Overlay from 'react-bootstrap/Overlay'
import { useHistory } from 'react-router';
import UserContext from '../../context';
import getCookie from '../../utils/cookie';
import styles from './index.module.css'

const Profile = ({ message }) => {
    let [isMessageRead, setMessageRead] = useState(false);

    const context = useContext(UserContext);
    const history = useHistory();

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);

    const handleClick = (event) => {
        setMessageRead(true);
        setShow(!show);
        setTarget(event.target);
    };


    const cookie = getCookie('x-auth-token');

    const logout = () => {
        document.cookie =
            'x-auth-token= ; expires  = Thu, 01 Jan 1970 00:00:00 GMT';
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('isAdmin');
        context.user = "";
        history.push('/');
    }

    return (
        <div>
            <div className={styles['user-profile']}>
                <button onClick={handleClick} className={styles['username']}>{localStorage.getItem('username')}</button>
                {!isMessageRead ? <div className={styles.message}></div> : null}
                <Overlay
                    animation={false}
                    show={show}
                    target={target}
                    placement="bottom"
                    containerPadding={20}
                >
                    <Popover id="popover-contained">
                        <Popover.Title as="h4">You have answer by administrators to yoyr request!</Popover.Title>
                        <Popover.Content>
                            <strong>Admin:</strong> - <i>{message}</i>
                        </Popover.Content>
                    </Popover>
                </Overlay>
                {cookie ? <button className={styles['user-icon']} onClick={logout}>Logout</button> : null}
            </div>
        </div>
    )

}

export default Profile;