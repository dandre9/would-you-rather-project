import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  VOTE_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case VOTE_QUESTION:
      console.log(action);
      let question = state[action.voteInfo.qid];
      question[action.voteInfo.answer].votes.push(action.voteInfo.authedUser);

      return {
        ...state,
        [action.voteInfo.qid]: question,
      };
    default:
      return state;
  }
}
