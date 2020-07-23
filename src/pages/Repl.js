import React, { useState } from "react";
import { Button, Container, Form, Input } from "reactstrap";

function adder(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function printer(e) {
  console.log(e);
  console.log(e.target);
  console.log(e.target.value);
}

function updater(e, func) {
  func(parseInt(e.target.value));
}

function Repl() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [action, setAction] = useState("");
  const actions = { adder, minus, divide, multiply };

  const submitted = (e) => {
    console.log("a is", a);
    console.log("b is", b);
    console.log("action is", action);
    console.log("function is", actions[action]);
    if (actions[action]) {
      console.log("result is", actions[action](a, b));
    }
    else {
      console.log("this action does not exist:", action)
    }
  };
  return (
    <Container>
      <h2>Repl page</h2>
      <p>Just write some basic javascript here for experimentation</p>
      <Form>
        <Input name="a" placeholder="a" onChange={(e) => updater(e, setA)} />
        <Input name="b" placeholder="b" onChange={(e) => updater(e, setB)} />
        <Input
          name="action"
          placeholder="action"
          onChange={(e) => setAction(e.target.value)}
        />
        <Button color="info" onClick={(e) => submitted(e)}>
          submit
        </Button>
      </Form>
    </Container>
  );
}

export default Repl;
