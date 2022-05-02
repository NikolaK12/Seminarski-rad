import React from "react";
import { Chat } from "./Components";
import { Card, Form, FormControl, Button } from "react-bootstrap";
import "./Styles/App.css";

export default class App extends React.Component {
  state = {
    submit: false,
    username: "",
    color: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.username.trim() != "" ||
      this.state.username.trim().length != 0
    ) {
      this.setState({ submit: true });
    } else {
      alert("Input cannot be empty");
    }
  };

  render() {
    if (this.state.submit === false) {
      return (
        <Card border="info" className="card d-flex mx-auto mt-4">
          <Card.Header className="card-title">React Chat App</Card.Header>

          <Card.Body>
            <Form onSubmit={this.handleSubmit} className="mt-4">
              <Form.Label className="mt-2" htmlFor="textInput">
                Username:
              </Form.Label>

              <FormControl
                type="text"
                className="text-input"
                placeholder="Username"
                onChange={(e) => this.setState({ username: e.target.value })}
                maxLength="30"
              />

              <Form.Label className="mt-2" htmlFor="colorInput">
                Color:
              </Form.Label>

              <FormControl
                type="color"
                className="color-input"
                onChange={(e) => this.setState({ color: e.target.value })}
              />
              <Button variant="secondary" type="submit" className="mt-4">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      );
    } else {
      return <Chat user={this.state.username} color={this.state.color} />;
    }
  }
}
