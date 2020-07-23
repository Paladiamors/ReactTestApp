import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

function Register() {
  return (
    <Container>
      <h2>Join Our Site</h2>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="name" />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default Register;
