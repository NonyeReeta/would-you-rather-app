import React from "react";
import { connect } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

function Question(props) {
  const location = useLocation();
  // const { numUsers, authedUser, dispatch } = props;
  const { author, optionOne, optionTwo, isAnswered, id, text } = location.state;
  console.log(id);
  return (
    <div className="question-content">
      <Link to="/">
        <button className="close-question">Close</button>
      </Link>
      {isAnswered === false && <UnansweredQuestion />}
      {isAnswered === true && <AnsweredQuestion id={id} text={text} />}
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return { numUsers: Object.keys(users).length, authedUser };
}
export default connect(mapStateToProps)(Question);
