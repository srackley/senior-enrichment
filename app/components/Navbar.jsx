import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';

export function Header(props) {
  return (
    <header>
      <Menu>
        <NavLink className="navbar-item" to="/">Home</NavLink>
        <NavLink className="navbar-item" to="/students">Students</NavLink>
        <NavLink className="navbar-item" to="/campuses">Campuses</NavLink>
        { props.campuses.map(campus =>
                  (<NavLink className="navbar-item " to={`/campuses/${campus.id}`}>
                    {campus.name}
                   </NavLink>))}
        <a
          className="bd-tw-button button"
          data-social-network="Twitter"
          data-social-action="tweet"
          data-social-target="https://bulma.io"
          target="_blank"
          href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"
        >
          <span className="icon">
            <i className="fa fa-twitter" />
          </span>
          <span>
          Tweet
          </span>
        </a>
        <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.6.0/bulma-0.6.0.zip">
          <span className="icon">
            <i className="fa fa-rocket" />
          </span>
          <span>Contact</span>
        </a>
      </Menu>
    </header>

  );
}

const mapStateToProps = state => ({
  campuses: state.campuses,
});

export default connect(mapStateToProps)(Header);
