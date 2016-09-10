import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/index';
import { Link } from 'react-router';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    let user = {};
    user[e.target.name] = e.target.value;
    this.setState(user);
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.createUser(this.state).then(res => {
      console.log(`Response: ${res}`);
    }).catch(err => {
      console.log(`Error: ${err}`);
    });
  }

  render() {
    return (
      <div className="container">

        <form className="form-group" onSubmit={this.onFormSubmit.bind(this)}>
          <label>Username: </label>
          <input type="text" className="form-control" value={this.state.email} onChange={this.onInputChange} name="email"/>

          <label>Password: </label>
          <input type="password" className="form-control" value={this.state.password} onChange={this.onInputChange} name="password" /><br />

          <div className="text-center">
            <button className="btn btn-primary" type="submit">Register</button>
          </div>
        </form>
      </div>
    )
  }
}
//
// function mapStateToProps(state) {
//   console.log(state);
//   return {user: state.user}
// }

export default connect(null, {createUser})(Register);
