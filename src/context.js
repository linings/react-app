import React from "react";

const UserContext = React.createContext({
  message: '',
  user: "",
  logIn: () => { },
  logOut: () => { },
});

export default UserContext;
