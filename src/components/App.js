import React, { Component } from "react";
import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Header from "./Header";
import Content from "./Content";
import Login from "./Login";

class App extends Component {
  state = {
    loggedin: false,
  };
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser, loading } = this.props;
    if (!authedUser) {
      return <Login />;
    }
    return (
      <div className="container">
        <LoadingBar />

        {loading === true ? null : <Header authedUser={authedUser} />}
        {loading === true ? null : <Content />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
