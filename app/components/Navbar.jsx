import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h3>Margaret Hamilton Interplanetary Academy</h3>
      <ul>
        <li>
          <NavLink to="/campuses" >
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" >
            <span>Students</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
