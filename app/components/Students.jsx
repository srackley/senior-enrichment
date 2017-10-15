import React, { Component } from 'react';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import store from '../store';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


export class Students extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { students } = this.state;

    return (
      <main>
        <ul className="media-list">
          { students.map(student =>
            <li key={student.id}>
            <NavLink to={`/students/${student.id}`} activeClassName="active">
                <div className="centered">{student.name}</div>
            </NavLink>
          </li>
            ) }
        </ul>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(Students));
