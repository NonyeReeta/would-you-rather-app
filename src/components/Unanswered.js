import React, { Component } from "react";
import { connect } from "react-redux";
import { formatUnansweredQuestion, formatDate } from "../utils/helper";
import { Link } from "react-router-dom";

class Unanswered extends Component {
  render() {
    const { unAnswered } = this.props;
    // console.log(answered);
    if (unAnswered === undefined) {
      return <ul></ul>;
    }
    const { id, author, text, optionOne, optionTwo, timestamp } = unAnswered;
    return (
      <div className="question">
        <Link
          to={`/questions/:${id}`}
          state={{
            author,
            optionOne: optionOne,
            optionTwo: optionTwo,
            isAnswered: false,
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
  if (!isAnswered) {
    const unAnswered = formatUnansweredQuestion(question);
    return { unAnswered, id };
  }
}

export default connect(mapStateToProps)(Unanswered);
