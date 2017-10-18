import React from 'react';
import { connect } from 'react-redux';
import { writeCampusName, postCampus } from '../store';


export function AddCampus(props) {
  return (
    <main>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Add a Campus</label>
          <input value={props.newCampus} onChange={props.handleChange} className="form-control" type="text" name="campusName" placeholder="Enter campus name" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Add Campus</button>
        </div>
      </form>
    </main>
  );
}

function mapStateToProps(state, ownProps) {
  return { newCampus: state.newCampus };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleChange(event) {
      dispatch(writeCampusName(event.target.value));
    },
    // handleSubmit(event) {
    //   event.preventDefault();
    //   const name = event.target.campusName.value;
    //   dispatch(postCampus({ name }, ownProps.history));
    //   dispatch(writeCampusName(''));
    // },

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
