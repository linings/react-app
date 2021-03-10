import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './pages/login';
import Register from './pages/register';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
