import React, { Component } from 'react';
import { FieldGroup, FormGroup, FormControl, Button, ControlLabel, HelpBlock } from 'react-bootstrap';

export default class AddStudent extends Component {
  render() {
    return (
      <form>
        <FieldGroup
          id="formControlsName"
          type="name"
          label="name"
          placeholder="Enter name"
        />
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>

        <Button type="submit">
        Submit
        </Button>
      </form>
    );
  }
}
