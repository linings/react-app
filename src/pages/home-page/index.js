import React from "react";
import styles from "./index.module.css";
import UserContext from "../../context";

const HomePage = () => {
  return (
    <UserContext.Consumer>
      {({ id, username }) => {
        <h1>{username}</h1>;
      }}
    </UserContext.Consumer>
  );
};
export default HomePage;
