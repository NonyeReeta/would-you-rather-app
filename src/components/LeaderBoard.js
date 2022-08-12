import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  render() {
    const { leaderboardData } = this.props;
    return (
      <div>
        <ul className="board-container">
          {leaderboardData.map((data) => (
            <li key={data.id} className="board">
              <img
                src={data.avatarURL}
                alt={`Avatar of ${data.name}`}
                className="avatar"
              ></img>
              <p>{data.name}</p>
              <h6>{`Total score: ${data.score}`}</h6>

              <h6>{`Total of ${data.questionsCount} questions asked`}</h6>
              <h6>{`Total of ${data.answersCount} questions answered`}</h6>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  /* Leaderboard date from https://knowledge.udacity.com/questions/635207 */
  const leaderboardData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answersCount: Object.values(user.answers).length,
      questionsCount: user.questions.length,
      score: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.score - b.score)
    .reverse()
    .slice(0, 3);
  return { leaderboardData };
}

export default connect(mapStateToProps)(LeaderBoard);
