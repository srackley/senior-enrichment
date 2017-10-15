import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <sidebar>
      <div className="sidebar-header">
        <h1>Sidebar</h1>
        <ul>
          <li>
            <NavLink to="/new-campus" >
              <span>Add a campus</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </sidebar>
  );
}
