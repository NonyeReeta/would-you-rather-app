import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helper";
import { Link } from "react-router-dom";

class Unanswered extends Component {
  render() {
    const { unAnswered, users } = this.props;
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
            avatar: users[author].avatarURL,
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

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  const isAnswered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);
  if (!isAnswered) {
    const unAnswered = formatQuestion(question);
    return { unAnswered, users };
  }
}

export default connect(mapStateToProps)(Unanswered);
