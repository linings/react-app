import styles from './index.module.css';
import PageLayout from "../../components/page-layout";
import { useLocation } from 'react-router';


const Admin = () => {
    const location = useLocation();

    return (
        <>
            <PageLayout />
            {location.pathname.split('/')[2] === 'stories' ?

                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles["col-md-6"]}>
                            <div className={styles.card}>
                                <form className={styles.box} /*onSubmit={handleSubmit}*/>
                                    <h1>Upload to {location.pathname.split('/')[2]}</h1>
                                    <p className={styles["text-muted"]}>
                                    </p>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    //   value={username}
                                    //  onChange={(e) => setUsername(e.target.value)}
                                    ></input>
                                     <input
                                        type="text"
                                        name="story"
                                        placeholder="Story"
                                    //   value={password}
                                    //   onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                    <input
                                        type="text"
                                        name="url"
                                        placeholder="Image Url"
                                    //   value={password}
                                    //   onChange={(e) => setPassword(e.target.value)}
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
                :
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles["col-md-6"]}>
                            <div className={styles.card}>
                                <form className={styles.box} /*onSubmit={handleSubmit}*/>
                                    <h1>Upload to {location.pathname.split('/')[2]}</h1>
                                    <p className={styles["text-muted"]}>
                                    </p>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    //   value={username}
                                    //  onChange={(e) => setUsername(e.target.value)}
                                    ></input>
                                    <input
                                        type="text"
                                        name="age"
                                        placeholder="Age"
                                    //   value={password}
                                    //   onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                    <input
                                        type="text"
                                        name="breed"
                                        placeholder="Breed"
                                    //   value={password}
                                    //   onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                    <input
                                        type="text"
                                        name="sex"
                                        placeholder="Sex"
                                    //   value={password}
                                    //   onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                    <input
                                        type="text"
                                        name="story"
                                        placeholder="Story"
                                    //   value={password}
                                    //   onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                    <input
                                        type="text"
                                        name="url"
                                        placeholder="Image Url"
                                    //   value={password}
                                    //   onChange={(e) => setPassword(e.target.value)}
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
            }
        </>
    );
}
export default Admin;