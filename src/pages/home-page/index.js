import React from "react";
import Difference from "../../components/difference";
import GetRandomStory from "../../components/getRandomStory";
import LinkMenu from '../../components/home-menu';
import Information from "../../components/information";

const HomePage = () => {


    return (
        <div>
            <LinkMenu />
            <Information />
            <GetRandomStory />
            <Difference />
        </div>
    );
};

export default HomePage;