import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import NewwPlace from './places/pages/NewwPlace';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact ={true}>
          <Users />
        </Route>
        <Route path="/places/new" exact = {true}>
          <NewwPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
