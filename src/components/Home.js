import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, Tabs, Tab } from "@material-ui/core";
import HomeQuestionCard from "./HomeQuestionCard";

class Home extends Component {
  state = {
    selectedTab: 0,
  };

  handleTabChange = (e, value) => {
    e.preventDefault();

    this.setState({ selectedTab: value });
  };

  render() {
    console.log(this.props);
    const { selectedTab } = this.state;

    const questionsIds =
      selectedTab === 0
        ? this.props.unansweredQuestionIds
        : this.props.answeredQuestionIds;

    return (
      <div>
        <Paper square style={{ maxWidth: 520, margin: "auto" }}>
          <Tabs
            centered
            value={selectedTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleTabChange}
          >
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </Paper>
        <ul className="dashboard-list">
          {questionsIds.map((id) => (
            <li key={id}>
              <HomeQuestionCard id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const authedUserObj = users[authedUser];

  const answeredQuestionIds = Object.keys(authedUserObj.answers);

  const unansweredQuestionIds = Object.keys(questions).filter(
    (questionId) => !answeredQuestionIds.includes(questionId)
  );

  return {
    answeredQuestionIds: answeredQuestionIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unansweredQuestionIds: unansweredQuestionIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Home);
