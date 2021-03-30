import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import UserContext from "../../context";
import authenticate from "../../utils/authenticate";
import RESTAPI from "../../REST API";
import handleErrors from "../../utils/errors";

const Login = () => {
  let errorMessage = '';
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let [errors, setErrors] = useState({ username: "", password: "" });

  const context = useContext(UserContext);
  const history = useHistory();

  const checkForError = (e) => {
    handleErrors(e, setErrors);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    await authenticate(RESTAPI.name + "users/login", {
      username,
      password,
    });

    if (document.cookie) {
      context.user = username;
      history.push("/");
    }
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={checkForError}
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onBlur={checkForError}
                  onChange={(e) => setPassword(e.target.value)}
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
