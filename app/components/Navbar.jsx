import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
  return (
    <Navbar fixedTop fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <h3>Margaret Hamilton</h3>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav bsStyle="pills" pullRight>
          <LinkContainer to="/">
            <NavItem eventKey={1} href="/">
              <i className="fa fa-home" /> Home
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/campuses">
            <NavItem eventKey={1} href="/campuses">
              <i className="fa fa-university" /> Campuses
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/students" >
            <NavItem>
              <i className="fa fa-graduation-cap" /> Students
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
