import React, { Component } from 'react';
import Register from './users/register';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <Link to="/">
            <button type="button" className="btn btn-default navbar-btn">Home</button>
            </Link>

            <Link to="/register">
              <button type="button" className="btn btn-default navbar-btn pull-right">Sign in</button>
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;
