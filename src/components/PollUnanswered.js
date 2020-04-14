import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { handleVoteQuestion } from "../actions/questions";

class PollUnanswered extends Component {
  state = {
    option1: "",
    option2: "",
  };

  handleRadioChange = (e, state) => {
    if (state === "option1") {
      this.setState({ option1: e.target.checked, option2: !e.target.checked });
    } else {
      this.setState({ option2: e.target.checked, option1: !e.target.checked });
    }
  };

  vote = () => {
    const { dispatch, authedUser, question } = this.props;
    let { option1 } = this.state;
    const vote = option1 ? "optionOne" : "optionTwo";

    dispatch(handleVoteQuestion(authedUser, question.id, vote));
  };

  render() {
    const { user, question } = this.props;
    const { option1, option2 } = this.state;

    return (
      <div className="tweet" style={{ marginTop: 20 }}>
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
          <div>{question.optionOne.text}</div>
          <br />
          <div>{question.optionTwo.text}</div>
        </div>
        <div
          className="tweet-info"
          style={{ textAlign: "left", width: "100%" }}
        >
          <span>Chose one:</span>

          <br />
          <div>
            <input
              onChange={(e) => this.handleRadioChange(e, "option1")}
              type="radio"
              id="option1"
              name="vote"
              checked={option1}
            />
          </div>
          <br />
          <div>
            <input
              onChange={(e) => this.handleRadioChange(e, "option2")}
              type="radio"
              id="option2"
              name="vote"
              checked={option2}
            />
          </div>
        </div>
        <br />
        <div>
          <Button
            variant="outlined"
            style={{ margin: "auto" }}
            disabled={!option1 && !option2}
            onClick={this.vote}
          >
            Teste
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(PollUnanswered);
