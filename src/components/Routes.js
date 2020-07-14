import React from "react";
import { Route, Switch } from "react-router-dom";
import CounterApp from "../features/counter/CounterApp";
import About from "../components/About";
import Dashboard from "../components/Dashboard";

const routes = [
  { path: "/", exact: true, component: CounterApp },
  { path: "/about", component: About },
  { path: "/dashboard", component: Dashboard },
];

export default function () {
  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route exact={route.exact} path={route.path}>
            {route.component}
          </Route>
        );
      })}
    </Switch>
  );
}
