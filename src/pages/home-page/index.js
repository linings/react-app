import React from "react";

import Difference from "../../components/homeComponents/difference";
import GetRandomStory from "../../components/getRandomStory";
import LinkMenu from '../../components/homeComponents/home-menu';
import Information from "../../components/homeComponents/information";
import getCookie from '../../utils/cookie'

const HomePage = () => {

    const token = getCookie('x-auth-token');

    return (
        <div>
            <LinkMenu />
            <Information />'
            {/* <img className={styles['dog-image']} src={dog} /> */}
            {token ? <GetRandomStory /> : null}
            {token ? <Difference /> : null}
        </div>
    );
};

export default HomePage;