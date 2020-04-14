import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    firstOption: "",
    secondOption: "",
    toHome: false,
  };

  handleInputChange = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { dispatch } = this.props;
    const { firstOption, secondOption } = this.state;

    dispatch(handleAddQuestion(firstOption, secondOption));

    this.setState({ firstOption: "", secondOption: "", toHome: true });
  };

  render() {
    const { firstOption, secondOption, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h2 style={{ marginBottom: 50 }} className="center">
          Create a new question
        </h2>
        <div className="form-div">
          <h3>Would you rather...</h3>
          <form className="new-question" onSubmit={this.handleSubmit}>
            <input
              onChange={(e) => this.handleInputChange(e, "firstOption")}
              style={{ marginBottom: 20 }}
              className="form-input"
              placeholder="First option"
              value={firstOption}
            />
            <input
              onChange={(e) => this.handleInputChange(e, "secondOption")}
              value={secondOption}
              className="form-input"
              placeholder="Second option"
            />
            <button
              className="btn"
              type="submit"
              disabled={!firstOption || !secondOption}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
