import React from "react";
import CsrfForm from "../components/CsrfForm";
import { Container, Form, Input, FormGroup, Label, Button } from "reactstrap";

function LoginForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.csrfToken.value);

    // iterating over the different inputs of the field
    console.log(event.target.elements, event.target.elements.length);
    for (var i = 0; i < event.target.elements.length; i++) {
      console.log(
        event.target.elements[i],
        event.target.elements[i].localName,
        event.target.elements[i].value
      );
    }
    // event.target.elements.map((element) => {
    //   console.log(element, element.type);
    // });

    var formData = new FormData();
    formData.append("hello", "world");
    formData.append("test", 1);

    fetch("/api/core/post", {
      method: "POST",
      body: "hello=world&test=1",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form className="hello!" onSubmit={handleSubmit}>
        <Input type="hidden" name="csrfToken" value={props.csrfToken} />
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

const CsrfLogin = () => <CsrfForm form={LoginForm} />;
export default CsrfLogin;
