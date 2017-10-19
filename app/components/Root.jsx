import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Campuses from './Campuses';
import Sidebar from './Sidebar';
import SingleCampus from './SingleCampus';
import NotFound from './NotFound';
import Students from './Students';
import SingleStudent from './SingleStudent';
import Home from './Home';
import { fetchStudents, fetchCampuses } from '../reducers';
import { connect } from 'react-redux';


export class Root extends Component {
  componentDidMount() {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  render() {
    return (
      <div>
        <Sidebar />
        <main>
          <Switch>
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { fetchCampuses, fetchStudents };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
