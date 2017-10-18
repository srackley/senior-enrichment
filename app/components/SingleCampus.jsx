import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export function SingleCampus(props) {
  return (
    <main>
      <h1>Here you will view an individual campus {props.match.params.campusId} </h1>
    </main>
  );
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(SingleCampus));
