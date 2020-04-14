import React, { Component } from "react";

class QuestionHomeCard extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="question">
        <img
          src={user.avatar}
          alt={`Avatar of ${user.userName}`}
          className="avatar"
        />
        <div
          className="question-info"
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
        <div style={{ marginTop: 10 }} className="question-info">
          Score <h3>{user.score}</h3>
        </div>
      </div>
    );
  }
}

export default QuestionHomeCard;
