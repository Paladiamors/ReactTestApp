import React from "react";
import { Container, Jumbotron, Button } from "reactstrap";
import blueberries from "../images/joanna-kosinska-4qujjbj3srs-unsplash.jpg";
import "../styles/about.scss";

function About() {
  return (
    <Container>
      <h2>About</h2>
      <p>
        Welcome to the about page this is where we do some writing about our
        product
      </p>
      <Jumbotron
        style={{
          backgroundImage: "images/joanna-kosinska-4qujjbj3srs-unsplash.jpg",
          backgroundSize: "cover",
        }}
      >
        <h2>Hello, world!</h2>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <h2>We also like fruits</h2>
      <img src={blueberries} alt="blueberries" height="500" />

      <h2>Adding background images to divs</h2>
      <div
        className="div-with-image"
        style={{
          backgroundImage: `url(${blueberries})`,
          backgroundSize: "cover",
        }}
      >
        <div className="div-filter">
          <Container>
            <h3>Blueberries are good for your health</h3>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default About;
