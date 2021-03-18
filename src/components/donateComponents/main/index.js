import React from 'react';
import { useLocation } from 'react-router';
import LinkComponent from "../../link";
import Cats from '../chooseApet/cats';
import Choose from '../chooseApet/choose';
import Dogs from '../chooseApet/dogs';
import styles from './index.module.css'

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
            {/* <div className={styles['vertical-line']}></div> */}
            {location.pathname === '/donate/dogs' ? <Dogs />
                : location.pathname === '/donate/cats' ? <Cats />
                    // : location.pathname === '/donate/adoption-info' ? <Adoption />
                    : <Choose />}

        </div>
    )
}

export default Main;