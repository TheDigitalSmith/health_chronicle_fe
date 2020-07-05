import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class VaccineList extends Component {
  state = {
    vaccines: [{ name: "Polio", date: "07-29-1997" }],
  };
  render() {
    return (
      <Container>
        <h2>Vaccine</h2>
        <Row>
          {this.state.vaccines.map((v) => (
            <Col lg={3}>
              <Card className="mt-2 mb-2">
                <Card.Body>
                  <Card.Title>{v.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
