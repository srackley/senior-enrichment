import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { fetchCampus, fetchStudentsFromCampus } from '../reducers';

export class SingleCampus extends Component {
  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.fetchCampus(id);
    this.props.fetchStudentsFromCampus(id);
  }

  render() {
    const campus = this.props.oneCampus;
    const students = this.props.studentsFromCampus;
    return (
      <div>
        { (campus.name && students.length) ?
          <div>
            <h1>{campus.name}</h1>
            <img src={campus.image} />
            <Table responsive hover fill>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Campus</th>
                  <th>Edit</th>
                  <th>Remove</th>
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
                    <td>
                      <NavLink to={`/students/${student.id}`}>
                        <i className="fa fa-trash-o" />
                      </NavLink>
                    </td>
                  </tr>
            ))}
              </tbody>
            </Table>
          </div>
        : null
    }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students,
    oneCampus: state.oneCampus,
    studentsFromCampus: state.studentsFromCampus,
  };
}

const mapDispatchToProps = { fetchCampus, fetchStudentsFromCampus };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus));
