// client/src/App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styled from 'styled-components';


const AppDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default function App() {
  return (
    <Router>
      <div>
        <section>
          <ul>
              <li>
                <Link to="/">Dashoard</Link>
              </li>
              <li>
                <Link to="/people-detail">People Detail</Link>
              </li>
            </ul>
        </section>
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
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <AppDiv>
      <AppHeader>
        <p>{!data ? "Loading..." : data}</p>
      </AppHeader>
    </AppDiv>
  );
}

function PeopleDetail() {
  return <h2>PeopleDetail</h2>;
}

