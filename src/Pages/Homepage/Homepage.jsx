import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron1 from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import "./Homepage.css";
export default class Homepage extends Component {
  state = {
    jumbotron: [
      {
        title: "Welcome to Health Chronicle",
        content: "Your one stop to your whole medical records",
        path: "",
        image:
          "https://www.accessrecordsmanagement.co.uk/wp-content/uploads/2019/02/medical-records.jpg",
      },
    ],
  };
  render() {
    return (
      <>
        <Jumbotron1>
          <h1>{this.state.jumbotron[0].title}</h1>
          <p>{this.state.jumbotron[0].content}</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron1>
        {/* <Jumbotron></Jumbotron> */}
        <Container fluid>
          <Row className="mb-5">
            <Col lg={8}>
              <img
                src="https://static.teamviewer.com/resources/2020/03/girl-teaching-senior-mother-use-laptop-1618x1080.jpg"
                alt="Professional Medical Practioner"
                className="mainJumbotron"
              ></img>
              {/* <Jumbotron></Jumbotron> */}
            </Col>
            <Col>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </Col>
            <Col lg={8}>
              <img
                src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="Professional Medical Practioner"
                className="mainJumbotron"
              ></img>
              {/* <Jumbotron></Jumbotron> */}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
