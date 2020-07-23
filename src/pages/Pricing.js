import React from "react";
import { Container, Col, Row, Button } from "reactstrap";

function PricingColumn(details) {
  return (
    <Col className="p-4">
      <h6>{details.plan}</h6>
      <h2>${details.price}</h2> / Month
      <hr />
      <h6>{details.projects} Projects</h6>
      <hr />
      <h6>{details.teamMembers} Team Members</h6>
      <hr />
      <h6>{details.contacts} Contacts</h6>
      <hr />
      <h6>{details.messages} Messages</h6>
      <hr />
      <Button color="info">Sign Up</Button>
    </Col>
  );
}

export default function Pricing() {
  const plans = [
    {
      plan: "Free",
      price: 0,
      projects: 2,
      teamMembers: 1,
      contacts: 2,
      messages: 10,
    },
    {
      plan: "Standard",
      price: 10,
      projects: 10,
      teamMembers: 5,
      contacts: 20,
      messages: 100,
    },
    {
      plan: "Enterprise",
      price: 50,
      projects: 100,
      teamMembers: 500,
      contacts: 200,
      messages: 1000,
    },
  ];
  return (
    <Container>
      <Row>
        <Col className="col-10 offset-1">
        <h2>We offer the best services at the right price</h2>
        <p>
          Come join the many different customers that are part of our firm that
          made the leap to using modern technologies for their webpage. Once you
          sign up you'll realize what you've been missing all this time.
        </p>
        <p>
          We offer fast processing for all organization and just the right
          capacity for all of our clients. It's easy to upgrade and you'll have
          no problems using our system.
        </p>
        </Col>
      </Row>
      <Row className="text-center">
        {plans.map((plan) => PricingColumn(plan))}
      </Row>
    </Container>
  );
}
