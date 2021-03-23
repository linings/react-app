import styles from './index.module.css';
import PageLayout from "../../components/page-layout";

const Admin = () => {
    return (
        <div>
            <PageLayout />
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles["col-md-6"]}>
                        <div className={styles.card}>
                            <form className={styles.box} >
                                <h1>Upload</h1>
                               <br/>
                                {/* <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                ></input>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                ></input>
                                <input
                                    type="submit"
                                    name="login"
                                    value="Login"
                                    href="#"
                                ></input> */}
                                <div className={styles["col-md-12"]}></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admin;