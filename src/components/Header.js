import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
class Header extends Component {
  render() {
    const { userName, dispatch } = this.props;
    function handleLogout() {
      dispatch(setAuthedUser(""));
    }
    return (
      <div className="header">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" exact>
                Home
              </Link>
            </li>
            <li>
              <Link to="/add">New Poll</Link>
            </li>
            <Link to="/leaderboard">
              <li>Leaderboard</li>
            </Link>
            <Link to="/">
              <li onClick={handleLogout}>Logout</li>
            </Link>
          </ul>
        </nav>
        <div className="app-name">
          <h1>
            <em>Would You Rather?</em>
          </h1>
        </div>
        <div className="username">
          <h3> {userName}</h3>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users }, { authedUser }) {
  return {
    userName: users[authedUser].name,
  };
}
export default connect(mapStateToProps)(Header);
