import React, { Component } from "react";
import { Button } from "@material-ui/core";

class QuestionHomeCard extends Component {
  render() {
    //TODO: Estilizar o card
    const { user } = this.props;
    return (
      <div className="tweet">
        <img
          src={user.avatar}
          alt={`Avatar of ${user.userName}`}
          className="avatar"
        />
        <div
          className="tweet-info"
          style={{ textAlign: "left", width: "100%" }}
        >
          <div>
            <span>{user.userName}</span>
          </div>
          <br />
          Answered questions: {user.questionsAnswered}
          <br />
          Created questions: {user.questionsMade}
        </div>
        <div className="tweet-info">Score {user.score}</div>
      </div>
    );
  }
}

export default QuestionHomeCard;
