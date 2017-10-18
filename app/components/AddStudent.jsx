import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../reducers';
import store from '../store';

export class AddStudent extends Component {
  constructor() {
  super();
  this.state = {
    name: '',
    email: '',
    campus: '',
  }
}

render(){
return (
    <main>
      <form onSubmit={
        event => {
        event.preventDefault();
        store.dispatch(postStudent({
          name: this.state.name,
          email: this.state.email,
          campus: this.state.campus
         }));
      }}>
        <div className="form-group">
          <label htmlFor="name">Student's Name</label>
          <input value={this.props.newStudent}
          onChange={event => {
            this.setState({name: event.target.value})}} className="form-control" type="text" name="campusName" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input value={this.props.newStudent}
          onChange={event => {
            this.setState({email: event.target.value});
          }} className="form-control" type="text" name="campusName" placeholder="Enter email" />
        </div>
        <div className="form-group">
        <label htmlFor="campus">Campus</label>
        <select onChange={event => {
          this.setState({campus: event.target.value})
        }} >
          {this.props.campuses.map(campus =>
            <option>{campus.name}</option>
          )}
        </select>
      </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Add Student</button>
        </div>
      </form>
    </main>
  );
}
}

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses,
    students: state.students
 };
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
