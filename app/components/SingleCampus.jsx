import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';
import { fetchCampus, updateCampus, deleteCampus, deleteStudent } from '../reducers';

export class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.fetchCampus(id);
  }

  render() {
    const {
      campus, updateçCampus, deleteStudent, deleteCampus,
    } = this.props;
    const { students } = campus;
    return (
      <div className="paddedContainer">
        { (campus.name) ?
          <div className="paddedContainer">
            <img src={campus.image} />
            <form
              onSubmit={
            (event) => {
            event.preventDefault();
            updateCampus(campus.id, { name: this.state.name });
          }}
              className="paddedContainer"
            >
              <div className="form-group">
                <input

                  value={this.props.name}
                  onChange={(event) => {
                this.setState({ name: event.target.value });
      }}
                  className="colorInput"
                  type="text"
                  name="campusName"
                  placeholder={campus.name}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-default">Change Campus Name</button>

                <button type="delete" className="deleteButton" onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
              </div>
            </form>


            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Campus</th>
                  <th>Edit</th>
                  <th><i className="fa fa-trash-o" /></th>
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
                      <button className="x" onClick={() => deleteStudent(student.id)}>X
                      </button>
                    </td>
                  </tr>
            ))
          : null
        }
              </tbody>
            </table>
          </div>
        : null
    }

        <AddStudent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students,
    campus: state.oneCampus,
  };
}

const mapDispatchToProps = {
  fetchCampus, updateCampus, deleteCampus, deleteStudent,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus));
