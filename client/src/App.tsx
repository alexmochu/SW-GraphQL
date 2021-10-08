// client/src/App.js
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Person from './person';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/people-detail/:nameRoute">
          <Person />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/404">
          <h1>404</h1>
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
