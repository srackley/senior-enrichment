import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
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
}

export default Sidebar;
