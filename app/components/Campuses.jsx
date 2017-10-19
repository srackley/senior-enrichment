import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AddCampus from './AddCampus';

export function Campuses(props) {
  return (
    <div>
      <div className="pageHeading">
        <h1>Campuses</h1>
      </div>
      <div className="container">
        {
        props.campuses.map(campus => (
          <div className="campus">
            <Link to={`/campuses/${campus.id}`} activeClassName="active">
              <img src={campus.image} />
              <div className="centered">{campus.name}</div>
            </Link>
          </div>
        ))
      }
      </div>
      <AddCampus />
    </div>
  );
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(Campuses));
