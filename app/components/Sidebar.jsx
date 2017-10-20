import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';

export function Sidebar(props) {
  return (
    <sidebar>
      <Menu>
        <NavLink className="navbar-item" to="/">Home</NavLink>
        <NavLink className="navbar-item" to="/students">Students</NavLink>
        <NavLink className="navbar-item" to="/campuses">Campuses</NavLink>
        <div>
          {
          props.campuses.map(campus =>
          (
            <NavLink className="navbar-item" to={`/campuses/${campus.id}`}>
              {campus.name}
            </NavLink>
          ))
        }
        </div>
        <hr />
        <a
          className="bd-tw-button button"
          data-social-network="Twitter"
          data-social-action="tweet"
          data-social-target="https://bulma.io"
          target="_blank"
          href="https://twitter.com/intent/tweet?text=MARGARET HAMILTON INTERPLANETARY ACADEMY: An interstellar schooling experience&hashtags"
        >
          <span className="icon">
            <i className="fa fa-twitter" />
          </span>
          <span>
          Tweet
          </span>
        </a>
        <a className="button is-primary" href="#">
          <span className="icon">
            <i className="fa fa-rocket" />
          </span>
          <span>Contact</span>
        </a>
      </Menu>
    </sidebar>

  );
}

const mapStateToProps = state => ({
  campuses: state.campuses,
});

export default withRouter(connect(mapStateToProps)(Sidebar));
