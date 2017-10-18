import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export function SingleStudent(props) {
  const id = props.match.params.studentId;
  return (
    <main>
      <h1>Here you will view an individual student {id} </h1>
    </main>
  );
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(SingleStudent));
