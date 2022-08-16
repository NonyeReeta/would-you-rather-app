import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Content from "./Content";

class Dashboard extends Component {
  render() {
    const { authedUser } = this.props;

    return (
      <div className="container">
        <Header authedUser={authedUser} />
        <Content />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Dashboard);
