import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import App from "./App";

class Login extends Component {
  render() {
    const { users, dispatch } = this.props;
    function handleLogin(e) {
      const authedUser = e.target.innerText;
      dispatch(setAuthedUser(authedUser));
      return <App />;
    }
    return (
      <div className="login-container">
        <div className="login">
          <div className="title-container">
            <div class="title">
              <span style={{ "--i": 1 }}>W</span>
              <span style={{ "--i": 2 }}>o</span>
              <span style={{ "--i": 3 }}>u</span>
              <span style={{ "--i": 4 }}>l</span>
              <span style={{ "--i": 5 }}>d</span>
              <span> </span>
              <span style={{ "--i": 6 }}>Y</span>
              <span style={{ "--i": 7 }}>o</span>
              <span style={{ "--i": 8 }}>u</span>
              <span> </span>
              <span style={{ "--i": 9 }}>R</span>
              <span style={{ "--i": 10 }}>a</span>
              <span style={{ "--i": 11 }}>t</span>
              <span style={{ "--i": 12 }}>h</span>
              <span style={{ "--i": 13 }}>e</span>
              <span style={{ "--i": 14 }}>r</span>
              <span style={{ "--i": 15 }}>.</span>
            </div>
          </div>
          <div className="login-content">
            <p>First question, Would you rather log in as:</p>

            <ul className="users">
              {users.map((user) => (
                <li key={user} onClick={handleLogin}>
                  {user}
                </li>
              ))}
            </ul>
          </div>
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
