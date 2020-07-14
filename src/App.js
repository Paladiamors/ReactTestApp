import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import store from "./app/store";
import MainNavBar from "./components/Navbar";
import Routes from "./components/Routes";

function MainApp() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <MainNavBar />
          <Routes />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default MainApp;
