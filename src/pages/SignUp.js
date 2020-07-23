import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

function SignUp() {
  return (
    <Container>
      <h2>Sign Up to the site</h2>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="password" />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default SignUp;
