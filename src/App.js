import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";
import store from "./app/store";
import Footer from "./components/Footer";
import MainNavBar from "./components/Navbar";
import Routes from "./components/Routes";

function MainApp() {

  return (
    <React.StrictMode>
      <Container>
        <Provider store={store}>
          <Router>
            <MainNavBar />
            <Routes />
          </Router>
        </Provider>
      </Container>
      <Footer />
    </React.StrictMode>
  );
}

export default MainApp;
