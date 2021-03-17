import React from "react";

import Difference from "../../components/difference";
import GetRandomStory from "../../components/getRandomStory";
import LinkMenu from '../../components/home-menu';
import Information from "../../components/information";
import getCookie from '../../utils/cookie'
import styles from './index.module.css'
import dog from '../../public/doggy.png'

const HomePage = () => {

    const token = getCookie('x-auth-token');

    return (
        <div>
            <LinkMenu />
            <Information />'
            <img className={styles['dog-image']} src={dog} />
            {token ? <GetRandomStory /> : null}
            {token ? <Difference /> : null}
        </div>
    );
};

export default HomePage;