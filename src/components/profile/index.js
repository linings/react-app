import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../../context';
import getCookie from '../../utils/cookie';
import styles from './index.module.css'

const Profile = () => {
    const context = useContext(UserContext);
    const history = useHistory();

    const cookie = getCookie('x-auth-token');

    const logout = () => {
        document.cookie =
            'x-auth-token= ; expires  = Thu, 01 Jan 1970 00:00:00 GMT';
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            context.user = "";
            history.push('/');
    }

    return (
        <div>
            <div className={styles['user-profile']}>
                <span className={styles['username']}>{localStorage.getItem('username')}</span>
                {cookie !== null ? <button className={styles['user-icon']} onClick={logout}>Logout</button> : null}
            </div>
        </div>
    )

}

export default Profile;