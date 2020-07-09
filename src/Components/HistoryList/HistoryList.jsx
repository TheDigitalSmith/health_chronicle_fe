import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class HistoryList extends Component {
  state = {
    history: [
      {
        date: "03-16-2013",
        case: "Fractured Wrist",
        description: "Torsion fracture from football",
      },
    ],
  };
  render() {
    const { history } = this.props;
    return (
      <Container>
        <h2>History</h2>
        <Row>
          {history.length !== 0 ? (
            history.map((h) => (
              <Col lg={3}>
                <Card pt={3} className="mt-2 mb-2">
                  <Card.Body>
                    <Card.Title>{h.case}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {h.date}
                    </Card.Subtitle>
                    <Card.Text>{h.description}</Card.Text>
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
                  <Card.Title>No records of history</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}
