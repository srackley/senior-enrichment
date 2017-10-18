import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export function SingleStudent(props) {
  const id = props.match.params.studentId;
  const student = props.students.filter(student => student.id == id)[0];

  return (
    <main>
      {
      (student)
      ?
        <div>
          <h1>Here you will view an individual student {student.name} </h1>
          <h2>{student.email}</h2>
          <h2>{student.campus.name}</h2>
        </div>
      : null
    }
    </main>
  );
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(SingleStudent));
