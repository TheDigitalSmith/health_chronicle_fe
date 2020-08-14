import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class HistoryList extends Component {
  state = {
    modalState: false,
    date: "",
    caseTitle: "",
    description: "",
  };

  controlModal = () => {
    this.setState({ modalState: !this.state.modalState });
  };

  handleAddHistory = async () => {
    try {
      const { date, description, caseTitle } = this.state;
      const accessToken = localStorage.getItem("x_access_token");
      const token = "Bearer " + accessToken;
      const addHistory = await fetch(
        "http://localhost:9121/api/users/history",
        {
          method: "POST",
          body: JSON.stringify({
            date: date,
            case: caseTitle,
            description: description,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (addHistory.ok) {
        const response = await addHistory.json();
        this.props.handleHistoryChange(response.history);
        this.setState({ date: "", manufacturer: "", description: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { history } = this.props;
    return (
      <Container>
        <Row>
          <h2>History</h2>
          <Button onClick={this.controlModal}>+</Button>
        </Row>
        {this.state.modalState && (
          <Modal
            show={this.controlModal}
            onHide={this.controlModal}
            backdrop="static"
            keyboards={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add medicine to your medical history</Modal.Title>
            </Modal.Header>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Date
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="date"
                    placeholder="Paracetamol 500mg"
                    value={this.state.date}
                    onChange={(e) => this.setState({ date: e.target.value })}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Case
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="e.g. Fractured Tibia"
                    value={this.state.caseTitle}
                    onChange={(e) =>
                      this.setState({ caseTitle: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Description
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    as="textarea"
                    row="8"
                    placeholder="e.g. Experienced excessive torsion in a football accident"
                    value={this.state.description}
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
            </Form>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.controlModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleAddHistory}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
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
