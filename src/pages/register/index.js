import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import UserContext from "../../context";
import authenticate from "../../utils/authenticate";
import RESTAPI from "../../REST API";
import handleErrors from "../../utils/errors";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  let [errors, setErrors] = useState({ username: "", password: "", repeatPassword: "" });

  const context = useContext(UserContext);
  const history = useHistory();


  const checkForError = (e) => {
    handleErrors(e, setErrors);
    console.log(errors);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    authenticate(RESTAPI.name + "data/Users", {
      name,
      username,
      password,
      repeatPassword,
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
                <h1>Register</h1>
                <p className={styles["text-muted"]}>
                  Please enter your email , password and re-password!
                </p>
                <input
                  type="text"
                  name="username"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  onBlur={checkForError}
                ></input>
                <input
                  type="text"
                  name="name"
                  placeholder="First and Last name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  onBlur={checkForError}
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onBlur={checkForError}
                ></input>
                <input
                  type="password"
                  name="repeatPassword"
                  placeholder="Re-Password"
                  value={repeatPassword}
                  onChange={(e) => {
                    setRepeatPassword(e.target.value);
                  }}
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
