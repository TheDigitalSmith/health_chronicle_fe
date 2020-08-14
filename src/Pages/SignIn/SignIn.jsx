import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class SignIn extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const submitURL = await fetch("http://localhost:9121/api/users/signin", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await submitURL.json();
    this.setState({ ...response });
    this.setState({ username: "", password: "" });
    localStorage.setItem("x_access_token", response.access_token);
    this.props.history.push("/me");
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Sign In
          </Button>
        </Form>
      </Container>
    );
  }
}
