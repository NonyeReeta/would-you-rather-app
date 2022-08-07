import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleInitialData, getAuthedUser } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";

class Login extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { users } = this.props;
    return (
      <div className="login">
        <LoadingBar />

        <h1>
          <em>Would You Rather?</em>
        </h1>

        <div className="login-content">
          <h4>Login as:</h4>

          <ul className="users">
            {users.map((user) => (
              <Link to="/" key={user}>
                <li key={user} onClick={() => getAuthedUser(user)}>
                  {user}
                </li>
              </Link>
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
