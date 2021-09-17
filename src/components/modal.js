import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

export default class BeastModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "35rem" }}>
            <Card.Img variant="top" src={this.props.data.image_url} />
            <Card.Body>
              <Card.Title>{this.props.data.title}</Card.Title>
              <Card.Text>{this.props.data.description}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    );
  }
}
