import { Link } from 'react-router-dom';
import GetRandomStory from '../../../getRandomStory';
import styles from './index.module.css'

const Choose = () => {

    return (
        <div>
        <div className={styles['pet-wrapper']}>
            <span className={styles['cat-image']}>
                <img alt="cat" src={'https://thumbs.dreamstime.com/b/cute-cat-white-background-lovely-pet-cute-cat-white-background-124435681.jpg'} />
                <Link to={'/adopt/cats'}>Cats</Link>
            </span>
            <span className={styles['dog-image']} >
                <img alt="dog" src={'https://photosfine.files.wordpress.com/2012/04/white-dog-white-background-3.jpg'} />
                <Link to={'/adopt/dogs'}>Dogs</Link>
            </span>
        </div>
         <GetRandomStory />
        </div>
    )
}
export default Choose;