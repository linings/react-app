import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { createBrowserHistory } from 'history';

import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import UserContext from "../../context";
import authenticate from "../../utils/authenticate";
import RESTAPI from "../../REST API";
import handleErrors from "../../utils/errors";

const Login = () => {
  let [errors, setErrors] = useState({ username: "", password: "" });

  const context = useContext(UserContext);
  // const history = useHistory();    
  let history = createBrowserHistory({ forceRefresh: true })

  const checkForError = (e) => {
    handleErrors(e, setErrors);
  }


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    let username = e.target.username.value;
    let password = e.target.password.value;

    await authenticate(
      RESTAPI.name + "users/login",
      {
        username,
        password,
      },
      (user) => {
        context.user = user;
        context.user.loggedIn = true;
        history.push("/");
      },
      (error) => {
        console.log('Error', error);
      });
      
      console.log(context);
  };

  return (
    <div>
      <PageLayout />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles["col-md-6"]}>
            <div className={styles.card}>
              <form className={styles.box} onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p className={styles["text-muted"]}>
                  Please enter your email and password!
                </p>
                <input
                  type="text"
                  name="username"
                  placeholder="Email"
                  onBlur={checkForError}
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onBlur={checkForError}
                ></input>
                <input
                  type="submit"
                  name="login"
                  value="Login"
                  href="#"
                ></input>
                <span className={styles.errors}>{errors.usernameValue}</span>
                <span className={styles.errors}>{errors.passwordValue}</span>
                <div className={styles["col-md-12"]}></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;
