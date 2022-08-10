import React, { Component } from "react";
import { connect } from "react-redux";
import { formatUnansweredQuestion, formatDate } from "../utils/helper";
import { Link } from "react-router-dom";

class Answered extends Component {
  render() {
    const { answered } = this.props;
    // console.log(answered);
    if (answered === undefined) {
      return <ul></ul>;
    }
    const { id, author, text, optionOne, optionTwo, timestamp } = answered;
    return (
      <div className="question">
        <Link
          to={`/questions/:${id}`}
          state={{
            author,
            optionOne: optionOne,
            optionTwo: optionTwo,
            isAnswered: true,
            id,
          }}
          style={{ textDecoration: "none" }}
        >
          <div className="question-info">
            <div>
              <span>{text}</span>
              <h6>{`By ${author}`}</h6>
              <p>{formatDate(timestamp)}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }, { id }) {
  const question = questions[id];
  const isAnswered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);
  if (isAnswered) {
    const answered = formatUnansweredQuestion(question);
    return { answered };
  }
}

export default connect(mapStateToProps)(Answered);
