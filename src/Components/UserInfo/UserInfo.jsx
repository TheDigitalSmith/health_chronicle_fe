import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

export default class UserInfo extends Component {
  state = {
    showModal: false,
  };
  openModal = () => {
    console.log("copying props");
    this.setState({ ...this.props, showModal: true });
  };
  closeModal = async () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      firstName,
      lastName,
      bloodType,
      email,
      height,
      weight,
      allergies,
      sex,
      organDonour,
    } = this.props;

    const { showModal } = this.state;
    return (
      <Container>
        <h2>User Profile</h2>
        <Button variant="primary" onClick={this.openModal}>
          Edit User
        </Button>

        {showModal && (
          <Modal
            show={this.openModal}
            onHide={this.closeModal}
            backdrop="static"
            keyboards={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit user information</Modal.Title>
            </Modal.Header>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  First Name
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="Normal text"
                    value={this.state.firstName}
                    onChange={(e) =>
                      this.setState({ firstName: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Last Name
                </Form.Label>
                <Col sm="6">
                  <Form.Label column>{lastName}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Sex
                </Form.Label>
                <Col sm="6">
                  <Form.Label column>{sex}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Height
                </Form.Label>
                <Col sm="6">
                  <Form.Label column>{height}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Weight
                </Form.Label>
                <Col sm="6">
                  <Form.Label column>{weight}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Blood type
                </Form.Label>
                <Col sm="6">
                  <Form.Label column>{bloodType}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Organ Donour
                </Form.Label>
                <Col sm="6">
                  <Form.Label column>{String(organDonour)}</Form.Label>
                </Col>
              </Form.Group>
            </Form>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
              <Button variant="primary">Save Changes</Button>
            </Modal.Footer>
          </Modal>
        )}
        <Row>
          <Col lg={7}>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  First Name
                </Form.Label>
                <Col sm="10">
                  <Form.Label column>{firstName}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Last Name
                </Form.Label>
                <Col sm="10">
                  <Form.Label column>{lastName}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Sex
                </Form.Label>
                <Col sm="10">
                  <Form.Label column>{sex}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Height
                </Form.Label>
                <Col sm="10">
                  <Form.Label column>{height}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Weight
                </Form.Label>
                <Col sm="10">
                  <Form.Label column>{weight}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Blood type
                </Form.Label>
                <Col sm="10">
                  <Form.Label column>{bloodType}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Organ Donour
                </Form.Label>
                <Col sm="10">
                  <Form.Label column>{String(organDonour)}</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Allergies
                </Form.Label>
                <Col sm="10">
                  <Form.Label column>{allergies}</Form.Label>
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column>Emergency Contact</Form.Label>
                <Col>
                  <Form.Label column>Tash</Form.Label>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
