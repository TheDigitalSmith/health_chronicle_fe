import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class MedicineList extends Component {
  state = {
    medicines: [{ name: "Adderal" }, { name: "Aspirin" }],
  };
  render() {
    const { medicines } = this.props;
    return (
      <Container>
        <h2>Medicine</h2>
        <Row>
          {medicines.length !== 0 ? (
            medicines.map((m) => (
              <Col lg={3}>
                <Card className="mt-2 mb-2">
                  <Card.Body>
                    <Card.Title>{m.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col lg={12}>
              <Card className="mt-2 mb-2">
                <Card.Body>
                  <Card.Title>No records of medicines</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}
