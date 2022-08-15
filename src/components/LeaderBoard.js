import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "./Header";

class LeaderBoard extends Component {
  render() {
    const { leaderboardData, authedUser } = this.props;
    if (!authedUser) {
      return <Navigate to="/" />;
    }
    return (
      <div className="container">
        <Header authedUser={authedUser} />
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
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
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
  return { leaderboardData, authedUser };
}

export default connect(mapStateToProps)(LeaderBoard);
