import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/homeComponents/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Donate from "./components/donateComponents/donate";
import Admin from "./components/admin/adminPage";
import Messages from "./components/messages";
import UserContext from './context';

const Navigation = () => {

  return (
    <UserContext.Consumer>
      {values =>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact component={Home} />*/}
            <Route path="/login">
              {localStorage.getItem('username') ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/register">
              {localStorage.getItem('username') ? <Redirect to="/" /> : <Register />}
            </Route>
            <Route path="/adopt">
              {localStorage.getItem('username') ? <Donate /> : <Redirect to="/login" />}
            </Route>
            <Route path="/messages">
              {!localStorage.getItem('username') ? <Redirect to="/login" /> : <Messages />}
            </Route>
            {/* <Route path="/upload">
              {!localStorage.getItem('username') ? <Redirect to="/" />
                : !values.user ? < Redirect to="/" />
                  : <Admin />}
            </Route> */}

            {<Route path="/" exact component={Home} />}
            {/* {<Route path="/login" component={} />} */}
            {/* {<Route path="/register" component={} />} */}
            {/* {<Route path="/adopt" component={Donate} />} */}
            {<Route path="/upload" component={Admin} />}
            {/* {<Route path="/messages" component={} />} */}
          </Switch>
        </BrowserRouter>}

    </UserContext.Consumer>
  );
};

export default Navigation;
