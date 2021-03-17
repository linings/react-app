import React, { useContext, useEffect } from 'react';
import UserContext from '../../context';
import getCookie from '../../utils/cookie';
import styles from './index.module.css'

const Profile = () => {
    const context = useContext(UserContext);

    const cookie = getCookie();

    console.log(cookie);

    const logout = () => {
        document.cookie =
            'x-auth-token= ; expires  = Thu, 01 Jan 1970 00:00:00 GMT';
    }

    return (
        <div>
            <div className={styles['user-profile']}>
                <div>{context.user}</div>
                {cookie !== null ? <button className={styles['user-icon']} onClick={logout}>Logout</button> : null}
            </div>
        </div>
    )

}

export default Profile;