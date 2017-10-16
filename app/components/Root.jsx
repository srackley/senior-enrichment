import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Campuses from './Campuses';
import Navbar from './Navbar';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';
import NotFound from './NotFound';
import Students from './Students';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import { fetchStudents, fetchCampuses } from '../reducers';
import store from '../store';

export default class Root extends Component {
  componentDidMount() {
    const studentsThunk = fetchStudents();
    const campusesThunk = fetchCampuses();
    store.dispatch(studentsThunk);
    store.dispatch(campusesThunk);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Campuses} />
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/new-campus" component={AddCampus} />
          <Route exact path="/new-student" component={AddStudent} />
          <Route exact path="campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students/:studentId" component={SingleStudent} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
