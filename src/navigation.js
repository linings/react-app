import React, { useEffect } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/homeComponents/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Donate from "./components/donateComponents/donate";
import Admin from "./components/admin/adminPage";
import Messages from "./components/messages";
import UserContext from './context';

const Navigation = () => {
  // const isAdmin = localStorage.getItem('isAdmin');

  return (
    <UserContext.Consumer>
      {values =>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact component={Home} />
       // <Route path="/login">
       //   {loggedIn ? <Redirect to="/" /> : <Login />}
       // </Route>
       // <Route path="/register">
       //   {loggedIn ? <Redirect to="/" /> : <Register />}
       // </Route>*/}
            <Route path="/adopt">
              {localStorage.getItem('username') ? <Donate /> : <Redirect to="/login" />}
            </Route>
          {console.log(values.user)}
            {/* <Route path="/messages">
       //   {!loggedIn ? <Redirect to="/login" /> : <Messages />}
       // </Route>
       // <Route path="/upload">
       //   {!loggedIn ? <Redirect to="/" />
       //     : !isAdmin ? < Redirect to="/" />
       //       : <Admin />}
       // </Route> */}

            {<Route path="/" exact component={Home} />}
            {<Route path="/login" component={Login} />}
            {<Route path="/register" component={Register} />}
            {/* {<Route path="/adopt" component={Donate} />} */}
            {<Route path="/upload" component={Admin} />}
            {<Route path="/messages" component={Messages} />}
          </Switch>
        </BrowserRouter>}

    </UserContext.Consumer>
  );
};

export default Navigation;
