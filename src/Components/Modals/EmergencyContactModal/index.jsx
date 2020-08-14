import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EmergencyContactModal extends Component {
  state = {
    emergencyFirstName: "",
    emergencyLastName: "",
    emergencyEmail: "",
    emergencyMobileNo: "",
    emergencyCountry: "",
  };
  render() {
    return (
      <Modal
        show={this.props.controlEmergencyModal}
        onHide={this.props.controlEmergencyModal}
        backdrop="static"
        keyboards={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Emergency Contact</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="6">
              Firstname
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Normal text"
                value={this.state.emergencyFirstName}
                onChange={(e) =>
                  this.setState({ emergencyFirstName: e.target.value })
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
                value={this.state.emergencyLastName}
                onChange={(e) =>
                  this.setState({ emergencyLastName: e.target.value })
                }
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="6">
              Email
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Normal text"
                value={this.state.emergencyEmail}
                onChange={(e) =>
                  this.setState({ emergencyEmail: e.target.value })
                }
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="6">
              Mobile
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Normal text"
                value={this.state.emergencyMobileNo}
                onChange={(e) =>
                  this.setState({ emergencyMobileNo: e.target.value })
                }
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="6">
              Country
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Normal text"
                value={this.state.emergencyCountry}
                onChange={(e) =>
                  this.setState({ emergencyCountry: e.target.value })
                }
              />
            </Col>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => this.props.handleEmergencyContact(this.state)}
          >
            Add Emergency Contact
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EmergencyContactModal;
