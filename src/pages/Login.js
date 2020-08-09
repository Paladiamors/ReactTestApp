import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function Login() {
  const [token, setToken] = useState("");
  const fetchCsrf = async () => {
    const call = await fetch("api/core/csrf");
    const data = await call.json();
    setToken(data.csrfToken);
  };

  useEffect(() => {
    fetchCsrf();
  }, []);

  return (
    <Container>
      <h2>Login</h2>
      <Form>
        <Input type="hidden" name="csrfToken" value={token} />
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default Login;
