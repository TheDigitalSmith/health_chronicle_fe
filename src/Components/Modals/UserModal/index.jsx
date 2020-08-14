import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class UserModal extends Component {
  state = {
    firstname: "",
    lastName: "",
    sex: "",
    height: "",
    weight: "",
    bloodType: "",
    organDonour: "",
  };
  render() {
    return (
      <Modal
        show={this.props.openModal}
        onHide={this.props.closeModal}
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
                onChange={(e) => this.setState({ firstName: e.target.value })}
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
                onChange={(e) => this.setState({ lastName: e.target.value })}
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
                onChange={(e) => this.setState({ bloodType: e.target.value })}
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
                onClick={(e) => this.setState({ organDonour: e.target.value })}
              >
                <option value={true}>True</option>
                <option value={false}>False</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => this.props.handleEditUserInfo(this.state)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  componentDidMount() {
    this.setState({ ...this.props });
  }
}

export default UserModal;
