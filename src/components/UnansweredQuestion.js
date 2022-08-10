import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import AnsweredQuestion from "./AnsweredQuestion";
import { handleAddAnswer } from "../actions/questions";

function UnansweredQuestion(props) {
  const location = useLocation();
  const { authedUser, dispatch } = props;
  const { author, optionOne, optionTwo, id } = location.state;

  const handleButton = (e) => {
    e.preventDefault();
    const answer = e.target.innerHTML === optionOne ? "optionOne" : "optionTwo";
    dispatch(handleAddAnswer({ authedUser, id, answer }));
  };
  return (
    <div className="question-content">
      <div>
        <h3>Would you rather,</h3>
        <button className="button" onClick={(e) => handleButton(e)}>
          {optionOne}
        </button>
        <button className="button" onClick={(e) => handleButton(e)}>
          {optionTwo}
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(UnansweredQuestion);
