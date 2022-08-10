import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function AnsweredQuestion(props) {
  const location = useLocation();
  const { numUsers, authedUser } = props;
  const { optionOne, optionTwo, id } = location.state;

  return (
    <div className="question-content">
      <div className="options">
        <div>
          <h5
            style={{
              backgroundColor: optionOne.votes.includes(authedUser)
                ? "#A5C9CA"
                : null,
            }}
          >
            {optionOne.text}
          </h5>
          <p>{optionOne.votes.length} users voted</p>
          <p>
            {Math.round(
              (optionOne.votes.length / numUsers + Number.EPSILON) * 100
            ) / 100}
            % of users voted
          </p>
        </div>
        <div>
          <h5
            style={{
              backgroundColor: optionTwo.votes.includes(authedUser)
                ? "#A5C9CA"
                : null,
            }}
          >
            {optionTwo.text}
          </h5>
          <p>{optionTwo.votes.length} users voted</p>
          <p>
            {Math.round(
              (optionTwo.votes.length / numUsers + Number.EPSILON) * 100
            ) / 100}
            % of users voted
          </p>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return { numUsers: Object.keys(users).length, authedUser };
}
export default connect(mapStateToProps)(AnsweredQuestion);
