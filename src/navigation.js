import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/homeComponents/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Donate from "./components/donateComponents/donate";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/donate" component={Donate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
