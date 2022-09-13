import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function AnsweredQuestion(props) {
  const location = useLocation();
  const { numUsers, authedUser, text } = props;
  const { optionOne, optionTwo } = location.state;
  console.log(text === optionOne.text);
  return (
    <div className="container">
      <div className="question-content">
        <div className="options">
          <div>
            {text === optionOne.text && <p>You voted</p>}
            <h5
              style={{
                backgroundColor: optionOne.votes.includes(authedUser)
                  ? "#A5C9CA"
                  : null,
              }}
            >
              {optionOne.text}
            </h5>

            <p>{optionOne.votes.length} other users voted</p>
            <p>
              {Math.round(
                (optionOne.votes.length / numUsers + Number.EPSILON) * 100
              )}
              % of users voted
            </p>
          </div>
          <div>
            {text === optionTwo.text && <p>You voted</p>}
            <h5
              style={{
                backgroundColor: optionTwo.votes.includes(authedUser)
                  ? "#A5C9CA"
                  : null,
              }}
            >
              {optionTwo.text}
            </h5>
            <p>{optionTwo.votes.length} other users voted</p>
            <p>
              {Math.round(
                (optionTwo.votes.length / numUsers + Number.EPSILON) * 100
              )}
              % of users voted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ users, authedUser }, { text }) {
  return {
    numUsers: Object.keys(users).length,
    authedUser,
    text,
  };
}
export default connect(mapStateToProps)(AnsweredQuestion);
