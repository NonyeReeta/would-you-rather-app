import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
class Header extends Component {
  state = {
    active: true,
  };
  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
  render() {
    const { userName, dispatch } = this.props;
    function handleLogout(e) {
      e.preventDefault();
      dispatch(setAuthedUser(null));
    }
    return (
      <div className="header">
        <div className="welcome">
          <h1>Welcome!</h1>

          <h3> {userName}</h3>
        </div>

        <ul className="nav-link-container">
          <Link to="/" exact style={{ textDecoration: "none" }}>
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <li className="nav-link">New Poll</li>
          </Link>

          <Link to="/leaderboard" style={{ textDecoration: "none" }}>
            <li className="nav-link">Leaderboard</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li onClick={handleLogout} className="nav-link">
              Logout
            </li>
          </Link>
        </ul>
        <div className="navbar-container">
          <div
            className={this.state.active ? "navbar" : "navbar open"}
            onClick={this.toggleClass}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={
              this.state.active ? "nav-container hidden" : "nav-container"
            }
          >
            <ul className="side-bar">
              <Link to="/" exact style={{ textDecoration: "none" }}>
                <li className="nav-link">Home</li>
              </Link>
              <Link to="/add" style={{ textDecoration: "none" }}>
                <li className="nav-link">New Poll</li>
              </Link>

              <Link to="/leaderboard" style={{ textDecoration: "none" }}>
                <li className="nav-link">Leaderboard</li>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li onClick={handleLogout} className="nav-link">
                  Logout
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users }, { authedUser }) {
  return {
    userName: authedUser,
  };
}
export default connect(mapStateToProps)(Header);
