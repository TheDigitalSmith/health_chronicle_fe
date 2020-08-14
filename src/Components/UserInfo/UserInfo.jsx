import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

import UserModal from "../Modals/UserModal";
import EmergencyContactModal from "../Modals/EmergencyContactModal";

export default class UserInfo extends Component {
  state = {
    showModal: false,
    showEmergencyModal: false,
  };
  openModal = () => {
    console.log("copying props");
    this.setState({ showModal: true });
  };
  closeModal = async () => {
    this.setState({ showModal: false });
  };

  controlEmergencyModal = () => {
    this.setState({
      showEmergencyModal: !this.state.showEmergencyModal,
    });
  };

  handleEditUserInfo = async (updatedUser) => {
    try {
      const accessToken = localStorage.getItem("x_access_token");
      const token = "Bearer " + accessToken;
      const submitURL = await fetch("http://localhost:9121/api/users/me", {
        method: "PUT",
        body: JSON.stringify({ ...updatedUser }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (submitURL.ok) {
        const response = await submitURL.json();
        console.log("response", response);
        this.setState({ showModal: false });
        this.props.handleChange(response);
        console.log(this.state);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleEmergencyContact = async (contact) => {
    // const
    try {
      const emergencyContacts = [
        ...this.props.emergencyContacts,
        {
          firstName: contact.emergencyFirstName,
          lastName: contact.emergencyLastName,
          email: contact.emergencyEmail,
          mobile: contact.emergencyMobileNo,
          country: contact.emergencyCountry,
        },
      ];
      const accessToken = localStorage.getItem("x_access_token");
      const token = "Bearer " + accessToken;
      const submitURL = await fetch("http://localhost:9121/api/users/me", {
        method: "PUT",
        body: JSON.stringify({ emergencyContacts: emergencyContacts }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (submitURL.ok) {
        const response = await submitURL.json();
        console.log("response", response);
        this.setState({ showEmergencyModal: false });
        this.props.handleChange(response);
        console.log(this.state);
        return;
      }
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
    } = this.props;

    const { showModal, showEmergencyModal } = this.state;
    return (
      <Container>
        <h2>User Profile</h2>
        {showModal && (
          <UserModal
            openModal={this.openModal}
            closeModal={this.closeModal}
            firstName={firstName}
            lastName={lastName}
            bloodType={bloodType}
            height={height}
            weight={weight}
            allergies={allergies}
            sex={sex}
            organDonour={organDonour}
            handleEditUserInfo={this.handleEditUserInfo}
          />
        )}
        {showEmergencyModal && (
          <EmergencyContactModal
            controlEmergencyModal={this.controlEmergencyModal}
            handleEmergencyContact={this.handleEmergencyContact}
          />
        )}
        <Row>
          <Col lg={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg"
              />
              <Button variant="primary" onClick={this.openModal}>
                Edit User
              </Button>
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
                <Button
                  variant="secondary"
                  onClick={this.controlEmergencyModal}
                >
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
