import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h3>Margaret Hamilton Interplanetary Academy</h3>
      <NavLink to="/campuses" >
        <span className="nav-link">Home</span>
      </NavLink>
      <NavLink to="/students" >
        <span className="nav-link">Students</span>
      </NavLink>
    </nav>
  );
}
