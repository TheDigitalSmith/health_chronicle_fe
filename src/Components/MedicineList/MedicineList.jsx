import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class MedicineList extends Component {
  state = {
    medicines: [],
    modalState: false,
    name: "",
    manufacturer: "",
    medicineCode: "",
  };

  controlModal = () => {
    this.setState({ modalState: !this.state.modalState });
  };
  openModal = () => {
    this.setState({ modalState: true });
  };

  closeModal = () => {
    this.setState({ modalState: false });
  };

  handleAddMedicine = async () => {
    const accessToken = localStorage.getItem("x_access_token");
    const token = "Bearer " + accessToken;

    const addMedicine = await fetch(
      "http://localhost:9121/api/users/medicines",
      {
        method: "POST",
        body: JSON.stringify({
          name: this.state.nameOfMedicine,
          manufacturer: this.state.nameOfManufacturer,
          medicineCode: this.state.medicineID,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    if (addMedicine.ok) {
      const response = await addMedicine.json();
      this.props.handleMedicineChange(response.medicines);
      this.setState({ name: "", manufacturer: "", medicineCode: "" });
    }
  };
  render() {
    const { medicines } = this.props;
    return (
      <Container>
        <Row>
          <h2>Medicine</h2>
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
                    value={this.state.nameOfMedicine}
                    onChange={(e) =>
                      this.setState({ nameOfMedicine: e.target.value })
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
                    value={this.state.medicineID}
                    onChange={(e) =>
                      this.setState({ medicineID: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
            </Form>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.controlModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleAddMedicine}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
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
