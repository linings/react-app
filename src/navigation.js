import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/homeComponents/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Donate from "./components/donateComponents/donate";
import Admin from "./components/admin/adminPage";
import Messages from "./components/messages";
import getCookie from "./utils/cookie";

const Navigation = () => {
  const loggedIn = getCookie('x-auth-token');
  const isAdmin = localStorage.getItem('isAdmin');

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login">
          {loggedIn !== null ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {loggedIn !== null ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/adopt">
          {loggedIn === null ? <Redirect to="/login" /> : <Donate />}
        </Route>
        <Route path="/messages">
          {loggedIn === null ? <Redirect to="/login" /> : <Messages />}
        </Route>
        <Route path="/upload">
          {loggedIn === null || isAdmin === 'false' ? <Redirect to="/" /> : <Admin />}
        </Route>
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/register" component={Register} /> */}
        {/* <Route path="/adopt" component={Donate} /> */}
        {/* <Route path="/upload" component={Admin} /> */}
        {/* <Route path="/messages" component={Messages} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
