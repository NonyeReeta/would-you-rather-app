import React, { Component } from "react";
import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Header from "./Header";
import Content from "./Content";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser, loading } = this.props;

    // if (loggedIn === false) {
    //   return <Navigate to="/Login" />;
    // }
    return (
      <div className="container">
        <LoadingBar />
        <Header authedUser={authedUser} />
        {this.props.loading === true ? null : <Content />}
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
