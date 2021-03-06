import React, { useContext } from 'react';

import { createBrowserHistory } from 'history';
import UserContext from '../../context';
import styles from './index.module.css'
import { useHistory } from 'react-router';

const Profile = () => {
    const context = useContext(UserContext);
    let history = useHistory();

    return (
        <div className={styles['profile-wrapper']}>
            <div className={styles['user-profile']}>
                <button className={styles['username']}>{localStorage.getItem('names')}</button>
                {localStorage.getItem('username') ? <button className={styles['user-icon']} onClick={() => context.logOut(history)}>Logout</button> : null}
            </div>
        </div>
    )

}

export default Profile;