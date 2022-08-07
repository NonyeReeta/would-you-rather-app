import React, { Component } from "react";

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
          <h3> User Name</h3>
        </div>
      </div>
    );
  }
}

export default Header;
