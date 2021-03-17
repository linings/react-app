import React, { useContext } from "react";

import Difference from "../../components/difference";
import GetRandomStory from "../../components/getRandomStory";
import LinkMenu from '../../components/home-menu';
import Information from "../../components/information";
import UserContext from "../../context";

const HomePage = () => {

    const contex = useContext(UserContext);
    console.log(contex);

    return (
        <div>
            <LinkMenu />
            <Information />
            {contex.user ? <GetRandomStory /> : null}
            {contex.user ?   <Difference /> : null}
        </div>
    );
};

export default HomePage;