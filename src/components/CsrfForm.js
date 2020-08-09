import React from "react";

export default class CsrfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { csrfToken: "" };
  }

  componentDidMount() {
    fetch("api/core/csrf")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ csrfToken: data.csrfToken });
      });
  }

  render() {
    const Frm = this.props.form;
    return <Frm csrfToken={this.state.csrfToken} />;
  }
}
