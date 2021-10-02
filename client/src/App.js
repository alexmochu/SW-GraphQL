// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { People } from './People';
import { PeopleDetail } from './peopleDetail';

const AppDiv = styled.header`
  background-color: #28223f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/people-detail">
            <PeopleDetail />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Dashboard() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <AppDiv>
      <h3>Star Wars API People</h3>
      {/* <p>{!data ? 'Loading...' : data}</p> */}
      <People />
    </AppDiv>
  );
}
