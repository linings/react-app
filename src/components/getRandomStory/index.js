import { useEffect, useState } from 'react';
import RESTAPI from '../../REST API';
import styles from './index.module.css';
import quotes from '../../public/left-quote.png'

const GetRandomStory = () => {
    let [story, setStory] = useState([]);

    async function getStory() {
        let randomStory = await fetch(RESTAPI.name + 'data/stories');
        let stories = await randomStory.json();

        let story = stories[getRandomInt(3)];

        setStory(story);
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    useEffect(() => {
        getStory();
    }, []);

    console.log(story);

    return (
        <div>
            <img className={styles['random-story']} src={story.url}></img>
            <span className={styles['random-story-text']}>
                <div>{story.story}</div>
                <img className={styles.quotes} src={quotes}></img>
                <div className={styles['name-of-pet']}>-{story.name}</div>
            </span>
        </div>
    )
}

export default GetRandomStory;