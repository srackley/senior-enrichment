import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postStudent } from '../reducers';
import store from '../store';

export class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      campusId: '',
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="paddedContainer">
        <form onSubmit={
        (event) => {
        event.preventDefault();
        store.dispatch(postStudent({
          name: this.state.name,
          email: this.state.email,
          campusId: Number(this.state.campusId),
         }));
      }}
        >
          <div className="form-group">
            <label htmlFor="name">Student's Name</label>
            <input
              value={this.props.newStudent}
              onChange={(event) => {
            this.setState({ name: event.target.value });
}}
              className="form-control"
              type="text"
              name="campusName"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={this.props.newStudent}
              onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
              className="form-control"
              type="text"
              name="campusName"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="campusId">Campus</label>
            <select onChange={(event) => {
          this.setState({ campusId: event.target.value });
        }}
            >
              {this.props.campuses.map(campus =>
                <option value={campus.id}>{campus.name}</option>)}
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">Add Student</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses,
    students: state.students,
  };
}

const mapDispatchToProps = null;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudent));
