import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";

class Content extends Component {
  render() {
    return (
      <div className="content-nav">
        <div className="unanswered">
          <h4>Unanswered</h4>
          <ul className="question-list">
            {this.props.questionsIds.map((id) => (
              <li key={id}>
                <Questions id={id} />
              </li>
            ))}
          </ul>
        </div>
        <div className="answered">
          <h4>Answered</h4>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ questions }, { id }) {
  console.log(id);
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Content);
