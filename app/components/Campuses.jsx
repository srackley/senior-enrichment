import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Image, Grid, Col } from 'react-bootstrap';

export function Campuses(props) {
  return (
    <main>
      <NavLink to="/new-campus" id="plus">
        <i className="glyphicon glyphicon-plus" />
      </NavLink>
      <div className="pageHeading">
        <h1>Campuses</h1>
      </div>
      <Grid>
        {
        props.campuses.map(campus => (
          <div className="campus">
            <NavLink to={`/campuses/${campus.id}`} activeClassName="active">
              <Col lg={6}>
                <Image src={campus.image} circle responsive />
                <div className="centered">{campus.name}</div>
              </Col>
            </NavLink>
          </div>
        ))
      }
      </Grid>
    </main>
  );
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(Campuses));
