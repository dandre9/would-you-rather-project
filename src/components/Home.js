import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, Tabs, Tab } from "@material-ui/core";

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

    return (
      <div>
        <Paper square>
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
          {this.props.unansweredQuestionIds.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  const answeredQuestionIds = Object.keys(questions).filter(
    (questionId) =>
      questions[questionId].optionOne.votes.includes(authedUser) ||
      questions[questionId].optionTwo.votes.includes(authedUser)
  );

  const unansweredQuestionIds = Object.keys(questions).filter(
    (questionId) => !answeredQuestionIds.includes(questionId)
  );

  return {
    answeredQuestionIds,
    unansweredQuestionIds,
  };
}

export default connect(mapStateToProps)(Home);
