import React from "react";
import Form from "react-bootstrap/Form";

class HornForm extends React.Component {
  handleChange = (event) => {
    const selection = event.target.value;
    this.props.onSelect(selection);
  }

  render() {
    return (
      <Form>
        <Form.Select onChange={this.handleChange}>
          <option value="0">Any</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">A Lot</option>
        </Form.Select>
      </Form>
    );
  }
}

export default HornForm;
