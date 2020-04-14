import React, { Component } from "react";
import { connect } from "react-redux";
import PollAnswered from "./PollAnswered";
import PollUnanswered from "./PollUnanswered";

class Poll extends Component {
  state = {
    selectedTab: 0,
  };

  render() {
    const { user, question, authedUser } = this.props;

    if (this.props.isAnswered) {
      return (
        <div>
          <PollAnswered
            user={user}
            question={question}
            authedUser={authedUser}
          />
        </div>
      );
    } else {
      return (
        <div>
          <PollUnanswered />
        </div>
      );
    }
  }
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const question = questions[match.params.id];
  const user = users[question.author];
  const isAnswered = Object.keys(users[authedUser].answers).includes(
    match.params.id
  );

  return {
    question,
    user,
    authedUser,
    isAnswered,
  };
}

export default connect(mapStateToProps)(Poll);
