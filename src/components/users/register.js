import React, { Component } from 'react';
import { Link } from 'react-router';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' }
  }

  render() {
    return (
      <div className="container">
        <form className="form-group">
          <label>Username: </label>
          <input type="text" className="form-control" />

          <label>Password: </label>
          <input type="password" className="form-control" /><br />

          <div className="text-center">
            <button className="btn btn-primary" type="submit">Register</button>
          </div>
        </form>

        <p className="lead">State: {this.state.email}</p>
      </div>

    )
  }
}

export default Register;
