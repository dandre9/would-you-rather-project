import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

class QuestionHomeCard extends Component {
  render() {
    const { question, user } = this.props;
    return (
      <div className="tweet">
        <img
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
          className="avatar"
        />
        <div
          className="tweet-info"
          style={{ textAlign: "left", width: "100%" }}
        >
          <div>
            <span>{user.name} question</span>
          </div>
          <br />
          {question.optionOne.text}
          <br />
          {question.optionTwo.text}
        </div>
        <div className="tweet-info">
          <Button style={{ margin: "auto" }} variant="outlined" color="primary">
            View Poll
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];

  return {
    question,
    user,
  };
}

export default connect(mapStateToProps)(QuestionHomeCard);
