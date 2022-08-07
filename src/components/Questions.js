import React, { Component } from "react";
import { connect } from "react-redux";
import { formatUnansweredQuestion, formatDate } from "../utils/helper";

class Questions extends Component {
  render() {
    const { unanswered } = this.props;
    const { id, author, text, optionOne, optionTwo, timestamp } = unanswered;
    return (
      <div className="question">
        <div className="question-info">
          <div>
            <span>{text}</span>
            <h6>{`By ${author}`}</h6>
            <p>{formatDate(timestamp)}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }, { id }) {
  const question = questions[id];
  if (
    !question.optionOne.votes.includes(authedUser) ||
    !question.optionTwo.votes.includes(authedUser)
  )
    return {
      unanswered: formatUnansweredQuestion(question),
    };
}

export default connect(mapStateToProps)(Questions);
