import React, { Component } from "react";
import { connect } from "react-redux";
import { useLocation, Link } from "react-router-dom";

function Questions(props) {
  const location = useLocation();
  const { numUsers, authedUser } = props;
  const { author, optionOne, optionTwo, isAnswered } = location.state;
  console.log(location.state);
  return (
    <div className="question-content">
      <Link to="/">
        <button className="close-question">Close</button>
      </Link>
      {isAnswered === false && (
        <div>
          <h3>Would you rather,</h3>
          <button className="button">{optionOne}</button>
          <button className="button">{optionTwo}</button>
        </div>
      )}
      {isAnswered === true && (
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
      )}
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return { numUsers: Object.keys(users).length, authedUser };
}
export default connect(mapStateToProps)(Questions);
