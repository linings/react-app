import React, { useContext } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/homeComponents/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Donate from "./components/donateComponents/donate";
import Admin from "./components/admin/adminPage";
import Messages from "./components/messages";
import TryMessages from "./components/messages/main/tryMessage";

const Navigation = () => {
  const loggedIn = localStorage.getItem('username');
  const isAdmin = localStorage.getItem('isAdmin');

  return (
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
          {!loggedIn ? <Redirect to="/login" /> : <Donate />}
        </Route>

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
        {<Route path="/trymessages" component={TryMessages} />}
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
