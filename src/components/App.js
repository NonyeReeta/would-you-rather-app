import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Question from "./Question";
import Add from "./Add";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";

class App extends Component {
  state = {
    loggedin: false,
  };
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <div>
        <LoadingBar />

        {authedUser === null ? (
          <Login />
        ) : (
          <div className="container">
            <Routes>
              <Route path="/*" element={<NotFound />}></Route>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/add" element={<Add />}></Route>
              <Route path="/leaderboard" element={<LeaderBoard />}></Route>
              <Route path="/questions/:id" element={<Question />}></Route>
            </Routes>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
