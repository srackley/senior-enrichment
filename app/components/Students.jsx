import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Table, PageHeader } from 'react-bootstrap';
import React, { Component } from 'react';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import store from '../store';


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
        <PageHeader>Students</PageHeader>
        <Table responsive hover fill>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Campus</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            { students.map(student => (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.campus.name}</td>
                <td>
                  <NavLink to={`/students/${student.id}`}>
                    <i className="fa fa-pencil-square-o" />
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students,
  };
}

export default withRouter(connect(mapStateToProps)(Students));
