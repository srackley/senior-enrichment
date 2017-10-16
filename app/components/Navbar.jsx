import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h3>Margaret Hamilton Interplanetary Academy</h3>
      <h4 className="nav-link menu-item">
        <NavLink to="/campuses" style={{ textDecoration: 'none' }}>
          <i className="fa fa-home" /> Home
        </NavLink>
      </h4>
      <h4 className="nav-link menu-item">
        <NavLink style={{ textDecoration: 'none' }}to="/students" >
          <i className="fa fa-users" />
          Students
        </NavLink>
      </h4>

    </nav>
  );
}
