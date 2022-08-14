import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

function Question(props) {
  const location = useLocation();
  const { isAnswered, text, avatar } = location.state;
  return (
    <div className="question-content">
      {isAnswered === false && <UnansweredQuestion avatar={avatar} />}
      {isAnswered === true && <AnsweredQuestion text={text} />}
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return { numUsers: Object.keys(users).length, authedUser };
}
export default connect(mapStateToProps)(Question);
