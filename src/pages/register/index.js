import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import UserContext from "../../context";
import authenticate from "../../utils/authenticate";
import RESTAPI from "../../REST API";
import handleErrors from "../../utils/errors";

const Register = () => {
  let [errors, setErrors] = useState({ username: "", password: "", repeatPassword: "" });

  const context = useContext(UserContext);
  const history = useHistory();


  const checkForError = (e) => {
    handleErrors(e, setErrors);
    console.log(errors);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let username = e.target.username.value;
    let password = e.target.password.value;
    let repeatPassword = e.target.repeatPassword.value;

    authenticate(RESTAPI.name + "data/Users", {
      name,
      username,
      password,
      repeatPassword,
    },
      (user) => {
        context.user = user;
        context.user.loggedIn = true;
        history.push("/");
      },
      (error) => {
        console.log('Error', error);
      });
  };

  return (
    <div>
      <PageLayout />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles["col-md-6"]}>
            <div className={styles.card}>
              <form className={styles.box} onSubmit={handleSubmit}>
                <h1>Register</h1>
                <p className={styles["text-muted"]}>
                  Please enter your email, names and password!
                </p>
                <input
                  type="text"
                  name="username"
                  placeholder="Email"
                  onBlur={checkForError}
                ></input>
                <input
                  type="text"
                  name="name"
                  placeholder="First and Last name"
                  onBlur={checkForError}
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onBlur={checkForError}
                ></input>
                <input
                  type="password"
                  name="repeatPassword"
                  placeholder="Re-Password"
                  onBlur={checkForError}
                ></input>
                <input type="submit" name="" value="Register" href="#"></input>
                <span className={styles.errors} style={{ color: "red" }}>{errors.usernameValue}</span>
                <span className={styles.errors} style={{ color: "red" }}>{errors.passwordValue}</span>
                <span className={styles.errors} style={{ color: "red" }}>{errors.repeatPasswordValue}</span>
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
