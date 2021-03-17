import React, { useContext, useState } from 'react';
import UserContext from '../../context';
import styles from './index.module.css'

const Profile = () => {
    let [profile,setProfile] = useState();
    const context = useContext(UserContext);

    return (
        <div>
            <div className={styles['user-profile']}>
                <div>{context.user}</div>
                <img className={styles['user-icon']} src={'https://upload.wikimedia.org/wikipedia/commons/1/1b/Octicons-triangle-down.svg'} />
        </div>
        </div>
    )

}

export default Profile;