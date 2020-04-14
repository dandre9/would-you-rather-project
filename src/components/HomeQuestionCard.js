import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class QuestionHomeCard extends Component {
  render() {
    const { question, user, id } = this.props;
    let linkRedirect = `/question/${id}`;
    if (question.timestamp > 1577836800000) {
      linkRedirect = `/notfound`;
    }

    return (
      <div className="question">
        <img
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
          className="avatar"
        />
        <div
          className="question-info"
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
        <div className="question-info">
          <Link to={linkRedirect}>
            <Button
              style={{ margin: "auto" }}
              variant="outlined"
              color="primary"
            >
              View Poll
            </Button>
          </Link>
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
