import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../reducers';
import store from '../store';

export class AddCampus extends Component {
  constructor() {
  super();
  this.state = {
    name: '',
    image: '',
  }
}

render(){
return (
    <main>
      <form onSubmit={
        event => {
        event.preventDefault();
        store.dispatch(postCampus({
          name: this.state.name,
          image: this.state.image }));
      }}>
        <div className="form-group">
          <label htmlFor="name">Add a Campus</label>
          <input value={this.props.newCampus}
          onChange={event => {
            this.setState({name: event.target.value})}} className="form-control" type="text" name="campusName" placeholder="Enter campus name" />
          <label htmlFor="name">Add an Image</label>
          <input value={this.props.newCampus}
          onChange={event => {
            this.setState({image: event.target.value});
          }} className="form-control" type="text" name="campusName" placeholder="Enter image url" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Add Campus</button>
        </div>
      </form>
    </main>
  );
}
}

function mapStateToProps(state, ownProps) {
  return { campuses: state.campuses };
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
