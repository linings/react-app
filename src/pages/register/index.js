import React from "react";

import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";

const Register = () => {
  return (
    <div>
      <PageLayout />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles["col-md-6"]}>
            <div className={styles.card}>
              <form className={styles.box}>
                <h1>Register</h1>
                <p className={styles["text-muted"]}>
                  Please enter your username , password and re-password!
                </p>
                <input type="text" name="" placeholder="Username"></input>
                <input type="password" name="" placeholder="Password"></input>
                <input type="repeat-password" name="" placeholder="Re-Password"></input>
                <input type="submit" name="" value="Register" href="#"></input>
                <div className={styles["col-md-12"]}></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
