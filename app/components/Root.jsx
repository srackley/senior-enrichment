import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Campuses from './Campuses';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';


export default function Main() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Main>
        <Switch>
          <Route path="/campuses" component={Campuses} />
          <Route path="/new-campus" component={AddCampus} />
          <Route path="campuses/:campusid" component={SingleCampus} />
        </Switch>
      </Main>
    </div>
  );
}
