import { faCoffee, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function Dashboard() {
  
  return (
    <Container>
      <h2>Dashboard</h2>
      <p>This is the dashboard with some intersting information.</p>
      <h2>Trying out icons</h2>
      <p>
        Time for a little coffee{" "}
        <FontAwesomeIcon icon={faCoffee} color="#6DB65B" />
      </p>
      <p>
        Preparting for the games that will happen{" "}
        <FontAwesomeIcon icon={faGamepad} color="#6DB65B" />
      </p>
      <p>Another line of information.</p>
      <h2>Join our Publication</h2>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label for="comment">Comment</Label>
          <Input
            type="textarea"
            name="comment"
            id="comment"
            placeholder="comment"
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default Dashboard;
