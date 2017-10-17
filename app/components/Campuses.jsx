import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PageHeader, Image, Grid, Col } from 'react-bootstrap';

export function Campuses(props) {
  return (
    <main>
      <PageHeader>Campuses</PageHeader>
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
      <li>
        <NavLink to="/new-campus" >
          <span>Add a campus</span>
        </NavLink>
      </li>
    </main>
  );
}

function mapStateToProps(state) {
  return { campuses: state.campuses, students: state.students };
}

export default withRouter(connect(mapStateToProps)(Campuses));
