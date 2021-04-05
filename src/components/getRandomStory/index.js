import { useEffect, useState } from 'react';
import RESTAPI from '../../REST API';
import getData from '../../utils/getData';
import styles from './index.module.css';

const GetRandomStory = () => {
    const [story, setStory] = useState([]);

    async function getStory() {
        let stories = await getData('stories');
        let story = stories[getRandomInt(stories.length)];

        setStory(story);
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    useEffect(() => {
        getStory();
    }, []);

    return (
        <div>
            <img className={styles['random-story']} src={story.url}></img>
            <span className={styles['random-story-text']}>
                <div>{story.story}</div>
                <div className={styles['name-of-pet']}>-{story.name}</div>
            </span>
        </div>
    )
}

export default GetRandomStory;