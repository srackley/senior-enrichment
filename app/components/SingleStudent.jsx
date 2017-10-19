import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchStudent, deleteStudent, updateStudent } from '../reducers';

export class SingleStudent extends Component {
  componentDidMount() {
    const id = this.props.match.params.studentId;
    this.props.fetchStudent(id);
  }
  render() {
    const { student, deleteStudent, updateStudent } = this.props;

    return (
      <div>
        {
      (student.name)
      ?
        <div>
          <h1>Here you will view an individual student {student.name} </h1>
          <h2>{student.email}</h2>
          <NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink>
          <div>
            <button onClick={() => updateStudent(student.id)}>Save</button>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </div>
        </div>
      : null
    }
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


const mapDispatchToProps = { fetchStudent, deleteStudent, updateStudent };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent));
