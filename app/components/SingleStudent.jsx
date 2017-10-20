import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchStudent, updateStudent } from '../reducers';
import store from '../store';

export class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      campusId: '',
    };
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.studentId);
  }
  render() {
    const { student, updateStudent } = this.props;

    return (
      <div>
        <form onSubmit={
      (event) => {
      event.preventDefault();
      updateStudent(this.props.match.params.studentId, {
        name: this.state.name,
        email: this.state.email,
        campusId: Number(this.state.campusId),
        id: Number(this.props.match.params.studentId),
       });
       console.log(this.state);
    }}
        >
          <div className="form-group">
            <label htmlFor="name">Student's Name</label>
            <input
              value={this.props.name}
              onChange={(event) => {
          this.setState({ name: event.target.value });
}}
              className="form-control"
              type="text"
              name="campusName"
              placeholder={student.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={this.props.email}
              onChange={(event) => {
          this.setState({ email: event.target.value });
        }}
              className="form-control"
              type="text"
              name="campusName"
              placeholder={student.email}
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
            <button type="submit" className="btn btn-default">Edit Student</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students,
    student: state.oneStudent,
  };
}


const mapDispatchToProps = { fetchStudent, updateStudent };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent));
