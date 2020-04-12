import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderBoardCard from "./LeaderBoardCard";

class LeaderBoard extends Component {
  render() {
    console.log(this.props);

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

function mapStateToProps({ users, questions }) {
  const leaderBoard = Object.keys(users).map((userId) => {
    let questionsMade = 0;
    let questionsAnswered = 0;
    Object.keys(questions).forEach((questionId) => {
      if (questions[questionId].author === userId) {
        questionsMade++;
      }
      if (
        questions[questionId].optionOne.votes.includes(userId) ||
        questions[questionId].optionTwo.votes.includes(userId)
      ) {
        questionsAnswered++;
      }
    });

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
