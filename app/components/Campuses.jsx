import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export function Campuses(props) {
  const { students } = props;
  console.log(props);
  return (
    <main>
      {
        props.campuses.map(campus => (
          <span>
            <NavLink to={`/campuses/${campus.id}`} activeClassName="active">
              <img src={campus.image} alt={campus.name} />
              <span>{campus.name}</span>
            </NavLink>
          </span>
        ))
      }
    </main>
  );
}

/** Write your `connect` component below! * */

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(Campuses));
