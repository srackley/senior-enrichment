import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


export function Campuses(props) {
  return (
    <main>
      <div className="flex">
        {
        props.campuses.map(campus => (
          <div align="center">
            <NavLink to={`/campuses/${campus.id}`} activeClassName="active">
              <div className="media container">
                <img src={campus.image} alt={campus.name} />
                <div className="centered">{campus.name}</div>
              </div>
            </NavLink>
          </div>
        ))
      }
      </div>
    </main>
  );
}

/** Write your `connect` component below! * */

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(Campuses));
