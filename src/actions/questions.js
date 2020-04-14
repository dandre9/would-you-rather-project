import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addUserQuestion, addUserVote } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const VOTE_QUESTION = "VOTE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function voteQuestion(voteInfo) {
  return {
    type: VOTE_QUESTION,
    voteInfo,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    // dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(authedUser, question.id));
    });
    // .then(() => dispatch(hideLoading()));
  };
}

export function handleVoteQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    // dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => {
      dispatch(voteQuestion({ authedUser, qid, answer }));
      dispatch(addUserVote({ authedUser, qid, answer }));
    });
    // .then(() => dispatch(hideLoading()));
  };
}
