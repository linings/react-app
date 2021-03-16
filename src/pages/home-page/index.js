import React from "react";
import Difference from "../../components/difference";
import LinkMenu from '../../components/home-menu';
import Information from "../../components/information";

const HomePage = () => {


    return (
        <div>
            <LinkMenu />
            <Information />
            <Difference />
        </div>
    );
};

export default HomePage;