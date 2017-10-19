import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Table } from 'react-bootstrap';
import React, { Component } from 'react';
import AddStudent from './AddStudent';
import { deleteStudent } from '../reducers';

export class Students extends Component {
  render() {
    const { students, deleteStudent } = this.props;
    return (
      <div>
        <h1>Students</h1>
        <Table responsive hover fill>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Campus</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            { students.map(student => (
              <tr>
                <td>{student.id}</td>
                <td><NavLink to={`/students/${student.id}`}>{student.name}</NavLink></td>
                <td>{student.email}</td>
                <td><NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink></td>
                <td><NavLink to="/students/" onClick={() => deleteStudent(student.id)}>X</NavLink></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <AddStudent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students,
  };
}

const mapDispatchToProps = { deleteStudent };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Students));
