import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchCampus } from '../reducers';

export class SingleCampus extends Component {
  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.fetchCampus(id);
  }

  render() {
    const campus = this.props.oneCampus;
    const students = campus.students;
    return (
      <div>
        { (campus.name) ?
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
                { (students.length) ? students.map(student => (
                  <tr>
                    <td>{student.id}</td>
                    <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                    <td>{student.email}</td>
                    <td>{student.campus.name}</td>
                    <td>
                      <Link to={`/students/${student.id}`}>
                        <i className="fa fa-pencil-square-o" />
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => deleteStudent(student.id)}>             <i className="fa fa-trash-o" /> Delete
                      </button>
                    </td>
                  </tr>
            ))
          : null
        }
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

const mapDispatchToProps = { fetchCampus };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus));
