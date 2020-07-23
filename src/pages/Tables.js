import React from "react";
import { Container } from "reactstrap";
import { SimpleTable } from "../components/Table";

// some functions to generate some dummy data
function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function age() {
  return Math.floor(100 * Math.random());
}

function getData() {
  var data = [];
  const names = ["Billy", "Jones", "Sam"];
  const locations = [
    "wibert",
    "kheledo",
    "yhimond",
    "druixdiff",
    "flerith",
    "crork",
    "vonio",
    "zerton",
    "akamore",
    "enspus",
  ];

  for (var i = 0; i < 10; i++) {
    data.push({ name: choose(names), location: choose(locations), age: age() });
  }
  return data;
}

function Tables() {
  const data = getData();
  return (
    <Container>
      <h2>Testing Tables</h2>
      <h3>First Table</h3>
      {SimpleTable(data, { striped: true, hover: true })}
      <h3>Second table</h3>
      {SimpleTable(data, { dark: true, striped: true, hover: true })}
    </Container>
  );
}

export default Tables;
