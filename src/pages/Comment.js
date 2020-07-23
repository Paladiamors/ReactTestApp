import React from "react";
import DatePicker from "react-datepicker";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import TinyMce from "../components/Tinymce";
import "react-datepicker/dist/react-datepicker.css";

class DateSelect extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        for="date"
        name="date"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

function Comment() {
  return (
    <Container>
      <h2>Comment Box</h2>
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
        <FormGroup>
          <Label for="mce comment">Mce Comment</Label>
          <TinyMce />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date: </Label>
          <DateSelect />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default Comment;
