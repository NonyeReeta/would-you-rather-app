import React, { Component } from "react";
import { connect } from "react-redux";
import Unanswered from "./Unanswered";
import Answered from "./Answered";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div className="content">
        <div className="content-nav">
          <button onClick={() => this.setState({ show: true })}>
            <h4 tabIndex="1">Unanswered</h4>
          </button>
          <button onClick={() => this.setState({ show: false })}>
            <h4 tabIndex="2">Answered</h4>
          </button>
        </div>
        {this.state.show === true && (
          <div className="unanswered">
            <ul className="question-list">
              {this.props.questionsIds.map((id) => (
                <li key={id}>
                  <Unanswered id={id} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {this.state.show === false && (
          <div className="answered">
            <ul className="question-list">
              {this.props.questionsIds.map((id) => (
                <li key={id}>
                  <Answered id={id} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps({ questions }) {
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
