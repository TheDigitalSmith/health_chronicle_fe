import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
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

  handleEditUserInfo = async () => {
    try {
      const accessToken = localStorage.getItem("x_access_token");
      const token = "Bearer " + accessToken;
      const submitURL = await fetch("http://localhost:9121/api/users/me", {
        method: "PUT",
        body: JSON.stringify({ ...this.state }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const response = await submitURL.json();
      console.log("response", response);
      this.setState({ ...response });
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      firstName,
      lastName,
      bloodType,
      height,
      weight,
      allergies,
      sex,
      organDonour,
      emergencyContacts,
      handleChange,
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
                  <Form.Control
                    type="text"
                    placeholder="Normal text"
                    value={this.state.lastName}
                    onChange={(e) =>
                      this.setState({ lastName: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Sex
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="Normal text"
                    value={this.state.sex}
                    onChange={(e) => this.setState({ sex: e.target.value })}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Height
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="Normal text"
                    value={this.state.height}
                    onChange={(e) => this.setState({ height: e.target.value })}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Weight
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="Normal text"
                    value={this.state.weight}
                    onChange={(e) => this.setState({ weight: e.target.value })}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Blood type
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="Normal text"
                    value={this.state.bloodType}
                    onChange={(e) =>
                      this.setState({ bloodType: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="6">
                  Organ Donour
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    as="select"
                    onClick={(e) =>
                      this.setState({ organDonour: e.target.value })
                    }
                  >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </Form.Control>
                  {/* <Form.Control
                    type="text"
                    placeholder="Normal text"
                    value={this.state.organDonour}
                    onChange={(e) =>
                      this.setState({ organDonour: e.target.value })
                    }
                  /> */}
                  {/* <Form.Label column>{String(organDonour)}</Form.Label> */}
                </Col>
              </Form.Group>
            </Form>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleEditUserInfo}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <Row>
          <Col lg={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg"
              />
            </Card>
          </Col>
          <Col lg={5}>
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
                <Form.Label column>Emergency Contacts</Form.Label>
                <Button variant="secondary" onClick={this.closeModal}>
                  +
                </Button>
              </Form.Group>
              <Row>
                <Accordion>
                  {emergencyContacts.map((c) => (
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey={c._id}
                        >
                          {c.firstName + " " + c.lastName}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={c._id}>
                        <Card.Body>
                          <footer>email: {c.email}</footer>
                          <footer>mobile: {c.mobile}</footer>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
