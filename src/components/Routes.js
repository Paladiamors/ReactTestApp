import React from "react";
import { Route, Switch } from "react-router-dom";
import CounterApp from "../features/counter/CounterApp";
import About from "../pages/About";
import Comment from "../pages/Comment";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Pricing from "../pages/Pricing";
import Register from "../pages/Register";
import Repl from "../pages/Repl";
import SignUp from "../pages/SignUp";
import Tables from "../pages/Tables";
import Person from "../features/person/Person";

export default function () {
  return (
    <Switch>
      <Route path="/about" render={(props) => <About {...props} />} />
      <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
      <Route path="/comment" render={(props) => <Comment {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/Tables" render={(props) => <Tables {...props} />} />
      <Route path="/pricing" render={(props) => <Pricing {...props} />} />
      <Route path="/signup" render={(props) => <SignUp {...props} />} />
      <Route path="/repl" render={(props) => <Repl {...props} />} />
      <Route path="/person" render={(props) => <Person {...props} />} />
      <Route path="/" exact render={(props) => <CounterApp {...props} />} />
    </Switch>
  );
}
