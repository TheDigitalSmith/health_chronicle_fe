import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Health Chronicle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/me" className="nav-link">
              My Profile
            </Link>
          </Nav>
          <Button variant="outline-info">Sign In</Button>
          <Button variant="outline-info">Sign Up</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
