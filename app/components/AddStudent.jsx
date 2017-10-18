import React, { Component } from 'react';
import { FieldGroup, FormGroup, FormControl, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { writeStudentName, postStudent } from '../store';

export class AddStudent extends Component {
  render() {
    return (
      <form>
        <FieldGroup
          id="name"
          type="name"
          label="Name"
          placeholder="Enter name"
        />
        <FieldGroup
          id="email"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />

        <FormGroup controlId="select">
          <ControlLabel>Campus</ControlLabel>
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


function mapStateToProps(state, ownProps) {
  return { newStudent: state.newStudent };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleChange(event) {
      const action = writeStudentName(event.target.value);
      dispatch(action);
    },
    handleSubmit(event) {
      event.preventDefault();
      const name = event.target.name.value;
      dispatch(postStudent({ name }, ownProps.history));
      dispatch(writeStudentName(''));
    },

  };
}

const newStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);
export default newStudentContainer;
