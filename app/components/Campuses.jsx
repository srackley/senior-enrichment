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
          <div className="campus">
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
      <li>
        <NavLink to="/new-campus" >
          <span>Add a campus</span>
        </NavLink>
      </li>
    </main>
  );
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(Campuses));
