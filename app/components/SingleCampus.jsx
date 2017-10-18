import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export function SingleCampus(props) {
  const selectedCampus = props.campuses.filter(campus => campus.id === Number(props.match.params.campusId));
  return (
    <main />
  );
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(SingleCampus));
