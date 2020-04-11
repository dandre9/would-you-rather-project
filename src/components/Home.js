import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, Tabs, Tab } from "@material-ui/core";
import QuestionHomeCard from "./QuestionHomeCard";

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
      selectedTab === 1
        ? this.props.answeredQuestionIds
        : this.props.unansweredQuestionIds;

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
          {questionsIds.map((id) => (
            <li key={id}>
              <QuestionHomeCard id={id} />
            </li>
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
