import React from "react";
import "styles/hero.scss";
import { Jumbotron } from "reactstrap";

// experimentation on creating hero sections

export function hero1() {
  return (
    <Jumbotron
      style={{
        backgroundImage: "images/joanna-kosinska-4qujjbj3srs-unsplash.jpg",
        backgroundSize: "cover",
      }}
    ></Jumbotron>
  );
}
