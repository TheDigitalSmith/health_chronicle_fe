import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class VaccineList extends Component {
  state = {
    vaccines: [
      { name: "Polio", date: "07-29-1997" },
      { name: "Polio", date: "07-29-1997" },
    ],
    modalState: false,
    nameOfVaccine: "",
    nameOfManufacturer: "",
    vaccineID: "",
  };

  controlModal = () => {
    this.setState({ modalState: !this.state.modalState });
  };

  handleAddVaccine = async () => {
    const { nameOfVaccine, nameOfManufacturer, vaccineID } = this.state;
    const accessToken = localStorage.getItem("x_access_token");
    const token = "Bearer " + accessToken;
    const addVaccine = await fetch("http://localhost:9121/api/users/vaccines", {
      method: "POST",
      body: JSON.stringify({
        name: nameOfVaccine,
        manufacturer: nameOfManufacturer,
        vaccineCode: vaccineID,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (addVaccine.ok) {
      const response = await addVaccine.json();
      this.props.handleVaccineChange(response.vaccines);
      this.setState({
        nameOfVaccine: "",
        nameOfManufacturer: "",
        vaccineID: "",
      });
    }
  };

  render() {
    const { vaccines } = this.props;
    return (
      <Container>
        <Row>
          <h2>Vaccine</h2>
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
                  name
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="Paracetamol 500mg"
                    value={this.state.nameOfVaccine}
                    onChange={(e) =>
                      this.setState({ nameOfVaccine: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Manufacturer
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="e.g. Panadol"
                    value={this.state.nameOfManufacturer}
                    onChange={(e) =>
                      this.setState({ nameOfManufacturer: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Medicine ID
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="e.g. a12556678"
                    value={this.state.vaccineID}
                    onChange={(e) =>
                      this.setState({ vaccineID: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
            </Form>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.controlModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleAddVaccine}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <Row>
          {vaccines.length !== 0 ? (
            vaccines.map((v) => (
              <Col lg={3}>
                <Card className="mt-2 mb-2">
                  <Card.Body>
                    <Card.Title>{v.name}</Card.Title>
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
                  <Card.Title>No records of vaccines</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}
