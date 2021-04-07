import useFetch from '../../hooks/useFetch';
import styles from './index.module.css';
import Spinner from 'react-bootstrap/Spinner';


const GetRandomStory = () => {
    const stories = useFetch('stories');
    const story = stories[getRandomInt(stories.length)];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    return (
        <div>
            {story ?
                <div>
                    <img className={styles['random-story']} src={story.url}></img>
                    <span className={styles['random-story-text']}>
                        <div>{story.story}</div>
                        <div className={styles['name-of-pet']}>-{story.name}</div>
                    </span>
                </div> : <Spinner className={styles.spinner} animation="border" />
            }
        </div>
    )
}

export default GetRandomStory;