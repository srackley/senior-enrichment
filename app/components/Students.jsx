import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Table } from 'react-bootstrap';
import React, { Component } from 'react';
import AddStudent from './AddStudent';
import { deleteStudent } from '../reducers';

export function Students(props) {
  const { students, deleteStudent } = props;
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
              <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
              <td>{student.email}</td>
              <td><Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link></td>
              <td><Link to="/students/" onClick={() => deleteStudent(student.id)}>
                <i className="fa fa-trash-o" />
                  </Link>
              </td>
            </tr>
            ))}
        </tbody>
      </Table>
      <AddStudent />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students,
  };
}

const mapDispatchToProps = { deleteStudent };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Students));
