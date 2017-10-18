import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function SingleCampus(props) {
  const campusId = Number(props.match.params.campusId);
  const campus = props.campuses.filter(campus => campus.id === campusId)[0];
  const students = props.students.filter(student => student.campusId === campusId);
  return (
    <main>
      { (campus && students) ?
        <main>
          <h1>{campus.name}</h1>
          <img src={campus.image} />
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

        : null

    }
    </main>
  );
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(SingleCampus));
