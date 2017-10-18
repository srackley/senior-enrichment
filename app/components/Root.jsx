import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Campuses from './Campuses';
import Header from './Navbar';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';
import NotFound from './NotFound';
import Students from './Students';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import Home from './Home';
import { fetchStudents, fetchCampuses } from '../reducers';
import { connect } from 'react-redux';


export class Root extends Component {
  componentDidMount() {
    const header = document.getElementsByTagName('header')[0];

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 109) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }

      const sections = Array.from(document.querySelectorAll('section'));
      const rects = sections.map(section => section.getBoundingClientRect());

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = rects[i];
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      }
    });

    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/students/:studentId" component={SingleStudent} />

          <Route exact path="/new-campus" component={AddCampus} />
          <Route exact path="/new-student" component={AddStudent} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { fetchCampuses, fetchStudents };

export default connect(mapStateToProps, mapDispatchToProps)(Root);
