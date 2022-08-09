import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="nav">
          <ul>
            <li>
              {/* <Link to="/" exact activeClassName="active"> */}
              Home
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to="/new" activeClassName="active"> */}
              New Poll
              {/* </Link> */}
            </li>
            <li>Leaderboard</li>
            <li>Logout</li>
          </ul>
        </nav>
        <div className="app-name">
          <h1>
            <em>Would You Rather?</em>
          </h1>
        </div>
        <div className="username">
          <h3> {this.props.authedUser}</h3>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(Header);
