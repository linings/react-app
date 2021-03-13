import React from "react";

const UserContext = React.createContext({
  user: "",
  logIn: () => {},
  logOut: () => {},
});

export default UserContext;
