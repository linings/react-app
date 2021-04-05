import styles from './index.module.css';
import PageLayout from "../../page-layout";
import { useHistory, useLocation } from 'react-router';
import { useState } from 'react';
import post from '../../../utils/postData';
import AdoptionRequestsList from '../adoptionRequests';
import GetRandomStory from '../../getRandomStory'

const Admin = () => {
    const location = useLocation();
    const history = useHistory();
    const tableName = location.pathname.split('/')[2];

    const [name, setName] = useState('');
    let [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [sex, setSex] = useState('');
    const [story, setStory] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (age) {
            age = Number(age)
        }

        tableName === 'stories'
            ? post(tableName, { name, story, url })
            : post(tableName, { name, age, breed, sex, story, url });

        // history.push('/upload');
    }

    return (
        <>
            <PageLayout />
            {tableName === 'stories' ?
                <>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles["col-md-6"]}>
                                <div className={styles.card}>
                                    <form className={styles.box} onSubmit={handleSubmit}>
                                        <h1>Upload to {tableName}</h1>
                                        <p className={styles["text-muted"]}>
                                        </p>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        ></input>
                                        <input
                                            type="text"
                                            name="story"
                                            placeholder="Story"
                                            value={story}
                                            onChange={(e) => setStory(e.target.value)}
                                        ></input>
                                        <input
                                            type="text"
                                            name="url"
                                            placeholder="Image Url"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                        ></input>
                                        <input
                                            type="submit"
                                            name="upload"
                                            value="Upload"
                                            href="#"
                                        ></input>
                                        <div className={styles["col-md-12"]}></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <GetRandomStory />
                </>
                :
                <>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles["col-md-6"]}>
                                <div className={styles.card}>
                                    <form className={styles.box} onSubmit={handleSubmit}>
                                        <h1>Upload to {location.pathname.split('/')[2]}</h1>
                                        <p className={styles["text-muted"]}>
                                        </p>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        ></input>
                                        <input
                                            type="text"
                                            name="age"
                                            placeholder="Age"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                        ></input>
                                        <input
                                            type="text"
                                            name="breed"
                                            placeholder="Breed"
                                            value={breed}
                                            onChange={(e) => setBreed(e.target.value)}
                                        ></input>
                                        <input
                                            type="text"
                                            name="sex"
                                            placeholder="Sex"
                                            value={sex}
                                            onChange={(e) => setSex(e.target.value)}
                                        ></input>
                                        <input
                                            type="text"
                                            name="story"
                                            placeholder="Story"
                                            value={story}
                                            onChange={(e) => setStory(e.target.value)}
                                        ></input>
                                        <input
                                            type="text"
                                            name="url"
                                            placeholder="Image Url"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                        ></input>
                                        <input
                                            type="submit"
                                            name="upload"
                                            value="Upload"
                                            href="#"
                                        ></input>
                                        <div className={styles["col-md-12"]}></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AdoptionRequestsList />
                </>
            }
        </>
    );
}
export default Admin;