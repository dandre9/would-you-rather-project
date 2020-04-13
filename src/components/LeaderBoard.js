import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderBoardCard from "./LeaderBoardCard";

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <ul className="dashboard-list">
          {this.props.leaderBoard.map((user) => (
            <li key={user.userId}>
              <LeaderBoardCard user={user} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const leaderBoard = Object.keys(users).map((userId) => {
    let questionsMade = users[userId].questions.length;
    let questionsAnswered = Object.keys(users[userId].answers).length;

    return {
      userId,
      userName: users[userId].name,
      avatar: users[userId].avatarURL,
      questionsMade,
      questionsAnswered,
      score: questionsAnswered + questionsMade,
    };
  });

  return {
    leaderBoard: leaderBoard.sort((a, b) => b.score - a.score),
  };
}

export default connect(mapStateToProps)(LeaderBoard);
