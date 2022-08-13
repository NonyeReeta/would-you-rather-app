import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import LoadingBar from "react-redux-loading-bar";

class Login extends Component {
  render() {
    const { users, dispatch } = this.props;
    function handleLogin(e) {
      const authedUser = e.target.innerText;
      dispatch(setAuthedUser(authedUser));
    }
    return (
      <div className="login">
        <LoadingBar />

        <h1>
          <em>Would You Rather?</em>
        </h1>

        <div className="login-content">
          <h2>Login as:</h2>

          <ul className="users">
            {users.map((user) => (
              <li key={user} onClick={handleLogin}>
                <Link to="/" key={user}>
                  {user}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);
