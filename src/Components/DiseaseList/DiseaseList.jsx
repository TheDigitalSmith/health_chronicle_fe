import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

export default class DiseaseInfo extends Component {
  state = {
    modalState: false,
    nameOfDisease: "",
    nameOfOrgan: "",
  };

  openModal = () => {
    this.setState({ modalState: true });
  };

  closeModal = () => {
    this.setState({ modalState: false });
  };

  handleAddDisease = async () => {
    try {
      const accessToken = localStorage.getItem("x_access_token");
      const token = "Bearer " + accessToken;
      const payload = {
        name: this.state.nameOfDisease,
        organs: [{ name: this.state.nameOfOrgan }],
      };
      console.log("payload", payload);
      const submitURL = await fetch(
        "http://localhost:9121/api/users/diseases",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (submitURL.ok) {
        const response = await submitURL.json();
        this.props.handleDiseaseChange(response.diseases);
        this.setState({ nameOfDisease: "", nameOfOrgan: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { diseases } = this.props;
    return (
      <Container>
        <Row>
          <h2>Diseases</h2>
          <Button onClick={this.openModal}>+</Button>
        </Row>
        {this.state.modalState && (
          <Modal
            show={this.openModal}
            onHide={this.closeModal}
            backdrop="static"
            keyboards={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Disease to your medical history</Modal.Title>
            </Modal.Header>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  name
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="Cardiac Arrhythmia"
                    value={this.state.nameOfDisease}
                    onChange={(e) =>
                      this.setState({ nameOfDisease: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  organ
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="e.g. Heart"
                    value={this.state.nameOfOrgan}
                    onChange={(e) =>
                      this.setState({ nameOfOrgan: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
            </Form>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleAddDisease}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <Row>
          {diseases.length !== 0 ? (
            diseases.map((d) => (
              <Col lg={3}>
                <Card className="mt-2 mb-2">
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
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
                  <Card.Title>No records of diseases</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}
