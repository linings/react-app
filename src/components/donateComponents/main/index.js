import React from 'react';
import { useLocation } from 'react-router';
import Adoption from '../../adoptionComponents/adoptionProccess';
import Grid from '../../displayImages';
import LinkComponent from "../../link";
import Choose from '../chooseApet/choose';
import styles from './index.module.css';

const Main = () => {
    const location = useLocation();

    let mainInfo = [
        {
            title: 'Cats',
            href: '/adopt/cats'
        },
        {
            title: 'Dogs',
            href: '/adopt/dogs'
        },
        {
            title: 'Adoption Procces',
            href: '/adopt/adoption-info'
        },
    ];


    return (
        <div>
            <div className={styles['link-wrapper']}>
                {mainInfo.map(info => {
                    return <LinkComponent
                        key={info.title}
                        title={info.title}
                        href={info.href}
                        style={'donate-link'}
                        type="aside" />
                })}
            </div>
            {location.pathname === '/adopt/dogs' ? <Grid path={'data/dogs'} />
                : location.pathname === '/adopt/cats' ? <Grid path={'data/cats'} />
                : location.pathname === '/adopt/adoption-info' ? <Adoption />
                    : <Choose />}

        </div>
    )
}

export default Main;