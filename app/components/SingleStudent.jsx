import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchStudent } from '../reducers';

export class SingleStudent extends Component {
  componentDidMount() {
    const id = this.props.match.params.studentId;
    this.props.fetchStudent(id);
  }

  render() {
    const student = this.props.oneStudent;

    return (
      <div>
        {
      (student.name)
      ?
        <div>
          <h1>Here you will view an individual student {student.name} </h1>
          <h2>{student.email}</h2>
          <NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink>
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
    oneStudent: state.oneStudent,
  };
}

const mapDispatchToProps = { fetchStudent };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent));
