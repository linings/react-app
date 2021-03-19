import React from 'react';
import { useLocation } from 'react-router';
import Adoption from '../../adoptionComponents/adoption';
import Grid from '../../displayImages';
import LinkComponent from "../../link";
import Choose from '../chooseApet/choose';
import styles from './index.module.css';

const Main = () => {
    const location = useLocation();

    let mainInfo = [
        {
            title: 'Cats',
            href: '/donate/cats'
        },
        {
            title: 'Dogs',
            href: '/donate/dogs'
        },
        {
            title: 'Adoption Procces',
            href: '/donate/adoption-info'
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
            {location.pathname === '/donate/dogs' ? <Grid path={'data/dogs'} />
                : location.pathname === '/donate/cats' ? <Grid path={'data/cats'} />
                : location.pathname === '/donate/adoption-info' ? <Adoption />
                    : <Choose />}

        </div>
    )
}

export default Main;