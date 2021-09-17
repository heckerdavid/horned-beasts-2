import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import HornedBeasts from "./hornedbeasts";

export default class Main extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row md={3} lg={4} as="div">
          {this.props.beastData.map((horn, idx) => (
            <HornedBeasts
              data={horn}
              key={idx}
              updateSelected={this.props.updateSelected}
              showModal={this.props.showModal}
            />
          ))}
        </Row>
      </Container>
    );
  }
}
