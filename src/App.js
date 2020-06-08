import React from "react";
import CounterApp from "./features/counter/CounterApp";
import { Provider } from "react-redux";
import store from "./app/store";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MainApp() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route exact path="/">
                <CounterApp />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

function About() {
  return <h2>About</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}
export default MainApp;
