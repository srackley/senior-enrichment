import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { postCampus } from '../reducers';

export class AddCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
    };
  }

  render() {
    return (
      <div className="paddedContainer">
        <form onSubmit={
        (event) => {
        event.preventDefault();
        this.props.postCampus({
          name: this.state.name,
          image: this.state.image,
});
      }}
        >
          <div className="form-group paddedContainer">
            <div>
              <label htmlFor="name">Add a Campus</label>
              <input
                value={this.props.newCampus}
                onChange={(event) => {
            this.setState({ name: event.target.value });
}}
                className="form-control"
                type="text"
                name="campusName"
                placeholder="Enter campus name"
              />
            </div>
            <div>
              <label htmlFor="name">Add an Image</label>
              <input
                value={this.props.newCampus}
                onChange={(event) => {
            this.setState({ image: event.target.value });
          }}
                className="form-control"
                type="text"
                name="campusName"
                placeholder="Enter image url"
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">Create New Campus</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { campuses: state.campuses };
}

const mapDispatchToProps = { postCampus };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCampus));
