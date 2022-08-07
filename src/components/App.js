import React, { Component } from "react";
import { connect } from "react-redux";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Header from "./Header";
import Content from "./Content";
class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData());
  // }
  render() {
    return (
      <div className="container">
        <LoadingBar />
        <Header />
        {this.props.loading === true ? null : <Content />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  console.log(authedUser);
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
