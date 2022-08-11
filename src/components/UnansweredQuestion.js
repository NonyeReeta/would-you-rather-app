import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Question from "./Question";
import { handleAddAnswer } from "../actions/questions";

function UnansweredQuestion(props) {
  const location = useLocation();
  const { authedUser, dispatch, avatar } = props;
  const { author, optionOne, optionTwo, id } = location.state;
  const navigate = useNavigate();
  const handleButton = (e) => {
    e.preventDefault();
    const answer = e.target.innerHTML === optionOne ? "optionOne" : "optionTwo";
    dispatch(handleAddAnswer({ authedUser, id, answer }));
    navigate(Question, {
      state: {
        optionOne,
        optionTwo,
        author,
        isAnswered: true,
        id,
        text: e.target.innerHTML,
      },
    });
  };
  return (
    <div className="question-content">
      <div>
        <img src={avatar} alt={`Avatar of ${author}`} className="avatar"></img>
        <h3>Would you rather,</h3>

        <button className="button" onClick={(e) => handleButton(e)}>
          {optionOne.text}
        </button>
        <button className="button" onClick={(e) => handleButton(e)}>
          {optionTwo.text}
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser }, { avatar }) {
  return { authedUser, avatar };
}
export default connect(mapStateToProps)(UnansweredQuestion);
