import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-item">
          <NavLink to="/" className="link">Home</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/campuses" className="link">Campuses</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/students" className="link">Students</NavLink>
        </div>
      </nav>
    </header>
  );
}
