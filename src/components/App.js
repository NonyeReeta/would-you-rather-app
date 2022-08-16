import React, { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Question from "./Question";
import Add from "./Add";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";
import Header from "./Header";

class App extends Component {
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
            <Header authedUser={authedUser} />

            <Routes>
              <Route path="/*" element={<NotFound />}></Route>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/add" element={<Add />}></Route>
              <Route path="/leaderboard" element={<LeaderBoard />}></Route>
              <Route path="/questions/:id" element={<Question />}></Route>
              <Route path="/questions/:wrong_id" element={NotFound}></Route>
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
