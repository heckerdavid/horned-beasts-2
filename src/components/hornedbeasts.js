import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



export default class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: 0,
      newSelectedBeast: null,
    };
  }

  updateSelected = () => this.props.updateSelected(this.state.newSelectedBeast);

  handleClick = () => {
    this.props.updateSelected(this.props.data);
    this.props.showModal();
  };

  handleVote = () => this.setState({ favorites: this.state.favorites + 1 });

  render() {
    return (
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={this.props.data.image_url}
          onClick={this.handleClick}
        />
        <Card.Body>
          <Card.Title>{this.props.data.title}</Card.Title>
          <Card.Text>{this.props.data.description}</Card.Text>
          <Button
            onClick={this.handleVote}
            variant="primary"
          >
            &hearts; {this.state.favorites}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
